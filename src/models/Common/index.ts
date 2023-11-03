export interface BaseObject<Type = string> {
  id: string
  type: Type
}

export type { AppCurrentConfig } from './CurrentConfig'
export type { User } from './User'
