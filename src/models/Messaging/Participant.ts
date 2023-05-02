import { User } from '../Common'
import { TechnicalUser } from './TechnicalUser'

export interface Participant {
  id: string
  category: 'INITIATOR' | 'TO'
  additionalInfo: any
  label?: string
  fromGroup?: boolean
  person?: User
  technicalUser?: TechnicalUser
}
