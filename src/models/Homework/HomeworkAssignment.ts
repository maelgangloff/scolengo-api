import { Subject } from '../Agenda/Lesson'
import { SimpleUser } from '../App/User'
import { BaseResponse, BaseObject } from '../Globals'
import { Attachment } from '../School/Attachment'

export type Homework = {
    title: string;
    html: string;
    dueDateTime: string;
    dueDate: string|null;
    done: boolean;
    deliverWorkOnline: boolean;
    onlineDeliveryUrl: null|string;
}

export type HomeworkAssignment = BaseResponse<Homework, {
        teacher: {
            data: BaseObject<'teacher'>
        };
        attachments: {
            data: BaseObject<'attachment'>[];
        };
        commonCorrectedWork: {
            data: BaseObject | null;
        };
        subject: {
            data: BaseObject<'subject'>
        };
        audio: {
            data: any;
        };
        pedagogicContent: {
            data: any;
        };
        individualCorrectedWork: {
            data: any;
        };
}>

type CorrectionWork = {
    html: string;
    correctionDate: string;
}

export type HomeworkAssignmentIncluded = BaseResponse<Subject|SimpleUser|Attachment|CorrectionWork, {
    attachments?: {
        data: BaseObject<'attachment'>[];
    };
    audio?: {
        data: any;
    };
    pedagogicContent?: {
        data: any;
    };
    school?: {
        data: any
    }
}>
