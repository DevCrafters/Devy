export interface Module {
  readonly name: string

  initialize(): Promise<string | void>
}
