import { BaseObject, BaseResponse } from '../Globals'

export interface EvaluationSettingsIncludedAttributes {
  label?: string
  startDate?: string
  endDate?: string
  colorLevelMappings?: Array<{
    level: string
    color: string
  }>
  skillAcquisitionLevels?: Array<{
    label: string
    shortLabel: string
    level: string
  }>
}

export interface EvaluationSettingsIncludedRelationships {
  skillAcquisitionColors: {
    data: BaseObject<'skillAcquisitionColors'>
  }
}

export type EvaluationSettingsIncluded = BaseResponse<EvaluationSettingsIncludedAttributes, EvaluationSettingsIncludedRelationships, 'period' | 'skillAcquisitionColors' | 'skillsSetting'>

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
