import { BaseObject, BaseResponse } from '../Globals'
import { ParticipantIncludedAttributes } from './Participant'
import { PersonType } from './UsersMailSettings'
import { AttachmentAttributes } from '../School/Attachment'

export interface ParticipationAttributes {
  dateTime: string
  content: string
  read: boolean
}

export interface ParticipationRelationships {
  attachments: {
    data: Array<BaseObject<'attachment'>> | null
  }
  sender: {
    data: BaseObject<'personParticipant'>
  }
}

export type Participation = BaseResponse<ParticipationAttributes, ParticipationRelationships, 'participation'>

export type ParticipationIncludedAttributes = {
  category: 'INITIATOR' | 'TO'
  additionalInfo: any | null
  fromGroup: boolean
} | ParticipantIncludedAttributes | AttachmentAttributes

export type ParticipationIncludedRelationships = {
  technicalUser: {
    data: BaseObject<'technicalUser'> | null
  }
  person: {
    data: BaseObject<PersonType> | null
  }
} | {
  school: {
    data: any
  }
}

export type ParticipationIncluded = BaseResponse<ParticipationIncludedAttributes, ParticipationIncludedRelationships, PersonType | 'school' | 'attachment' | 'personParticipant'>
