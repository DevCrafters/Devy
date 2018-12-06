import { GuildMember, Message, RichEmbed, TextChannel } from 'discord.js';
import { Command } from '../base/command';
import { commandMap, prefix } from '../base/commandExecutor';
import { Module } from '../base/module';
import { color } from '../bot';
import '../util/array';

export const HelpModule: Module = {
  initialize: initializeHelpCommand,
  name: 'Help'
};

async function initializeHelpCommand() {
  let embed = null;

  const helpCommand: Command = {
    description: '이 도움말을 보여드릴게요!',
    execute: async (
      sender: GuildMember,
      channel: TextChannel,
      message: Message,
      data: RegExpExecArray
    ) => {
      if (!embed) {
        const fields = [];

        const commands = commandMap.commands.groupBy(value => value.namespace);

        for (const namespace of commands.keys()) {
          let text = '';
          for (const command of commands.get(namespace)) {
            text += `  ${prefix} ${command.usage} - ${command.description}\n`;
          }
          fields.push({
            name: `${namespace} 명령어`,
            value: text
          });
        }

        embed = new RichEmbed({
          color,
          description: '개발자방 공식 봇, Devy에요! 저는 이런걸 할 수 있어요.',
          fields,
          title: '도움말'
        });
      }

      await channel.send(embed);
    },
    namespace: '기타',
    regex: /도와줘/,
    usage: '도와줘'
  };

  commandMap.register(helpCommand);
}
