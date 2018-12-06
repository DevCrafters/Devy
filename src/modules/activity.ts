import { Module } from '../base/module';
import { client } from '../bot';

export const ActivityModule: Module = {
  initialize: initializeActivity,
  name: 'Activity'
};

async function initializeActivity() {
  client.user.setActivity('@Devy 도와줘 | 개발자방 공식 봇', {
    type: 'PLAYING'
  });
}
