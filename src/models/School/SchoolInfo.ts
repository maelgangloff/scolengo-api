import { Attachment } from './Attachment'
import { Included } from '../Globals'

export interface SchoolInfo {
    id: string;
    type: string;
    attributes: {
        publicationDateTime: string;
        title: string;
        shortContent: string;
        content?: string;
        url?: string|null;
        linkedInfoUrl?: any;
        linkedWebSiteUrl?: any;
    };
    relationships: {
        school: {
            data: {
                id: string;
                type: string;
            } | null;
        };
        author: {
            data: {
                id: string;
                type: string;
            } | null;
        };
        illustration: {
            data: {
                id: string;
                type: string;
            } | null;
        };
        attachments?: {
            data: Attachment[] | null;
        }
    };
}

export type SchoolInfoIncluded = Included<{
    title: string;
    firstName: string;
    lastName: string;
    photoUrl: string|null;
} | {
    mimeType: string;
    mimeTypeLabel: string;
    size: number;
} | {
    name: string;
} | {
    additionalInfo: any|null;
} | {
    url: string;
    alternativeText: string;
}, {
    technicalUser: {
        data: {
            id: string;
            type: string;
        } | null;
    };
    person: {
        data: {
            id: string;
            type: string;
        } | null;
    };
}>
