import { BaseObject, BaseResponse, BaseResponseAttributes } from '../Global'
import { PersonType } from './UsersMailSettings'
import { ParticipantAttributes, TechnicalUserAttributes } from './Participant'
import { ParticipationAttributes } from './Participation'
import { UserAttributes } from '../Global/User'

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
  person: {
    data: BaseObject<PersonType> | null
  }
}, 'personParticipant'>
| BaseResponse<TechnicalUserAttributes, {
  technicalUser: {
    data: BaseObject<'technicalUser'> | null
  }
}, 'personParticipant'>
| BaseResponseAttributes<TechnicalUserAttributes, 'technicalUser'>
| BaseResponse<UserAttributes, {
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
