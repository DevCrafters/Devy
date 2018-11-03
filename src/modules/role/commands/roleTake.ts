import { GuildMember, Message, TextChannel } from 'discord.js'
import { Command } from '../../command/command'
import { prefix } from '../../command/commandExecutor'
import { gistRoleNames } from '../gist'

export const RoleTakeCommand: Command = {
  execute: (
    sender: GuildMember,
    channel: TextChannel,
    message: Message,
    data: RegExpExecArray
  ) => {
    const dataConverted = data[1].split(',').map(it => it.trim().toLowerCase())
    const notIncluded = dataConverted.filter(it => !gistRoleNames.includes(it))
    if (notIncluded.length > 0) {
      channel.send(
        `'${notIncluded.join(
          ', '
        )}'은 알 수 없는 역할이에요.\n${prefix} 역할 목록 보여줘\n를 쳐서 역할 목록을 확인해주세요.`
      )
      return
    }
    const roles = [
      ...channel.guild.roles
        .filter(it => dataConverted.includes(it.name.toLowerCase()))
        .values()
    ]
    if (roles.length !== dataConverted.length) {
      if (roles.length === 0) {
        channel.send(`길드에 역할이 없어요.`)
        return
      }
      channel.send(`길드에 몇몇 역할이 없어요. 있는 역할만 빼드릴게요!`)
      return
    }
    const roleHas = [...sender.roles.filter(it => roles.includes(it)).values()]
    const roleNotHas = [...roles.filter(it => !roleHas.includes(it)).values()]
    if (roleNotHas.length > 0) {
      channel.send(
        `'${roleHas.map(it => it.name).join(', ')}'을 안 갖고 계신 것 같아요!`
      )
      if (roleNotHas.length === roles.length) {
        return
      }
    }
    sender.removeRoles(roleHas)
    channel.send(
      `<@!${sender.id}> 역할 ${roleHas.length > 1 ? '다 ' : ''}빼드렸어요!`
    )
  },
  regex: /역할 (.+) 빼줘/
}
