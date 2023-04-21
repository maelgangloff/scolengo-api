import { UserAttributes } from '../App/User'
import { BaseObject, BaseResponse } from '../Globals'
import { PersonType } from '../Messagerie/UsersMailSettings'
import { AbsenceReasonAttributes, SupportedAbsenceType } from './AbsenceReasons'

export interface AbsenceFileRelationships {
  currentState: {
    data: BaseObject<'absenceFileState'> | null
  }
  history?: {
    data: Array<BaseObject<'absenceFileState'>> | null
  }
}

export type AbsenceFile = BaseResponse<undefined, AbsenceFileRelationships, 'absenceFile'>

export type AbsenceFileIncludedAttributes = {
  creationDateTime: string
  absenceStartDateTime: string
  absenceEndDateTime: string
  absenceType: SupportedAbsenceType | string
  absenceFileStatus: 'NEW' | 'IN_PROGRESS' | 'LOCKED' | string
  comment: string
} | AbsenceReasonAttributes | UserAttributes

export interface AbsenceFileIncludedRelationships {
  creator: {
    data: BaseObject<PersonType> | null
  }
  absenceReason: {
    data: BaseObject<'absenceReason'> | null
  }
  absenceRecurrence: {
    data: BaseObject<'absenceRecurrence'> | null
  }
  absenceFile: {
    data: BaseObject<'absenceFile'> | null
  }
}

export type AbsenceFileIncluded = BaseResponse<AbsenceFileIncludedAttributes, AbsenceFileIncludedRelationships>
