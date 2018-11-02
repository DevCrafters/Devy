import { DevelopmentCategory } from './colors'
import { DesignerRole } from './designer'
import { DeveloperRole } from './developer'
import { GamerRole } from './gamer'

export const developerRoles = {
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
      new DeveloperRole('x86 Assembly 개발자', DevelopmentCategory.NativeLang),
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
    new DeveloperRole('Minecraft Command Block', DevelopmentCategory.Scripting),
    new DeveloperRole('MagicSpells', DevelopmentCategory.Scripting)
  ]
}

export const designerRoles = {
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

export const gamerRoles = [
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

export const flatten = [
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

export const flattenNames = flatten.map(it => it.name)
