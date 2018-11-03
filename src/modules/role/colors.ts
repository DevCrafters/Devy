import Color from 'color'

export const Colors = {
  design: Color('hsl(40, 60%, 55%)'),
  development: {
    'code-editor': Color('hsl(230, 5%, 55%)'),
    database: Color('hsl(0, 80%, 55%)'),
    framework: Color('hsl(25, 80%, 55%)'),
    language: {
      esolang: Color('hsl(120, 80%, 55%)'),
      jvm: Color('hsl(15, 50%, 45%)'),
      native: Color('hsl(170, 45%, 55%)'),
      other: Color('hsl(60, 55%, 55%)'),
      web: Color('hsl(210, 40%, 45%)')
    },
    other: Color('hsl(0, 0%, 45%)'),
    scripting: Color('hsl(80, 25%, 55%)')
  },
  game: Color('hsl(200, 35%, 55%)')
}

export function getColorFromCategory(category: string): Color | null {
  const data = category.split('/')

  let currentObject: object = Colors
  for (
    let index = 0;
    data.length > index && Object.keys(currentObject).includes(data[index]);
    index++
  ) {
    const got = currentObject[data[index]]
    if (got instanceof Color) {
      return got
    } else if (got && got instanceof Object) {
      currentObject = got
    }
  }

  return null
}
