import { Subject } from '../Agenda/Lesson'
import { UserAttributes } from '../App/User'
import { BaseResponse, BaseObject } from '../Globals'
import { Attachment } from '../School/Attachment'

export type HomeworkAttributes = {
    title: string;
    html: string;
    dueDateTime: string;
    dueDate: string|null;
    done: boolean;
    deliverWorkOnline: boolean;
    onlineDeliveryUrl: null|string;
}

export type HomeworkRelationships = {
    teacher: {
        data: BaseObject<'teacher'>
    };
    attachments: {
        data: BaseObject<'attachment'>[];
    };
    commonCorrectedWork?: {
        data: BaseObject | null;
    };
    subject: {
        data: BaseObject<'subject'>
    };
    audio?: {
        data: any;
    };
    pedagogicContent?: {
        data: any;
    };
    individualCorrectedWork?: {
        data: any;
    };
}

export type HomeworkAssignment = BaseResponse<HomeworkAttributes, HomeworkRelationships, 'homework'>

type CorrectionWork = {
    html: string;
    correctionDate: string;
}

export type HomeworkAssignmentIncludedAttributes = Subject|UserAttributes|Attachment|CorrectionWork

export type HomeworkAssignmentIncludedRelationships = {
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
}

export type HomeworkAssignmentIncluded = BaseResponse<HomeworkAssignmentIncludedAttributes, HomeworkAssignmentIncludedRelationships>
