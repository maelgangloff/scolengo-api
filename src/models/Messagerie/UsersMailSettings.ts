import { SimpleUser } from '../App/User'
import { BaseResponse, BaseObject } from '../Globals'

export type UsersMailSettings = BaseResponse<{
        maxCharsInParticipationContent: number;
        maxCharsInCommunicationSubject: number;
    }, {
        folders: {
            data: BaseObject[] | BaseObject | null;
        };
        signature: {
            data: BaseObject<'signature'>
        };
        contacts: {
            data: BaseObject[] | BaseObject | null;
        };
}, 'userMailSetting'>

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
        type: string;
        studentId?: string;
        schoolId?: string;
    }[] | null;
} | SimpleUser, {
    parent?: {
        data: BaseObject[] | BaseObject | null;
    };
    personContacts?: {
        data: BaseObject[] | BaseObject | null;
    };
    person?: {
        data: BaseObject[] | BaseObject | null;
    };
}>
