import { BaseObject, BaseResponse } from '../Global'
import { Participation } from './Participation'

export interface Communication {
  id: string
  subject: string
  participationsNumber: number | null
  recipientsSummary: string | null
  read: boolean | null
  replyToAllAllowed: boolean | null
  replyToSenderAllowed: boolean | null
  readTrackingEnabled: boolean | null
  firstParticipationContent: string | null
  lastParticipation?: Participation
}

export type NewCommunicationAttributes = Partial<Communication> & {
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
