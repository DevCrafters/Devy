import Color from 'color'
import { ServerRoleId } from './serverRoleId'

export class ServerRole {
  public readonly category: string
  public readonly id: string
  public readonly name: string
  public readonly roleId: ServerRoleId

  constructor(
    category: string,
    id: string,
    name: string,
    roleId: ServerRoleId
  ) {
    this.category = category
    this.id = id
    this.name = name
    this.roleId = roleId
  }
}
