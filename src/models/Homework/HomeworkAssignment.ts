import { Included } from '../Globals'

export type HomeworkAssignment = Included<{
        title: string;
        html: string;
        dueDateTime: string;
        dueDate: string|null;
        done: boolean;
        deliverWorkOnline: boolean;
        onlineDeliveryUrl: null|string;
    }, {
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
}>

type Subject = {
    label: string;
    color: string;
}

type Teacher = {
    title: string;
    firstName: string;
    lastName: string;
    photoUrl: string|null;
}

type HomeworkAttachment = {
    name: string;
    mimeType: string;
    mimeTypeLabel: string;
    size: number;
    url: string;
}

type CorrectionWork = {
    html: string;
    correctionDate: string;
}

export type HomeworkAssignmentIncluded = Included<Subject|Teacher|HomeworkAttachment|CorrectionWork, {
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
