import { Module } from '../base/module';
import { client } from '../bot';
import { start } from './uptime';

export const ActivityModule: Module = {
  initialize: initializeActivity,
  name: 'Activity'
};

async function initializeActivity() {
  setInterval(() => {
    client.user.setActivity(
      `@Devy 도와줘 | 태어난지 ${start.fromNow(true)} 정도 지났어요`,
      {
        type: 'PLAYING',
        url: 'https://devy.now.sh'
      }
    );
  }, 5 * 60 * 1000);
}
