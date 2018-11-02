import { GuildMember, Message, TextChannel } from 'discord.js'
import { ICommand } from './command/command'
import { prefix } from './command/commandExecutor'

export function initializeHelpCommand() {
  const text = `
  | 개발자방 공식 봇, Devy에요! 저는 이런걸 할 수 있어요.
  | **역할 명령어**
  |  ${prefix} 역할 목록 보여줘 - 제가 관리하는 역할 목록을 보여드릴게요!
  |  ${prefix} 역할 (이름) 넣어줘 - 역할을 넣어드릴게요!
  |  ${prefix} 역할 (이름) 빼줘 - 역할을 빼드릴게요!
  `
    .split('|')
    .map(it => it.trimRight())
    .filter(it => it.length > 0)
    .join('\n')

  const helpCommand: ICommand = {
    execute: (
      sender: GuildMember,
      channel: TextChannel,
      message: Message,
      data: RegExpExecArray
    ) => {
      channel.send(text)
    },
    regex: /도와줘/
  }
}
