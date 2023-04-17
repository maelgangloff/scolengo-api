import { Included } from '../Globals'

export interface Communication {
    id: string;
    type: string;
    attributes: {
        subject: string;
        participationsNumber: number;
        recipientsSummary: string;
        read: boolean;
        replyToAllAllowed: boolean;
        replyToSenderAllowed: boolean;
        readTrackingEnabled: boolean | null;
        firstParticipationContent: null;
    };
    relationships: {
        lastParticipation: {
            data: {
                id: string;
                type: string;
            } | null;
        };
    };
}

export type CommunicationIncluded = Included<{
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
        data: {
            id: string;
            type: string;
        } | null;
    };
    sender?: {
        data: {
            id: string;
            type: string;
        } | null;
    };
    technicalUser?: {
        data: {
            id: string;
            type: string;
        } | null;
    };
    person?: {
        data: {
            id: string;
            type: string;
        } | null;
    };
}>
