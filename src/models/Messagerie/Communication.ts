import { BaseObject, BaseResponse } from '../Global'
import { PersonType } from './UsersMailSettings'
import { ParticipantAttributes, ParticipantIncludedAttributes } from './Participant'
import { ParticipationAttributes } from './Participation'

export interface CommunicationAttributes {
  subject: string
  participationsNumber: number | null
  recipientsSummary: string | null
  read: boolean | null
  replyToAllAllowed: boolean | null
  replyToSenderAllowed: boolean | null
  readTrackingEnabled: boolean | null
  firstParticipationContent: string | null
}

export type Communication = BaseResponse<CommunicationAttributes, {
  lastParticipation: {
    data: BaseObject<'participation'> | null
  }
}, 'communication'>

export type CommunicationIncluded = BaseResponse<ParticipationAttributes, {
  sender: {
    data: BaseObject<'personParticipant'> | null
  }
}, 'participation'>
| BaseResponse<ParticipantAttributes, {
  technicalUser?: {
    data: BaseObject<'technicalUser'> | null
  }
  person?: {
    data: BaseObject<PersonType> | null
  }
}, 'personParticipant'>
| BaseResponse<ParticipantIncludedAttributes, {
  school: {
    data: BaseObject | null
  }
}, PersonType>

export type NewCommunicationAttributes = Partial<CommunicationAttributes> & {
  subject: string
  firstParticipationContent: string
}

export interface NewCommunicationRelationship {
  toRecipients: {
    data: Array<BaseObject<'groupContact' | 'personContact'>>
  }
  ccRecipients?: {
    data: Array<BaseObject<'groupContact' | 'personContact'>>
  }
  bccRecipients?: {
    data: Array<BaseObject<'groupContact' | 'personContact'>>
  }
}

export type NewCommunication = Omit<BaseResponse<NewCommunicationAttributes, NewCommunicationRelationship, 'communication'>, 'id'>
