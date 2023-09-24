import type { AbsenceReason, SupportedAbsenceType } from './AbsenceReason'

export interface AbsenceFile {
  id: string
  currentState: AbsenceState
}

export interface AbsenceState {
  id: string
  creationDateTime: string
  absenceStartDateTime: string
  absenceEndDateTime: string
  absenceType: SupportedAbsenceType | string
  absenceFileStatus: 'NEW' | 'IN_PROGRESS' | 'LOCKED' | string
  absenceReason?: AbsenceReason
}
