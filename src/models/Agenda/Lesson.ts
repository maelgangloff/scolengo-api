import { SimpleUser } from '../App/User'
import { Included } from '../Globals'
import { Homework } from '../Homework/HomeworkAssignment'
import { Attachment } from '../School/Attachment'

export type Subject = {
    label: string;
    color: string;
}

export type LessonContent = {
    html: string;
    title: string;
    url: any;
}

export type LessonAttributes = {
    startDateTime: string;
    endDateTime: string;
    title: string;
    location: string;
    locationComplement: any;
    canceled: boolean;}

export interface Lesson {
    id: string;
    type: string;
    attributes: LessonAttributes;
    relationships: {
        contents: {
            data: {
                id: string;
                type: string;
            }[];
        };
        teachers: {
            data: {
                id: string;
                type: string;
            }[];
        };
        subject: {
            data: {
                id: string;
                type: string;
            };
        };
        toDoForTheLesson: {
            data: {
                id: string;
                type: string;
            }[];
        };
        toDoAfterTheLesson: {
            data: {
                id: string;
                type: string;
            }[];
        };
    }
}

export type LessonIncluded = Included<Attachment | Homework | Subject | SimpleUser | LessonContent, {
    subject?: {
        data: {
            id: string;
            type: string;
        };
    };
    attachments?: {
        data: {
            id: string;
            type: string;
        }[];
    };
}>;
