import { commandMap } from '../command/commandExecutor'
import { RoleGiveCommand } from './commands/roleGive'
import { RoleListCommand } from './commands/roleList'
import { RoleTakeCommand } from './commands/roleTake'

export function initializeRole() {
  commandMap.register(RoleListCommand)
  commandMap.register(RoleGiveCommand)
  commandMap.register(RoleTakeCommand)
}
