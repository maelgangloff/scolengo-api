import { SimpleUser } from '../App/User'
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

export type CommunicationIncluded = BaseResponse<SimpleUser | {
    label: string;
    logoUrl: string|null;
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

export type NewCommunicationAttributes = Partial<CommunicationAttributes> & {
    subject: string;
    firstParticipationContent: string;
}

export type NewCommunicationRelationship = {
    toRecipients: {
        data: BaseObject[];
    };
    ccRecipients?: {
        data: BaseObject[];
    };
    bccRecipients?: {
        data: BaseObject[];
    };
}

export type NewCommunication = Omit<BaseResponse<NewCommunicationAttributes, NewCommunicationRelationship, 'communication'>, 'id'>
