import { Colors, DevelopmentCategory } from './colors'
import { ServerRole } from './serverRole'

export class DeveloperRole extends ServerRole {
  constructor(name: string, category: DevelopmentCategory) {
    super(name, Colors[category])
  }
}
