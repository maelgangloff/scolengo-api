import { SimpleUser } from '../App/User'
import { BaseObject, BaseResponse } from '../Globals'
import { SupportedAbsenceType } from './AbsenceReasons'

export type AbsenceFileRelationships = {
    currentState: {
        data: BaseObject<'absenceFileState'> | null;
    };
    history?: {
        data: BaseObject<'absenceFileState'>[] | BaseObject<'absenceFileState'> | null;
    }
}

export type AbsenceFile = BaseResponse<never, AbsenceFileRelationships, 'absenceFile'>

export type AbsenceFileIncludedAttributes = {
    creationDateTime: string;
    absenceStartDateTime: string;
    absenceEndDateTime: string;
    absenceType: SupportedAbsenceType | string;
    absenceFileStatus: 'IN_PROGRESS' | 'LOCKED' | string;
    comment: string;
} | {
    code: string;
    longLabel: string;
    supportedAbsenceTypes: string[];
} | SimpleUser

export type AbsenceFileIncludedRelationships = {
    creator: {
        data: BaseObject<'nonTeachingStaff' | 'teacher' | string> | null;
    };
    absenceReason: {
        data: BaseObject<'absenceReason'> | null;
    };
    absenceRecurrence: {
        data: BaseObject<'absenceRecurrence'> | null;
    };
    absenceFile: {
        data: BaseObject<'absenceFile'> | null;
    };
}

export type AbsenceFileIncluded = BaseResponse<AbsenceFileIncludedAttributes, AbsenceFileIncludedRelationships>
