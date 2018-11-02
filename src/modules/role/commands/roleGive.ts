import { GuildMember, Message, TextChannel } from 'discord.js'
import { ICommand } from '../../command/command'
import { prefix } from '../../command/commandExecutor'
import { flattenNames } from '../definitions'

export const RoleGiveCommand: ICommand = {
  execute: (
    sender: GuildMember,
    channel: TextChannel,
    message: Message,
    data: RegExpExecArray
  ) => {
    const roleName = data[1]
    if (!flattenNames.includes(roleName)) {
      channel.send(
        `'${roleName}'은 알 수 없는 역할이에요.\n${prefix} 역할 목록 보여줘\n를 쳐서 역할 목록을 확인해주세요.`
      )
      return
    }
    const role = channel.guild.roles.filter(it => it.name === roleName).first()
    if (role === null) {
      channel.send(`길드에 역할이 없어요.`)
      return
    }
    if (sender.roles.has(roleName)) {
      channel.send(`'${roleName}'을 이미 갖고 계신 것 같아요!`)
      return
    }
    sender.addRole(role)
    channel.send(`<@!${sender.id}> 역할 넣었어요!`)
  },
  regex: /역할 (.+) 넣어줘/
}
