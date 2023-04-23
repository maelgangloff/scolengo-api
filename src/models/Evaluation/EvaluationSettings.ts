import { BaseObject, BaseResponse, BaseResponseAttributes } from '../Global'

export interface PeriodAttributes {
  endDate: string
  startDate: string
  label: string
}

export type EvaluationSettingsIncluded = BaseResponseAttributes<PeriodAttributes, 'period'>
| BaseResponse<{
  skillAcquisitionLevels: Array<{
    label: string
    shortLabel: string
    level: string
  }>
}, {
  skillAcquisitionColors: {
    data: BaseObject<'skillAcquisitionColors'>
  }
}, 'skillsSetting'>
| BaseResponse<{
  colorLevelMappings: Array<{
    level: string
    color: string
  }>
}, undefined, 'skillAcquisitionColors'>

export interface EvaluationSettingsAttributes {
  periodicReportsEnabled: boolean
  skillsEnabled: boolean
  evaluationsDetailsAvailable: boolean
}

export interface EvaluationSettingsRelationships {
  periods: {
    data: Array<BaseObject<'period'>>
  }
  skillsSetting: {
    data: BaseObject<'skillsSetting'>
  }
}

export type EvaluationSettings = BaseResponse<EvaluationSettingsAttributes, EvaluationSettingsRelationships, 'evaluationsSetting'>
