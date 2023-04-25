import { UserAttributes } from '../Global/User'
import { BaseObject, BaseResponse, BaseResponseAttributes } from '../Global'
import { HomeworkAttributes } from '../Homework/HomeworkAssignment'
import { AttachmentAttributes } from '../School/Attachment'
import { PersonType } from '../Messagerie/UsersMailSettings'

export interface LessonsRelationship {
  lessons: {
    data: Array<BaseObject<'lesson'>>
  }
}

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
  toDoForTheLesson: {
    data: Array<BaseObject<'homework'>>
  }
  toDoAfterTheLesson: {
    data: Array<BaseObject<'homework'>>
  }
  contents: {
    data: Array<BaseObject<'lessonContent'>>
  }
  subject: {
    data: BaseObject<'subject'>
  }
  teachers: {
    data: Array<BaseObject<'teacher'>>
  }
}

export type Lesson = BaseResponse<LessonAttributes, LessonRelationships, 'lesson'>

export type LessonIncluded = BaseResponse<HomeworkAttributes, {
  subject: {
    data: BaseObject<'subject'>
  }
}, 'homework'>
| BaseResponseAttributes<Subject, 'subject'>
| BaseResponseAttributes<UserAttributes, PersonType>
| BaseResponseAttributes<AttachmentAttributes, 'attachment'>
| BaseResponse<LessonContent, {
  attachments: {
    data: Array<BaseObject<'attachment'>>
  }
}, 'lessonContent'>
