import { BaseObject, BaseResponse } from '../Globals'
import { SupportedAbsenceType } from './AbsenceReasons'

export type AbsenceFileRelationships = {
    currentState: {
        data: BaseObject<'absenceFileState' | 'absenceFile' | 'absenceReason'> | null;
    };
}

export type AbsenceFile = BaseResponse<never, AbsenceFileRelationships, 'absenceFileState' | 'absenceFile' | 'absenceReason'>

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
}

export type AbsenceFileIncludedRelationships = {
    creator: {
        data: BaseObject<'absenceFileState' | 'absenceFile' | 'absenceReason'> | null;
    };
    absenceReason: {
        data: BaseObject<'absenceFileState' | 'absenceFile' | 'absenceReason'> | null;
    };
    absenceRecurrence: {
        data: BaseObject<'absenceFileState' | 'absenceFile' | 'absenceReason'> | null;
    };
    absenceFile: {
        data: BaseObject<'absenceFileState' | 'absenceFile' | 'absenceReason'> | null;
    };
}

export type AbsenceFileIncluded = BaseResponse<AbsenceFileIncludedAttributes, AbsenceFileIncludedRelationships>
