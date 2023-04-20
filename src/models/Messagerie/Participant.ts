import { UserAttributes } from '../App/User'
import { BaseObject, BaseResponse } from '../Globals'
import { PersonType } from './UsersMailSettings'

export type ParticipantAttributes = {
    category: string;
    additionalInfo: any;
    label?: string;
    fromGroup?: boolean
}

export type ParticipantRelationships = {
    technicalUser: {
        data: BaseObject<'technicalUser'> | null
    }
    person: {
        data: BaseObject<PersonType> | null
    };
}

export type ParticipantIncludedAttributes = UserAttributes | {
    label: string
    logoUrl: string|null
}

export type ParticipantIncludedRelationships = {
    school? : {
        data: any
    }
}

export type ParticipantIncluded = BaseResponse<ParticipantIncludedAttributes, ParticipantIncludedRelationships, PersonType>

export type Participant = BaseResponse<ParticipantAttributes, ParticipantRelationships, 'personParticipant' | 'groupParticipant'>
