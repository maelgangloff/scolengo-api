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

export type ParticipantIncludedAttributes = UserAttributes | {
  label: string
  logoUrl: string | null
}

export type ParticipantIncluded = BaseResponse<ParticipantIncludedAttributes, SchoolRelationship, PersonType>

export type Participant = BaseResponse<ParticipantAttributes, ParticipantRelationships, 'personParticipant' | 'groupParticipant'>
