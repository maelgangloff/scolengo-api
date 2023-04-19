import { SimpleUser } from '../App/User'
import { BaseResponse, BaseObject } from '../Globals'

export type Contacts = {
    data: BaseObject[] | BaseObject | null;
}

export type UsersMailSettings = BaseResponse<{
        maxCharsInParticipationContent: number;
        maxCharsInCommunicationSubject: number;
    }, {
        folders: Contacts;
        signature: {
            data: BaseObject<'signature'>
        };
        contacts: Contacts;
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
    parent?: Contacts;
    personContacts?: Contacts;
    person?: Contacts;
}>
