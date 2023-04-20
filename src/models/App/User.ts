import { BaseResponse, BaseObject } from '../Globals'

export type UserPermission<Service extends string, Operation extends string> = {
    schoolId: string,
    service: Service,
    permittedOperations: Operation[]
}

export type UserAttributes = {
    title?: string
    className?: string;
    dateOfBirth?: string;
    regime?: string;
    lastName: string;
    firstName: string;
    photoUrl: string|null;
    mef?: {
        code: string
        label: string
    }
    externalMail?: string;
    importedMail?: string
    internalMail?: string
    profile?: string
    source?: string
    mobilePhone?: string;
    permissions?: (
        UserPermission<'EVAL', 'READ_EVALUATIONS'> |
        UserPermission<'CDT', 'READ_LESSONS'> |
        UserPermission<'TAF', 'READ_HOMEWORK_ASSIGNMENTS' | 'MARK_HOMEWORK_ASSIGNMENT_AS_DONE'> |
        UserPermission<'ABS', 'READ_ABSENCE_FILES' | 'READ_ABSENCE_FILES_DETAILS' | 'COMPLETE_ABSENCE_FILES'> |
        UserPermission<'MSG', 'READ_MESSAGES' | 'WRITE_MESSAGES'> | UserPermission<string, string>
        )[];
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
    subscribedServices: ('MSG' | 'SKOAPP' | 'ABS' | 'CDT' | 'ART' | 'TAF' | 'EVAL' | 'COMC' | string)[];
} | UserAttributes

export type UserIncludedRelationships = {
    school: {
        data: BaseObject<'school'>;
    };
}

export type UserIncluded = BaseResponse<UserIncludedAttributes, UserIncludedRelationships>
