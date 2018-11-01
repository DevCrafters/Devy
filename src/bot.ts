import { Client } from 'discord.js'
import 'now-env'
import { initializeActivity } from './modules/activity'
import { initializeRole } from './modules/role'

export const client = new Client()

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`)
  initializeRole()
  initializeActivity()
})

client.login(process.env.DEVY_TOKEN)
