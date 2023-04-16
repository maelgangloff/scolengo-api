import { Attachment } from './Attachment'
import { Included } from './Globals'

export interface SchoolInfo {
    id: string;
    type: string;
    attributes: {
        publicationDateTime: string;
        title: string;
        shortContent: string;
        content: string;
        url: any;
        linkedInfoUrl: any;
        linkedWebSiteUrl: any;
    };
    relationships: {
        attachments?: {
            data: {
                id: string;
                type: string;
            }[];
        };
        school?: {
            data: {
                id: string;
                type: string;
            };
        };
        author?: {
            data: {
                id: string;
                type: string;
            };
        };
        illustration?: {
            data: {
                id: string;
                type: string;
            };
        };
    };
}

export type SchoolInfoIncluded = Included<
    Partial<Attachment>,
    {
        attachments?: {
            data: {
                id: string;
                type: string;
            }[];
        };
    }
> &
    Included<
        Partial<{
            name: string;
        }>,
        {
            school?: {
                data: {
                    id: string;
                    type: string;
                };
            };
        }
    > &
    Included<
        Partial<{
            title: string;
            firstName: string;
            lastName: string;
            photoUrl: string | null;
        }>,
        {
            author?: {
                data: {
                    id: string;
                    type: string;
                };
            };
        }
    > &
    Included<
        Partial<Attachment>,
        {
            illustration?: {
                data: {
                    id: string;
                    type: string;
                };
            };
        }
    >;
