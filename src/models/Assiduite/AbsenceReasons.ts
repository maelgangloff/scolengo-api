import { BaseResponseAttributes } from '../Global'

export type SupportedAbsenceType = 'ABSENCE' | 'DEPARTURE' | 'EXEMPTION' | 'LATENESS'

export interface AbsenceReasonAttributes {
  code: string
  longLabel: string
  supportedAbsenceTypes: SupportedAbsenceType[]
}

export type AbsenceReason = BaseResponseAttributes<AbsenceReasonAttributes, 'absenceReason'>
