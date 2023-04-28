import { AbsenceReason, SupportedAbsenceType } from './AbsenceReasons'
import { User } from '../Global'

export interface AbsenceFile {
  id: string
  currentState: AbsenceState
  history?: AbsenceState[]
}

export interface AbsenceState {
  id: string
  creationDateTime: string
  absenceStartDateTime: string
  absenceEndDateTime: string
  absenceType: SupportedAbsenceType | string
  absenceFileStatus: 'NEW' | 'IN_PROGRESS' | 'LOCKED' | string
  comment: string
  creator?: User
  absenceReason?: AbsenceReason
  absenceFile: {
    id: string
  }
}
