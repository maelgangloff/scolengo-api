import { Subject } from '../Agenda/Lesson'
import { SimpleUser } from '../App/User'
import { Included } from '../Globals'
import { Attachment } from '../School/Attachment'

export interface Homework {

    title: string;
    html: string;
    dueDateTime: string;
    dueDate: string|null;
    done: boolean;
    deliverWorkOnline: boolean;
    onlineDeliveryUrl: null|string;
}

export interface HomeworkAssignment {
    id: string;
    type: string;
    attributes: Homework;
    relationships: {
        teacher: {
            data: {
                id: string;
                type: string;
            };
        };
        attachments: {
            data: {
                id: string;
                type: string;
            }[];
        };
        commonCorrectedWork: {
            data: {
                id: string;
                type: string;
            } | null;
        };
        subject: {
            data: {
                id: string;
                type: string;
            };
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
    }
}

type CorrectionWork = {
    html: string;
    correctionDate: string;
}

export type HomeworkAssignmentIncluded = Included<Subject|SimpleUser|Attachment|CorrectionWork, {
    attachments?: {
        data: {
            id: string;
            type: string;
        }[];
    };
    audio?: {
        data: any;
    };
    pedagogicContent?: {
        data: any;
    };
}>
