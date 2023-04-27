import { BaseObject, BaseResponse } from '../Global'
import { Participant } from './Participant'
import { Attachment } from '../School/Attachment'

export interface Participation {
  id: string
  dateTime: string
  content: string
  read: boolean
  sender: Participant
  attachments: Attachment[]
}

export interface NewParticipationAttributes {
  content: string
}

export interface NewParticipationRelationships {
  communication: {
    data: BaseObject<'communication'>
  }
}

export type NewParticipation = Omit<BaseResponse<NewParticipationAttributes, NewParticipationRelationships, 'participation'>, 'id'>
