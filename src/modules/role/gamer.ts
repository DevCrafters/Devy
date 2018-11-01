import { GamerColor } from './colors'
import { ServerRole } from './serverRole'

export class GamerRole extends ServerRole {
  constructor(name: string) {
    super(name, GamerColor)
  }
}
