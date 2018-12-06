import { GuildMember, Message, TextChannel } from 'discord.js';

export interface Command {
  namespace: string;
  description: string;
  usage: string;
  regex: RegExp;

  execute(
    sender: GuildMember,
    channel: TextChannel,
    message: Message,
    data: RegExpExecArray
  ): void;
}
