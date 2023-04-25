import { UserAttributes } from '../Global/User'
import { BaseObject, BaseResponse, BaseResponseAttributes, BaseResponseRelationships } from '../Global'
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

export type AbsenceFile = BaseResponseRelationships<AbsenceFileRelationships, 'absenceFile'>

export interface AbsenceFileIncludedAttributes {
  creationDateTime: string
  absenceStartDateTime: string
  absenceEndDateTime: string
  absenceType: SupportedAbsenceType | string
  absenceFileStatus: 'NEW' | 'IN_PROGRESS' | 'LOCKED' | string
  comment: string
}

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

export type AbsenceFileIncluded =
  BaseResponse<AbsenceFileIncludedAttributes, AbsenceFileIncludedRelationships, 'absenceFile'>
  | BaseResponse<AbsenceFileIncludedAttributes, AbsenceFileIncludedRelationships, 'absenceFileState'>
  | BaseResponseAttributes<AbsenceReasonAttributes, 'absenceReason'>
  | BaseResponseAttributes<UserAttributes, PersonType>
