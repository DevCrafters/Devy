import { DesignerColor } from './colors'
import { ServerRole } from './serverRole'

export class DesignerRole extends ServerRole {
  constructor(name: string) {
    super(name, DesignerColor)
  }
}
