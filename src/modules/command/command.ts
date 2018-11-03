import { GuildMember, Message, TextChannel } from 'discord.js'

export interface Command {
  regex: RegExp

  execute(
    sender: GuildMember,
    channel: TextChannel,
    message: Message,
    data: RegExpExecArray
  ): void
}
