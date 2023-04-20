import { PublicAttachment } from './Attachment'
import { BaseResponse, BaseObject } from '../Globals'
import { UserAttributes } from '../App/User'
import { PersonType } from '../Messagerie/UsersMailSettings'

export type SchoolInfoAttributes = {
    publicationDateTime: string;
    title: string;
    shortContent: string;
    content?: string;
    url?: string | null;
    linkedInfoUrl?: string|null;
    linkedWebSiteUrl?: string|null;
}

export type SchoolInfoRelationships = {
    school: {
        data: BaseObject<'school'> | null;
    };
    author: {
        data: BaseObject | null;
    };
    illustration: {
        data: BaseObject | null;
    };
    attachments?: {
        data: BaseObject<'attachment'>[];
    };
}

export type SchoolInfo = BaseResponse<SchoolInfoAttributes, SchoolInfoRelationships, 'news'>

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

export type SchoolInfoIncludedAttributes = UserAttributes | PublicAttachment | SchoolInfoSchool | SchoolInfoAuthor
export type SchoolInfoIncludedRelationships = {
    technicalUser: {
        data: BaseObject<'technicalUser'> | null;
    };
    person: {
        data: BaseObject<PersonType> | null;
    };
}

export type SchoolInfoIncluded = BaseResponse<SchoolInfoIncludedAttributes, SchoolInfoIncludedRelationships>;
