import { PublicAttachment } from './Attachment'
import { BaseResponse, BaseObject } from '../Globals'
import { SimpleUser } from '../App/User'

export type SchoolInfo = BaseResponse<{
        publicationDateTime: string;
        title: string;
        shortContent: string;
        content?: string;
        url?: string | null;
        linkedInfoUrl?: string|null;
        linkedWebSiteUrl?: string|null;
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
    addressLine1?: string|null;
    addressLine2?: string|null;
    addressLine3?: string|null;
    zipCode?: string|null;
    city?: string|null;
    country?: string|null;
    homePageUrl?: string|null;
    emsCode?: string|null;
    emsOIDCWellKnownUrl?: string|null;
    timeZone?: string|null;
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
