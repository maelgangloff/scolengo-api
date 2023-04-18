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
            data: BaseObject
        };
        attachments: {
            data: BaseObject[];
        };
        commonCorrectedWork: {
            data: BaseObject | null;
        };
        subject: {
            data: BaseObject
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
        data: BaseObject[];
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
