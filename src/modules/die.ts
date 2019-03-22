import { GuildMember, RichEmbed, TextChannel } from 'discord.js';
import { Command } from '../base/command';
import { commandMap, prefix } from '../base/commandExecutor';
import { Module } from '../base/module';
import { color } from '../bot';
import '../util/array';

export const DieModule: Module = {
  initialize: initializeHelpCommand,
  name: 'Die'
};

async function initializeHelpCommand() {
  const helpCommand: Command = {
    description: '저를 죽이시려구요? (관리자용)',
    execute: async (sender, channel, message) => {
      if (!sender.hasPermission('ADMINISTRATOR')) {
        message.delete();
        return;
      }
      await channel.send('꼴까닥');
      process.exit(0);
    },
    namespace: '기타',
    regex: /죽어/,
    usage: '죽어'
  };

  commandMap.register(helpCommand);
}
