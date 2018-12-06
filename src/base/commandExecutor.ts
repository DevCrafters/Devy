import { Message, TextChannel } from 'discord.js'
import { client, guild } from '../bot'
import { Command } from './command'
import { Module } from './module'

export const CommandExecutorModule: Module = {
  initialize: initializeCommandExecutor,
  name: 'CommandExecutor'
}

async function initializeCommandExecutor() {
  const id = client.user.id
  prefix = `<@${id}>`

  client.on('message', async msg => {
    if (!msg.content.startsWith(prefix)) {
      return
    }
    const channel = msg.channel
    if (!(channel instanceof TextChannel)) {
      return
    }
    if (channel.id !== '333196464996220929') {
      const message = (await msg.channel.send(
        '명령어는 <#333196464996220929> 채널에서 사용해주세요!'
      )) as Message
      setTimeout(() => {
        message.delete()
      }, 3000)
      return
    }
    const data = msg.content.substring(prefix.length + 1)
    for (const command of commandMap.commands) {
      if (command.regex.test(data)) {
        command.execute(
          guild.member(msg.author),
          channel,
          msg,
          command.regex.exec(data)
        )
        return
      }
    }
    msg.channel.send(
      `무슨 명령어를 쓰고 싶은건가요? 저에 대해 잘 모르겠다면\n${prefix} 도와줘\n라고 쳐주세요!`
    )
  })
}

export let prefix = '@Devy'

export const commandMap = {
  commands: new Array<Command>(),
  register: (command: Command) => {
    commandMap.commands.push(command)
  }
}
