import { SimpleUser } from '../App/User'
import { BaseResponse, BaseObject } from '../Globals'
import { HomeworkAttributes } from '../Homework/HomeworkAssignment'
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

export type LessonRelationships = {
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
}

export type Lesson = BaseResponse<LessonAttributes, LessonRelationships, 'lesson'>

export type LessonIncludedRelationships = {
    subject?: {
        data: BaseObject<'subject'>;
    };
    attachments?: {
        data: BaseObject<'attachment'>[];
    };
}

export type LessonIncludedAttributes = Attachment | HomeworkAttributes | Subject | SimpleUser | LessonContent

export type LessonIncluded = BaseResponse<LessonIncludedAttributes, LessonIncludedRelationships>;
