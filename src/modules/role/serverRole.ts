import { Role } from 'discord.js';
import { guild } from '../../bot';
import { getColorFromCategory } from './colors';

export const changes = new Set<ServerRole>();
export class ServerRole {
  public readonly category: string;
  public readonly id: string;
  public readonly name: string;
  public readonly roleId: ServerRoleId;

  constructor(
    category: string,
    id: string,
    name: string,
    callable: string | null,
    notCallable: string | null,
    waits: Array<Promise<void>>
  ) {
    this.category = category;
    this.id = id;
    this.name = name;
    this.roleId = new ServerRoleId(this, callable, notCallable, waits);
  }
}
export class ServerRoleId {
  public callable: string | null;
  public notCallable: string | null;
  public callableRole: Role | null;
  public notCallableRole: Role | null;

  constructor(
    parent: ServerRole,
    callable: string | null,
    notCallable: string | null,
    waits: Array<Promise<void>>
  ) {
    this.callable = callable;
    this.notCallable = notCallable;

    this.callableRole =
      guild.roles.get(callable) ||
      guild.roles.filter(it => it.name === parent.name).first();

    if (callable && this.callableRole) {
      if (this.callableRole.name !== parent.name) {
        this.callableRole.setName(parent.name);
      }
      if (!this.callableRole.mentionable) {
        this.callableRole.setMentionable(true);
      }
    } else {
      if (this.callableRole) {
        console.log(`Registering ${parent.name} (Callable)`);
        this.callable = this.callableRole.id;
        changes.add(parent);
      } else {
        console.log(`Creating ${parent.name} (Callable)`);
        waits.push(
          guild
            .createRole({
              color: getColorFromCategory(parent.category).rgbNumber(),
              mentionable: true,
              name: parent.name
            })
            .then(role => {
              this.callableRole = role;
              this.callable = role.id;
              changes.add(parent);
            })
        );
      }
    }

    this.notCallableRole =
      guild.roles.get(notCallable) ||
      guild.roles
        .filter(
          it => (it as any).deleted !== true && it.name === parent.name + '*'
        )
        .first();

    if (notCallable && this.notCallableRole) {
      if (this.notCallableRole.name !== `${parent.name}*`) {
        this.notCallableRole.setName(`${parent.name}*`);
      }
      if (this.notCallableRole.mentionable) {
        this.notCallableRole.setMentionable(false);
      }
    } else {
      if (this.notCallableRole) {
        console.log(`Registering ${parent.name} (Not Callable)`);
        this.notCallable = this.notCallableRole.id;
        changes.add(parent);
      } else {
        console.log(`Creating ${parent.name} (Not Callable)`);
        waits.push(
          guild
            .createRole({
              color: getColorFromCategory(parent.category).rgbNumber(),
              mentionable: false,
              name: `${parent.name}*`
            })
            .then(role => {
              this.notCallableRole = role;
              this.notCallable = role.id;
              changes.add(parent);
            })
        );
      }
    }
  }
}

export const ServerRoleMapper = {
  check: value => value instanceof ServerRole,
  deserialize: object => {
    if (
      typeof object.category !== 'string' ||
      typeof object.id !== 'string' ||
      typeof object.name !== 'string'
    ) {
      return null;
    }
    return new ServerRole(
      object.category,
      object.id,
      object.name,
      object.callable,
      object.notCallable,
      []
    );
  },
  serialize: value => {
    return {
      name: value.name,
      'role-id': {
        callable: value.roleId.callable,
        'not-callable': value.roleId.notCallable
      }
    };
  },
  toString: () => 'Mapper(ServerRole)'
};
