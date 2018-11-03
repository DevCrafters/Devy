import { GuildMember, Message, TextChannel } from 'discord.js'
import { Command } from '../..//command/command'
import { gistRoles } from '../gist'

function render(parent: string, data: object, depth: string): string {
  let result = ''
  for (const key of Object.keys(data)) {
    if (key[0] === '@') {
      continue
    }
    const got = data[key]
    result += depth
    const category = `${parent ? `${parent}/` : ''}${key}`
    if (got instanceof Object) {
      result += `**${got['@name']}**\n`
      result += render(`${category}`, got, depth + '  ')
    } else {
      result += `**${got}**\n`
      result +=
        depth +
        '  ' +
        gistRoles
          .filter(role => role.category === category)
          .map(role => role.name)
          .join(', ') +
        '\n'
    }
  }
  return result
}

const roleList = render('', gistRoles, '')

export const RoleListCommand: Command = {
  execute: (
    sender: GuildMember,
    channel: TextChannel,
    message: Message,
    data: RegExpExecArray
  ) => {
    channel.send(roleList)
  },
  regex: /역할 목록 보여줘/
}
