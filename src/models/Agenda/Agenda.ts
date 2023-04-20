import { UserAttributes } from '../App/User'
import { BaseObject, BaseResponse } from '../Globals'
import { HomeworkAttributes } from '../Homework/HomeworkAssignment'
import { LessonAttributes, Subject } from './Lesson'

export interface AgendaAttributes {
  date: string
}

export interface AgendaRelationships {
  lessons: {
    data: Array<BaseObject<'lesson'>>
  }
  homeworkAssignments: {
    data: Array<BaseObject<'homework'>>
  }
}

export type Agenda = BaseResponse<AgendaAttributes, AgendaRelationships, 'agenda'>

export interface AgendaIncludedRelationships {
  subject?: {
    data: BaseObject<'subject'>
  }
  teachers?: {
    data: Array<BaseObject<'teacher'>>
  }
}

export type AgendaIncluded = BaseResponse<HomeworkAttributes | Subject | LessonAttributes | UserAttributes, AgendaIncludedRelationships, 'homework' | 'lesson' | 'subject' | 'teacher'>
