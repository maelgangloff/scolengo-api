import { PublicAttachment } from './Attachment'
import { Included } from '../Globals'
import { SimpleUser } from '../App/User'

export interface SchoolInfo {
    id: string;
    type: string;
    attributes: {
        publicationDateTime: string;
        title: string;
        shortContent: string;
        content?: string;
        url?: string | null;
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
            data: {
                id: string;
                type: string;
            }[];
        };
    };
}

type SchoolInfoAuthor = {
    additionalInfo: any;
};

type SchoolInfoSchool = {
    name: string;
    addressLine1?: null;
    addressLine2?: null;
    addressLine3?: null;
    zipCode?: null;
    city?: null;
    country?: null;
    homePageUrl?: null;
    emsCode?: null;
    emsOIDCWellKnownUrl?: null;
    timeZone?: null;
};

export type SchoolInfoIncluded = Included<
    SimpleUser | PublicAttachment | SchoolInfoSchool | SchoolInfoAuthor,
    {
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
    }
>;
