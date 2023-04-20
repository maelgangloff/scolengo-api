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
        data: BaseObject<PersonType> | null
    }
    person: {
        data: BaseObject<PersonType> | null
    };
}

export type ParticipantIncludedAttributes = UserAttributes

export type ParticipantIncludedRelationships = {
    school? : {
        data: any
    }
}

export type ParticipantIncluded = BaseResponse<ParticipantIncludedAttributes, ParticipantIncludedRelationships, PersonType>

export type Participant = BaseResponse<ParticipantAttributes, ParticipantRelationships, 'personParticipant' | 'groupParticipant'>
