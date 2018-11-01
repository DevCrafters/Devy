import Color from 'color'

export const Colors = {
  CodeEditor: Color('hsl(230, 5%, 55%)'),
  Database: Color('hsl(0, 80%, 55%)'),
  Design: Color('hsl(40, 60%, 55%)'),
  Esolang: Color('hsl(120, 80%, 55%)'),
  Framework: Color('hsl(25, 80%, 55%)'),
  Game: Color('hsl(200, 35%, 55%)'),
  JvmLang: Color('hsl(15, 50%, 45%)'),
  NativeLang: Color('hsl(170, 45%, 55%)'),
  OtherDeveloper: Color('hsl(0, 0%, 45%)'),
  OtherLang: Color('hsl(60, 55%, 55%)'),
  Scripting: Color('hsl(80, 25%, 55%)'),
  WebLang: Color('hsl(210, 40%, 45%)')
}

export enum DevelopmentCategory {
  // Language Categories
  EsoLang = 'Esolang',
  JvmLang = 'JvmLang',
  NativeLang = 'NativeLang',
  OtherLang = 'OtherLang',
  WebLang = 'WebLang',

  // Others
  CodeEditor = 'CodeEditor',
  Database = 'Database',
  Framework = 'Framework',
  Scripting = 'Scripting',
  Other = 'OtherDeveloper'
}

export const DesignerColor = Colors.Design

export const GamerColor = Colors.Game
