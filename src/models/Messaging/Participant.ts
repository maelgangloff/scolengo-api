import { User } from '../Common'

export interface Participant {
  id: string
  category: 'INITIATOR' | 'TO'
  additionalInfo: any
  label?: string
  fromGroup?: boolean
  person?: User
  technicalUser?: TechnicalUser
}

export interface TechnicalUser {
  id: string
  label: string
  logoUrl: string | null
}
