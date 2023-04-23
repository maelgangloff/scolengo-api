import { Subject } from '../Agenda/Lesson'
import { SchoolRelationship, UserAttributes } from '../Global/User'
import { BaseObject, BaseResponse, BaseResponseAttributes } from '../Global'
import { PersonType } from '../Messagerie/UsersMailSettings'
import { AttachmentAttributes } from '../School/Attachment'

export interface HomeworkAssignmentsRelationship {
  homeworkAssignments: {
    data: Array<BaseObject<'homework'>>
  }
}

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
  subject: {
    data: BaseObject<'subject'>
  }
  attachments: {
    data: Array<BaseObject<'attachment'>>
  }
  teacher: {
    data: BaseObject<'teacher'>
  }
  commonCorrectedWork?: {
    data: BaseObject | null
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

interface CorrectionWorkAttributes {
  html: string
  correctionDate: string
}

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
}

export type HomeworkAssignmentIncluded = BaseResponseAttributes<Subject, 'subject'>
| BaseResponse<UserAttributes, SchoolRelationship, PersonType>
| BaseResponse<AttachmentAttributes, HomeworkAssignmentIncludedRelationships, 'attachment'>
| BaseResponse<CorrectionWorkAttributes, HomeworkAssignmentIncludedRelationships, 'correctedWork'>
