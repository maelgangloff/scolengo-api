import { BaseObject, BaseResponse } from '../Globals'
import { ParticipantIncludedAttributes } from './Participant'
import { PersonType } from './UsersMailSettings'

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

export type CommunicationIncludedAttributes = ParticipantIncludedAttributes | {
  dateTime: string
  content: string
  read: boolean
} | {
  category: 'INITIATOR' | 'TO'
  additionalInfo: any | null
  fromGroup: boolean
}
export interface CommunicationIncludedRelationShips {
  school?: {
    data: BaseObject<'school'> | null
  }
  sender?: {
    data: BaseObject<PersonType> | null
  }
  technicalUser?: {
    data: BaseObject<'technicalUser'> | null
  }
  person?: {
    data: BaseObject<PersonType> | null
  }
}

export type CommunicationIncluded = BaseResponse<CommunicationIncludedAttributes, CommunicationIncludedRelationShips, PersonType | 'participation' | 'personParticipant'>

export type NewCommunicationAttributes = Partial<CommunicationAttributes> & {
  subject: string
  firstParticipationContent: string
}

export interface NewCommunicationRelationship {
  toRecipients: {
    data: Array<BaseObject<PersonType>>
  }
  ccRecipients?: {
    data: Array<BaseObject<PersonType>>
  }
  bccRecipients?: {
    data: Array<BaseObject<PersonType>>
  }
}

export type NewCommunication = Omit<BaseResponse<NewCommunicationAttributes, NewCommunicationRelationship, 'communication'>, 'id'>
