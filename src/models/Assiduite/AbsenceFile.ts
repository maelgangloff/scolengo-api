import { BaseObject, BaseResponse } from '../Globals'

export type AbsenceFile = BaseResponse<never, {
    currentState: {
        data: BaseObject<'absenceFileState' | 'absenceFile' | 'absenceReason'> | null;
    };
}, 'absenceFileState' | 'absenceFile' | 'absenceReason'>

export type AbsenceFileIncluded = BaseResponse<{
    creationDateTime: string;
    absenceStartDateTime: string;
    absenceEndDateTime: string;
    absenceType: 'ABSENCE' | 'LATENESS' | 'DEPARTURE' | string;
    absenceFileStatus: 'IN_PROGRESS' | 'LOCKED' | string;
    comment: string;
} | {
    code: string;
    longLabel: string;
    supportedAbsenceTypes: string[];
}, {
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
}>
