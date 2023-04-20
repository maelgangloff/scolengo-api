import { UserAttributes } from '../App/User'
import { BaseResponse, BaseObject } from '../Globals'
import { PersonType } from './UsersMailSettings'

export type ParticipationAttributes = {
    dateTime: string;
    content: string;
    read: boolean;
}

export type ParticipationRelationships = {
    attachments: {
        data: any[] | BaseObject<'attachment'> | null;
    };
    sender: {
        data: BaseObject;
    };
}

export type Participation = BaseResponse<ParticipationAttributes, ParticipationRelationships, 'participation'>

export type ParticipationIncludedAttributes = {
    category: 'INITIATOR' | 'TO';
    additionalInfo: any|null;
    fromGroup: boolean;
} | {
    label: string;
    logoUrl: string|null;
} | UserAttributes

export type ParticipationIncludedRelationships = {
    technicalUser: {
        data: BaseObject<'technicalUser'> | null;
    };
    person: {
        data: BaseObject<PersonType> | null;
    };
} | {
    school: {
        data: any
    }
}

export type ParticipationIncluded = BaseResponse<ParticipationIncludedAttributes, ParticipationIncludedRelationships>
