export interface BaseObject<Type = string> {
  id: string
  type: Type
}

export { AppCurrentConfig } from './CurrentConfig'
export { User } from './User'
