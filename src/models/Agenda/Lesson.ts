import { UserAttributes } from '../App/User'
import { BaseObject, BaseResponse } from '../Globals'
import { HomeworkAttributes } from '../Homework/HomeworkAssignment'
import { AttachmentAttributes } from '../School/Attachment'

export interface Subject {
  label: string
  color: string
}

export interface LessonContent {
  html: string
  title: string
  url: string | null
}

export interface LessonAttributes {
  startDateTime: string
  endDateTime: string
  title: string
  location: string
  locationComplement: any
  canceled: boolean
}

export interface LessonRelationships {
  contents: {
    data: Array<BaseObject<'lessonContent'>>
  }
  teachers: {
    data: Array<BaseObject<'teacher'>>
  }
  subject: {
    data: BaseObject<'subject'>
  }
  toDoForTheLesson: {
    data: Array<BaseObject<'homework'>>
  }
  toDoAfterTheLesson: {
    data: Array<BaseObject<'homework'>>
  }
}

export type Lesson = BaseResponse<LessonAttributes, LessonRelationships, 'lesson'>

export interface LessonIncludedRelationships {
  subject?: {
    data: BaseObject<'subject'>
  }
  attachments?: {
    data: Array<BaseObject<'attachment'>>
  }
}

export type LessonIncludedAttributes = AttachmentAttributes | HomeworkAttributes | Subject | UserAttributes | LessonContent

export type LessonIncluded = BaseResponse<LessonIncludedAttributes, LessonIncludedRelationships, 'subject' | 'homework' | 'teacher' | 'attachment' | 'lessonContent'>
