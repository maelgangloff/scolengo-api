import { UserAttributes } from '../App/User'
import { BaseResponse, BaseObject } from '../Globals'
import { HomeworkAttributes } from '../Homework/HomeworkAssignment'
import { LessonAttributes, Subject } from './Lesson'

export type AgendaAttributes = {
    date: string;
}

export type AgendaRelationships = {
    lessons: {
        data: BaseObject<'lesson'>[];
    };
    homeworkAssignments: {
        data: BaseObject<'homework'>[];
    };
}

export type Agenda = BaseResponse<AgendaAttributes, AgendaRelationships, 'agenda'>

export type AgendaIncludedRelationships = {
    subject?: {
        data: BaseObject<'subject'>;
    };
    teachers?: {
        data: BaseObject<'teacher'>[];
    };
}

export type AgendaIncluded = BaseResponse<HomeworkAttributes|Subject|LessonAttributes|UserAttributes, AgendaIncludedRelationships>;
