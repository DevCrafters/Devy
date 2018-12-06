import { gist } from '../../base/config';
import { guild } from '../../bot';
import { gistRoles } from './gist';

let order: string[];

let anchor = null;

export async function reorder() {
  if (!order) {
    order = gist['role-category-order'] as string[];
  }
  if (!anchor) {
    anchor = guild.roles
      .filter(role => role.name === '--AUTO GENERATED--')
      .first().position;

    gistRoles.sort((a, b) => {
      if (a.category === b.category) {
        return a.name.localeCompare(b.name);
      } else {
        const orderA = order.indexOf(a.category) + 1 || order.length;
        const orderB = order.indexOf(b.category) + 1 || order.length;

        return orderA - orderB;
      }
    });

    let index = 1;
    console.log('Start align');
    for (const role of gistRoles) {
      console.log('Realign ' + role.name + ', ' + index);
      await role.roleId.callableRole.setPosition(anchor - index).catch(msg => {
        console.log(`Error at ${role.name} | ${msg}`);
      });
      await role.roleId.notCallableRole
        .setPosition(anchor - index - 1)
        .catch(msg => {
          console.log(`Error at ${role.name}* | ${msg}`);
        });

      index += 2;
    }

    console.log('Reorder completed');
  }
}
