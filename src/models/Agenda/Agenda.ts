import { UserAttributes } from '../Global/User'
import { BaseObject, BaseResponse, BaseResponseAttributes } from '../Global'
import { HomeworkAssignmentsRelationship, HomeworkAttributes } from '../Homework/HomeworkAssignment'
import { PersonType } from '../Messagerie/UsersMailSettings'
import { LessonAttributes, LessonsRelationship, Subject } from './Lesson'

export interface AgendaAttributes {
  date: string
}

export type AgendaRelationships = LessonsRelationship & HomeworkAssignmentsRelationship

export type Agenda = BaseResponse<AgendaAttributes, AgendaRelationships, 'agenda'>

export type AgendaIncluded =
  BaseResponse<HomeworkAttributes, {
    subject: {
      data: BaseObject<'subject'>
    }
  }, 'homework'>
  | BaseResponseAttributes<Subject, 'subject'>
  | BaseResponse<LessonAttributes, {
    subject: {
      data: BaseObject<'subject'>
    }
  } & {
    teachers: {
      data: Array<BaseObject<'teacher'>>
    }
  }, 'lesson'>
  | BaseResponseAttributes<UserAttributes, PersonType>
