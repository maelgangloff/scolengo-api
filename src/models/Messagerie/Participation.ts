import { SimpleUser } from '../App/User'
import { BaseResponse, BaseObject } from '../Globals'
import { PersonType } from './UsersMailSettings'

export type Participation = BaseResponse<{
        dateTime: string;
        content: string;
        read: boolean;
    }, {
        attachments: {
            data: any[] | BaseObject<'attachment'> | null;
        };
        sender: {
            data: BaseObject;
        };
}, 'participation'>

export type ParticipationIncludedAttributes = {
    category: string;
    additionalInfo: any|null;
    fromGroup: boolean;
} | {
    label: string;
    logoUrl: any|null;
} | SimpleUser

export type ParticipationIncludedRelationships = {
    technicalUser: {
        data: BaseObject[] | BaseObject | null;
    };
    person: {
        data: BaseObject<PersonType>[] | BaseObject<PersonType> | null;
    };
} | {
    school: {
        data: any
    }
}

export type ParticipationIncluded = BaseResponse<ParticipationIncludedAttributes, ParticipationIncludedRelationships>
