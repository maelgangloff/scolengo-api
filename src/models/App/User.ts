import { BaseResponse, BaseObject } from '../Globals'

export type UserAttributes = {
    className?: string;
    dateOfBirth?: string;
    regime?: string;
    lastName: string;
    firstName: string;
    photoUrl: string|null;
    externalMail?: string;
    mobilePhone?: string;
    permissions: {
        schoolId: string;
        service: string;
        permittedOperations: string[];
    }[];
    addressLines?: string[];
    postalCode?: string;
    city?: string;
    country?: string;
}

export type UserRelationships = {
    school?: {
        data: BaseObject<'school'>;
    };
    students?: {
        data: BaseObject<'student'>[];
    };
}

export type User = BaseResponse<UserAttributes, UserRelationships, 'legalRepresentativeUserInfo' | 'studentUserInfo'>

export type UserIncludedAttributes = {
    name: string;
    timeZone: string;
    subscribedServices: string[];
} | {
    lastName: string;
    firstName: string;
    photoUrl: string|null;
    className: string;
    dateOfBirth: string;
    regime: string;
}
export type UserIncludedRelationships = {
    school: {
        data: BaseObject<'school'>;
    };
}

export type UserIncluded = BaseResponse<UserIncludedAttributes, UserIncludedRelationships>

export type SimpleUser = {
    title: string;
    firstName: string;
    lastName: string;
    photoUrl: string|null;
}
