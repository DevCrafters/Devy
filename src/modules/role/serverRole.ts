import Color from 'color'

export class ServerRole {
  public readonly name: string
  public readonly color: Color

  constructor(name: string, color: Color) {
    this.name = name
    this.color = color
  }
}
