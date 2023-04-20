import { UserAttributes } from '../App/User'
import { BaseResponse, BaseObject } from '../Globals'

export type UsersMailSettingsAttributes = {
    maxCharsInParticipationContent: number;
    maxCharsInCommunicationSubject: number;
}

export type UsersMailSettingsRelationships = {
    folders: {
        data: BaseObject<'folder'>[];
    };
    signature: {
        data: BaseObject<'signature'>
    };
    contacts: {
        data: BaseObject<'personContact' | 'groupContact'>[];
    };
}

export type UsersMailSettings = BaseResponse<UsersMailSettingsAttributes, UsersMailSettingsRelationships, 'userMailSetting'>

export type PersonType = 'person' | 'student' | 'personInContactWithStudent' | 'nonTeachingStaff' | 'teacher' | 'technicalUser'

export type UsersMailSettingsIncludedAttributes = {
    content?: string;
} | {
    name: string;
    position: number;
    type: string;
} | {
    label?: string
    linksWithUser: {
        description: null | string;
        additionalInfo: string[];
        type: ('SCHOOL' | 'FAMILY' | 'GROUP' | string);
        studentId?: string;
        schoolId?: string;
        groupId?: string
    }[] | null;
} | UserAttributes

export type UsersMailSettingsIncludedRelationships = {
    parent?: {
        data: BaseObject[] | BaseObject | null;
    };
    personContacts?: {
        data: BaseObject<'personContact'>[] | BaseObject<'personContact'> | null;
    };
    person?: {
        data: BaseObject<PersonType>[] | BaseObject<PersonType> | null;
    };
}

export type UsersMailSettingsIncluded = BaseResponse<
    UsersMailSettingsIncludedAttributes,
    UsersMailSettingsIncludedRelationships,
    'groupContact' | 'signature' | 'personContact' | 'folder' | PersonType
>
