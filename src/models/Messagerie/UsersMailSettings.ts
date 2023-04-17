import { Included } from '../Globals'

export type Contacts = {
    data: {
        id: string;
        type: string;
    }[] | {
        id: string;
        type: string;
    } | null;
}

export type UsersMailSettings = Included<{
        maxCharsInParticipationContent: number;
        maxCharsInCommunicationSubject: number;
    }, {
        folders: Contacts;
        signature: {
            data: {
                id: string;
                type: string;
            };
        };
        contacts: Contacts;
    }>

export type UsersMailSettingsIncluded = Included<{
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
} | {
    title: string;
    firstName: string;
    lastName: string;
    photoUrl: string|null;
}, {
    parent?: Contacts;
    personContacts?: Contacts;
    person?: Contacts;
}>
