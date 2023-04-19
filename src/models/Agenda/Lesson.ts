import { SimpleUser } from '../App/User'
import { BaseResponse, BaseObject } from '../Globals'
import { Homework } from '../Homework/HomeworkAssignment'
import { Attachment } from '../School/Attachment'

export type Subject = {
    label: string;
    color: string;
}

export type LessonContent = {
    html: string;
    title: string;
    url: string|null;
}

export type LessonAttributes = {
    startDateTime: string;
    endDateTime: string;
    title: string;
    location: string;
    locationComplement: any;
    canceled: boolean
}

export type Lesson = BaseResponse<LessonAttributes, {
        contents: {
            data: BaseObject[];
        };
        teachers: {
            data: BaseObject<'teacher'>[];
        };
        subject: {
            data: BaseObject<'subject'>;
        };
        toDoForTheLesson: {
            data: BaseObject<'homework'>[];
        };
        toDoAfterTheLesson: {
            data: BaseObject<'homework'>[];
        };
}, 'lesson'>

export type LessonIncluded = BaseResponse<Attachment | Homework | Subject | SimpleUser | LessonContent, {
    subject?: {
        data: BaseObject<'subject'>;
    };
    attachments?: {
        data: BaseObject<'attachment'>[];
    };
}>;
