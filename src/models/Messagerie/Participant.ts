import { SchoolRelationship, UserAttributes } from '../Global/User'
import { BaseObject, BaseResponse } from '../Global'
import { PersonType } from './UsersMailSettings'

export interface ParticipantAttributes {
  category: 'INITIATOR' | 'TO'
  additionalInfo: any
  label?: string
  fromGroup?: boolean
}

export interface ParticipantRelationships {
  technicalUser: {
    data: BaseObject<'technicalUser'> | null
  }
  person: {
    data: BaseObject<PersonType> | null
  }
}

export interface TechnicalUserAttributes {
  label: string
  logoUrl: string | null
}

export type ParticipantIncluded = BaseResponse<UserAttributes, SchoolRelationship, PersonType>

export type Participant = BaseResponse<ParticipantAttributes, ParticipantRelationships, 'personParticipant' | 'groupParticipant'>
