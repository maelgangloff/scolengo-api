import { BaseResponse } from '../Globals'

export type SupportedAbsenceType = 'ABSENCE' | 'DEPARTURE' | 'EXEMPTION' | 'LATENESS';

export type AbsenceReasonAttributes = {
    code: string;
    longLabel: string;
    supportedAbsenceTypes: SupportedAbsenceType[];
}

export type AbsenceReason = BaseResponse<AbsenceReasonAttributes, undefined, 'absenceReason'>
