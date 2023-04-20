import { UserAttributes } from '../App/User'
import { BaseResponse, BaseObject } from '../Globals'

export type UsersMailSettings = BaseResponse<{
        maxCharsInParticipationContent: number;
        maxCharsInCommunicationSubject: number;
    }, {
        folders: {
            data: BaseObject<'folder'>[];
        };
        signature: {
            data: BaseObject<'signature'>
        };
        contacts: {
            data: BaseObject<'personContact' | 'groupContact'>[];
        };
}, 'userMailSetting'>

export type PersonType = 'person' | 'student' | 'personInContactWithStudent' | 'nonTeachingStaff' | 'teacher'

export type UsersMailSettingsIncluded = BaseResponse<{
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
} | UserAttributes, {
    parent?: {
        data: BaseObject[] | BaseObject | null;
    };
    personContacts?: {
        data: BaseObject<'personContact'>[] | BaseObject<'personContact'> | null;
    };
    person?: {
        data: BaseObject<PersonType>[] | BaseObject<PersonType> | null;
    };
}>
