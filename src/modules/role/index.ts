import { Message } from 'discord.js'
import { client } from '../../bot'
import { DevelopmentCategory } from './colors'
import { DesignerRole } from './designer'
import { DeveloperRole } from './developer'
import { GamerRole } from './gamer'

export function initializeRole() {
  const developerRoles = {
    codeEditor: [
      new DeveloperRole('Atom 사용자', DevelopmentCategory.CodeEditor),
      new DeveloperRole('Eclipse 사용자', DevelopmentCategory.CodeEditor),
      new DeveloperRole('Emacs 사용자', DevelopmentCategory.CodeEditor),
      new DeveloperRole('IntelliJ IDEA 사용자', DevelopmentCategory.CodeEditor),
      new DeveloperRole('Notepad++ 사용자', DevelopmentCategory.CodeEditor),
      new DeveloperRole('vim 사용자', DevelopmentCategory.CodeEditor),
      new DeveloperRole('Visual Studio 사용자', DevelopmentCategory.CodeEditor),
      new DeveloperRole(
        'Visual Studio Code 사용자',
        DevelopmentCategory.CodeEditor
      ),
      new DeveloperRole('Xcode 사용자', DevelopmentCategory.CodeEditor)
    ],
    database: [
      new DeveloperRole('SQL 코더', DevelopmentCategory.Database),
      new DeveloperRole('MongoDB 사용자', DevelopmentCategory.Database)
    ],
    framework: [
      new DeveloperRole('AspectJ 개발자', DevelopmentCategory.Framework),
      new DeveloperRole('Unity 개발자', DevelopmentCategory.Framework),
      new DeveloperRole('UnrealEngine 개발자', DevelopmentCategory.Framework),
      new DeveloperRole('Spring 개발자', DevelopmentCategory.Framework)
    ],
    language: {
      esolang: [
        new DeveloperRole('아희 개발자', DevelopmentCategory.EsoLang),
        new DeveloperRole('JSFuck 개발자', DevelopmentCategory.EsoLang)
      ],
      jvm: [
        new DeveloperRole('Groovy 개발자', DevelopmentCategory.JvmLang),
        new DeveloperRole('Java 개발자', DevelopmentCategory.JvmLang),
        new DeveloperRole('Kotlin 개발자', DevelopmentCategory.JvmLang),
        new DeveloperRole('Scala 개발자', DevelopmentCategory.JvmLang)
      ],
      native: [
        new DeveloperRole('C++ 개발자', DevelopmentCategory.NativeLang),
        new DeveloperRole('Rust 개발자', DevelopmentCategory.NativeLang),
        new DeveloperRole('Swift 개발자', DevelopmentCategory.NativeLang),
        new DeveloperRole(
          'x86 Assembly 개발자',
          DevelopmentCategory.NativeLang
        ),
        new DeveloperRole(
          'x86-64 Assembly 개발자',
          DevelopmentCategory.NativeLang
        )
      ],
      other: [
        new DeveloperRole('Delphi 개발자', DevelopmentCategory.OtherLang),
        new DeveloperRole('VB .Net 개발자', DevelopmentCategory.OtherLang),
        new DeveloperRole('Python 개발자', DevelopmentCategory.OtherLang),
        new DeveloperRole('C# 개발자', DevelopmentCategory.OtherLang),
        new DeveloperRole('Ruby 개발자', DevelopmentCategory.OtherLang),
        new DeveloperRole('Lisp 개발자', DevelopmentCategory.OtherLang),
        new DeveloperRole('Racket 개발자', DevelopmentCategory.OtherLang)
      ],
      web: [
        new DeveloperRole('CSS 개발자', DevelopmentCategory.WebLang),
        new DeveloperRole('JavaScript 개발자', DevelopmentCategory.WebLang),
        new DeveloperRole('PHP 개발자', DevelopmentCategory.WebLang)
      ]
    },
    others: [
      new DeveloperRole('펌웨어 개발자', DevelopmentCategory.Other),
      new DeveloperRole('PLC 개발자', DevelopmentCategory.Other)
    ],
    scripting: [
      new DeveloperRole('AutoHotKey', DevelopmentCategory.Scripting),
      new DeveloperRole('CommandHelper', DevelopmentCategory.Scripting),
      new DeveloperRole('Skript', DevelopmentCategory.Scripting),
      new DeveloperRole(
        'Minecraft Command Block',
        DevelopmentCategory.Scripting
      ),
      new DeveloperRole('MagicSpells', DevelopmentCategory.Scripting)
    ]
  }
  const designerRoles = {
    job: [new DesignerRole('앱 디자이너'), new DesignerRole('웹 디자이너')],
    others: [new DesignerRole('디자이너')],
    tool: [
      new DesignerRole('Adobe After Effects'),
      new DesignerRole('Adobe Illustrator'),
      new DesignerRole('Adobe Photoshop'),
      new DesignerRole('Adobe Premier'),
      new DesignerRole('Vegas')
    ]
  }
  const gamerRoles = [
    new GamerRole('오버워치'),
    new GamerRole('리그 오브 레전드'),
    new GamerRole('소녀전선'),
    new GamerRole('마인크래프트'),
    new GamerRole('PLAYERUNKNOWN’S BATTLEGROUNDS'),
    new GamerRole('히어로즈 오브 더 스톰'),
    new GamerRole('메이플스토리'),
    new GamerRole('붕괴3rd'),
    new GamerRole('레인보우 식스 시즈')
  ]

  const flatten = [
    ...developerRoles.codeEditor,
    ...developerRoles.database,
    ...developerRoles.framework,
    ...developerRoles.language.jvm,
    ...developerRoles.language.web,
    ...developerRoles.language.other,
    ...developerRoles.language.native,
    ...developerRoles.language.esolang,
    ...developerRoles.others,
    ...developerRoles.scripting,
    ...designerRoles.job,
    ...designerRoles.others,
    ...designerRoles.tool,
    ...gamerRoles
  ]

  const flattenNames = flatten.map(it => it.name)

  const id = client.user.id
  const prefix = `<@${id}>`
  const guild = client.guilds.get('333193886946295808')

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

  const help = `
  | 개발자방 공식 봇, Devy에요! 저는 이런걸 할 수 있어요.
  | **역할 명령어**
  |  ${prefix} 역할 목록 보여줘 - 제가 관리하는 역할 목록을 보여드릴게요!
  |  ${prefix} 역할 (이름) 넣어줘 - 역할을 넣어드릴게요!
  |  ${prefix} 역할 (이름) 빼줘 - 역할을 빼드릴게요!
  `
    .split('|')
    .map(it => it.trimRight())
    .filter(it => it.length > 0)
    .join('\n')

  client.on('message', async msg => {
    if (!msg.content.startsWith(prefix)) {
      return
    }
    if (msg.channel.id !== '333196464996220929') {
      const message = (await msg.channel.send(
        '명령어는 <#333196464996220929> 채널에서 사용해주세요!'
      )) as Message
      setTimeout(() => {
        message.delete()
      }, 3000)
      return
    }
    const data = msg.content.substring(prefix.length + 1)
    if (data === '역할 목록 보여줘') {
      msg.channel.send(roleList)
    } else if (data.startsWith('역할 ') && data.endsWith(' 넣어줘')) {
      const roleName = data.substring(3, data.length - 4)
      console.log(
        `'${roleName}', ${roleName.length}, ${roleName in flattenNames}`
      )
      if (!flattenNames.includes(roleName)) {
        msg.channel.send(
          `'${roleName}'은 알 수 없는 역할이에요.\n${prefix} 역할 목록 보여줘\n를 쳐서 역할 목록을 확인해주세요.`
        )
        return
      }
      const role = guild.roles.filter(it => it.name === roleName).first()
      if (role === null) {
        msg.channel.send(`길드에 역할이 없어요.`)
        return
      }
      guild.member(msg.author).addRole(role)
      msg.channel.send(`<@!${msg.author.id}> 역할 넣었어!`)
    } else if (data.startsWith('역할 ') && data.endsWith(' 빼줘')) {
      const roleName = data.substring(3, data.length - 3)
      if (!flattenNames.includes(roleName)) {
        msg.channel.send(
          `'${roleName}'은 알 수 없는 역할이에요.\n${prefix} 역할 목록 보여줘\n를 쳐서 역할 목록을 확인해주세요.`
        )
        return
      }
      const role = guild.roles.filter(it => it.name === roleName).first()
      if (role === null) {
        msg.channel.send(`길드에 역할이 없어요.`)
        return
      }
      guild.member(msg.author).removeRole(role)
      msg.channel.send(`<@!${msg.author.id}> 역할 뺐어요!`)
    } else if (data === '도와줘') {
      msg.channel.send(help)
    } else {
      msg.channel.send(
        `무슨 명령어를 쓰고 싶은건가요? 저에 대해 잘 모르겠다면\n${prefix} 도와줘\n라고 쳐주세요!`
      )
    }
  })
}
