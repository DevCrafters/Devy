import { Client } from 'discord.js'
import 'now-env'
import { initializeActivity } from './modules/activity'
import { initializeCommandExecutor } from './modules/command/commandExecutor'
import { initializeHelpCommand } from './modules/helpCommand'
import { initializeRole } from './modules/role'
import { initializeWebpage } from './modules/webpage'

export const client = new Client()

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`)

  initializeActivity()

  initializeWebpage()

  initializeCommandExecutor()
  initializeRole()
  initializeHelpCommand()
})

client.login(process.env.DEVY_TOKEN)
