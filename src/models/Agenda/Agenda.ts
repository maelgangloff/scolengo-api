import { SimpleUser } from '../App/User'
import { Included } from '../Globals'
import { Homework } from '../Homework/HomeworkAssignment'
import { LessonAttributes, Subject } from './Lesson'

export interface Agenda {
    id: string;
    type: string;
    attributes: {
        date: string;
    };
    relationships: {
        lessons: {
            data: {
                id: string;
                type: string;
            }[];
        };
        homeworkAssignments: {
            data: {
                id: string;
                type: string;
            }[];
        };
    };
}

export type AgendaIncluded = Included<Homework|Subject|LessonAttributes|SimpleUser, {
    subject?: {
        data: {
            id: string;
            type: string;
        };
    };
    teachers?: {
        data: {
            id: string;
            type: string;
        }[];
    };
}>;
