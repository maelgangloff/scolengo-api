import { SimpleUser } from '../App/User'
import { BaseResponse, BaseObject } from '../Globals'
import { Homework } from '../Homework/HomeworkAssignment'
import { LessonAttributes, Subject } from './Lesson'

export type Agenda = BaseResponse<{
    date: string;
}, {
    lessons: {
        data: BaseObject<'lesson'>[];
    };
    homeworkAssignments: {
        data: BaseObject<'homework'>[];
    };
}, 'agenda'>

export type AgendaIncluded = BaseResponse<Homework|Subject|LessonAttributes|SimpleUser, {
    subject?: {
        data: BaseObject<'subject'>;
    };
    teachers?: {
        data: BaseObject<'teacher'>[];
    };
}>;
