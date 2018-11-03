import { commandMap } from '../command/commandExecutor'
import { RoleGiveCommand } from './commands/roleGive'
import { RoleListCommand } from './commands/roleList'
import { RoleTakeCommand } from './commands/roleTake'
import { initializeGistRole } from './gist'

export async function initializeRole() {
  await initializeGistRole()
  commandMap.register(RoleListCommand)
  commandMap.register(RoleGiveCommand)
  commandMap.register(RoleTakeCommand)
}
