import { Attachment } from './Attachment'

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

export interface SchoolInfoIncluded {
    id: string;
    type: string;
    attributes: Partial<{
        title: string;
        firstName: string;
        lastName: string;
        photoUrl: string|null;
        name: string;
        additionalInfo: any|null;
        mimeType: string;
        mimeTypeLabel: string;
        size: number;
        url: string;
        alternativeText: string;
    }>;
    relationships?: {
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
    };
}
