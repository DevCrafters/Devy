export class ServerRoleId {
  public readonly callable: string | null
  public readonly notCallable: string | null

  constructor(callable: string | null, notCallable: string | null) {
    this.callable = callable
    this.notCallable = notCallable
  }
}
