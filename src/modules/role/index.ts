import { commandMap } from '../../base/commandExecutor';
import { Module } from '../../base/module';
import { register } from '../../serialize/declarations';
import { RoleAlarmOffCommand } from './commands/roleAlarmOff';
import { RoleAlarmOnCommand } from './commands/roleAlarmOn';
import { RoleGiveCommand } from './commands/roleGive';
import { RoleListCommand } from './commands/roleList';
import { RoleTakeCommand } from './commands/roleTake';
import { initializeGistRole } from './gist';
import { ServerRoleMapper } from './serverRole';

export const RoleModule: Module = {
  initialize: initializeRole,
  name: 'Role'
};

async function initializeRole() {
  register(ServerRoleMapper);

  await initializeGistRole();
  commandMap.register(RoleListCommand);
  commandMap.register(RoleGiveCommand);
  commandMap.register(RoleTakeCommand);
  commandMap.register(RoleAlarmOnCommand);
  commandMap.register(RoleAlarmOffCommand);
}
