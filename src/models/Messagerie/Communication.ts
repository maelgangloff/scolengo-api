import { BaseResponse, BaseObject } from '../Globals'

export type CommunicationAttributes = {
    subject: string;
    participationsNumber: number| null;
    recipientsSummary: string| null;
    read: boolean | null;
    replyToAllAllowed: boolean| null;
    replyToSenderAllowed: boolean| null;
    readTrackingEnabled: boolean | null;
    firstParticipationContent: string|null;
}

export type Communication = BaseResponse<CommunicationAttributes, {
        lastParticipation: {
            data: BaseObject | null;
        };
}, 'communication'>

export type CommunicationIncluded = BaseResponse<{
    label: string;
    logoUrl: string|null;
} | {
    title: string;
    lastName: string;
    firstName: string;
    photoUrl: string|null;
} | {
    dateTime: string;
    content: string;
    read: boolean;
} | {
    category: string;
    additionalInfo: any|null;
    fromGroup: boolean;
}, {
    school?: {
        data: BaseObject<'school'> | null;
    };
    sender?: {
        data: BaseObject | null;
    };
    technicalUser?: {
        data: BaseObject | null;
    };
    person?: {
        data: BaseObject | null;
    };
}>

export type NewCommunication = Omit<BaseResponse<Partial<CommunicationAttributes> & {
        subject: string;
        firstParticipationContent: string;
    }, {
        toRecipients: {
            data: BaseObject[];
        };
        ccRecipients?: {
            data: BaseObject[];
        };
        bccRecipients?: {
            data: BaseObject[];
        };
}, 'communication'>, 'id'>
