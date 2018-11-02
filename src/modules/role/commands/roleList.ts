import { GuildMember, Message, TextChannel } from 'discord.js'
import { ICommand } from '../..//command/command'
import { designerRoles, developerRoles, gamerRoles } from '../definitions'

const roleList = `
| **1. 개발자 역할**
| **1.1. 코드 편집기**
|  ${developerRoles.codeEditor.map(it => it.name).join(', ')}
| **1.2. 데이터베이스**
|  ${developerRoles.database.map(it => it.name).join(', ')}
| **1.3. 프레임워크**
|  ${developerRoles.framework.map(it => it.name).join(', ')}
| **1.4. 언어**
|  **1.4.1. JVM 계열**
|   ${developerRoles.language.jvm.map(it => it.name).join(', ')}
|  **1.4.2. 웹**
|   ${developerRoles.language.web.map(it => it.name).join(', ')}
|  **1.4.3. 기타**
|   ${developerRoles.language.other.map(it => it.name).join(', ')}
|  **1.4.4. 네이티브**
|   ${developerRoles.language.native.map(it => it.name).join(', ')}
|  **1.4.5. 난해한 언어**
|   ${developerRoles.language.esolang.map(it => it.name).join(', ')}
| **1.5. 기타**
|  ${developerRoles.others.map(it => it.name).join(', ')}
| **1.6. 스크립팅**
|  ${developerRoles.scripting.map(it => it.name).join(', ')}
| **2. 디자이너 역할**
| **2.1. 직종**
|  ${designerRoles.job.map(it => it.name).join(', ')}
| **2.2. 기타**
|  ${designerRoles.others.map(it => it.name).join(', ')}
| **2.3. 도구**
|  ${designerRoles.tool.map(it => it.name).join(', ')}
| **3. 게이머 역할**
|  ${gamerRoles.map(it => it.name).join(', ')}
`
  .split('|')
  .map(it => it.trimRight())
  .filter(it => it.length > 0)
  .join('\n')

export const RoleListCommand: ICommand = {
  execute: (
    sender: GuildMember,
    channel: TextChannel,
    message: Message,
    data: RegExpExecArray
  ) => {
    channel.send(roleList)
  },
  regex: /역할 목록 보여줘/
}
