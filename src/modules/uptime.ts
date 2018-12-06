import { GuildMember, Message, TextChannel } from 'discord.js';
import moment, { Locale, Moment } from 'moment';
import { Command } from '../base/command';
import { commandMap, prefix } from '../base/commandExecutor';
import { Module } from '../base/module';

export const UptimeModule: Module = {
  initialize: initializeUptimeCommand,
  name: 'Uptime'
};

async function initializeUptimeCommand() {
  const start = moment().locale('ko');
  const text = `Devy에요! `
    .split('|')
    .map(it => it.trimRight())
    .filter(it => it.length > 0)
    .join('\n');

  const uptimeCommand: Command = {
    description: 'Devy가 얼마나 오래 살았나 궁금한가요?',
    execute: async (
      sender: GuildMember,
      channel: TextChannel,
      message: Message,
      data: RegExpExecArray
    ) => {
      await channel.send(`Devy는 ${start.fromNow(true)} 정도 살았어요.`);
    },
    namespace: '기타',
    regex: /몇 살\??/,
    usage: '몇 살?'
  };

  commandMap.register(uptimeCommand);
}
