import type { User } from '../Common'
import type { TechnicalUser } from './TechnicalUser'

export interface Participant {
  id: string
  category: 'INITIATOR' | 'TO' | 'CC'
  additionalInfo: any
  label?: string
  fromGroup?: boolean
  person?: User
  technicalUser?: TechnicalUser
}
