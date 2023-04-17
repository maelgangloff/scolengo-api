import { Included } from '../Globals'

export type Participation = Included<{
        dateTime: string;
        content: string;
        read: boolean;
    }, {
        attachments: {
            data: any[] | {
                id: string;
                type: string;
            } | null;
        };
        sender: {
            data: {
                id: string;
                type: string;
            };
        };
}>

export type ParticipationIncluded = Included<{
    category: string;
    additionalInfo: any|null;
    fromGroup: boolean;
} | {
    label: string;
    logoUrl: any|null;
}, {
    technicalUser: {
        data: any[] | {
            id: string;
            type: string;
        } | null;
    };
    person: {
        data: any[] | {
            id: string;
            type: string;
        } | null;
    };
}>
