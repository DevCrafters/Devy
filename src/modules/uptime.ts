import moment from 'moment';
import { Command } from '../base/command';
import { commandMap } from '../base/commandExecutor';
import { Module } from '../base/module';

export const UptimeModule: Module = {
  initialize: initializeUptimeCommand,
  name: 'Uptime'
};

export const start = moment().locale('ko');

async function initializeUptimeCommand() {
  const uptimeCommand: Command = {
    description: 'Devy가 얼마나 오래 살았나 궁금한가요?',
    execute: async (_, channel) => {
      await channel.send(`Devy는 ${start.fromNow(true)} 정도 살았어요.`);
    },
    namespace: '기타',
    regex: /몇 살\??/,
    usage: '몇 살?'
  };

  commandMap.register(uptimeCommand);
}
