import { BaseResponse, BaseObject } from '../Globals'

export type Communication = BaseResponse<{
        subject: string;
        participationsNumber: number;
        recipientsSummary: string;
        read: boolean;
        replyToAllAllowed: boolean;
        replyToSenderAllowed: boolean;
        readTrackingEnabled: boolean | null;
        firstParticipationContent: null;
    }, {
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
