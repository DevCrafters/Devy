import { client } from '../bot'
export function initializeActivity() {
  client.user.setActivity('@Devy 도와줘 | 개발자방 공식 봇', {
    type: 'PLAYING'
  })
}
