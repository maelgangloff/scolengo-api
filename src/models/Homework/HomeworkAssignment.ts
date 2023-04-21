import { Subject } from '../Agenda/Lesson'
import { UserAttributes } from '../App/User'
import { BaseObject, BaseResponse } from '../Globals'
import { PersonType } from '../Messagerie/UsersMailSettings'
import { AttachmentAttributes } from '../School/Attachment'

export interface HomeworkAttributes {
  title: string
  html: string
  dueDateTime: string
  dueDate: string | null
  done: boolean
  deliverWorkOnline: boolean
  onlineDeliveryUrl: null | string
}

export interface HomeworkRelationships {
  teacher: {
    data: BaseObject<'teacher'>
  }
  attachments: {
    data: Array<BaseObject<'attachment'>>
  }
  commonCorrectedWork?: {
    data: BaseObject | null
  }
  subject: {
    data: BaseObject<'subject'>
  }
  audio?: {
    data: any
  }
  pedagogicContent?: {
    data: any
  }
  individualCorrectedWork?: {
    data: any
  }
}

export type HomeworkAssignment = BaseResponse<HomeworkAttributes, HomeworkRelationships, 'homework'>

interface CorrectionWork {
  html: string
  correctionDate: string
}

export type HomeworkAssignmentIncludedAttributes = Subject | UserAttributes | AttachmentAttributes | CorrectionWork

export interface HomeworkAssignmentIncludedRelationships {
  attachments?: {
    data: Array<BaseObject<'attachment'>>
  }
  audio?: {
    data: any
  }
  pedagogicContent?: {
    data: any
  }
  school?: {
    data: any
  }
}

export type HomeworkAssignmentIncluded = BaseResponse<HomeworkAssignmentIncludedAttributes, HomeworkAssignmentIncludedRelationships, 'attachment' | 'subject' | 'correctedWork' | PersonType>
