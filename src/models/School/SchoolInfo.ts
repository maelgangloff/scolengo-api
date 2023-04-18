import { PublicAttachment } from './Attachment'
import { BaseResponse, BaseObject } from '../Globals'
import { SimpleUser } from '../App/User'

export type SchoolInfo = BaseResponse<{
        publicationDateTime: string;
        title: string;
        shortContent: string;
        content?: string;
        url?: string | null;
        linkedInfoUrl?: any;
        linkedWebSiteUrl?: any;
    }, {
        school: {
            data: BaseObject | null;
        };
        author: {
            data: BaseObject | null;
        };
        illustration: {
            data: BaseObject | null;
        };
        attachments?: {
            data: BaseObject[];
        };
}>

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

export type SchoolInfoIncluded = BaseResponse<
    SimpleUser | PublicAttachment | SchoolInfoSchool | SchoolInfoAuthor,
    {
        technicalUser: {
            data: BaseObject | null;
        };
        person: {
            data: BaseObject | null;
        };
    }
>;
