import { UserAttributes } from '../App/User'
import { BaseObject, BaseResponse } from '../Globals'
import { PersonType } from '../Messagerie/UsersMailSettings'
import { EvaluationDetailAttributes } from './EvaluationDetail'

export interface EvaluationAttributes {
  coefficient: number
  average: number | null
  scale: number
  studentAverage: number | null
}

export interface EvaluationRelationships {
  evaluations: {
    data: Array<BaseObject<'evaluation'>>
  }
  subject: {
    data: BaseObject<'subject'>
  }
  teachers: {
    data: Array<BaseObject<'teacher'>>
  }
}

export type Evaluation = BaseResponse<EvaluationAttributes, EvaluationRelationships, 'evaluationService'>

export type EvaluationIncludedAttributes = UserAttributes | EvaluationDetailAttributes | {
  mark: number | null
  nonEvaluationReason: null | string
  comment: string | null
} | {
  label: string
  color: null | string
} | {
  shortLabel: string
} | {
  level: string
}

export interface EvaluationIncludedRelationships {
  subSkills?: {
    data: Array<BaseObject<'subSkill'>>
  }
  evaluationResult?: {
    data: BaseObject<'evaluationResult'>
  }
  subSkillsEvaluationResults?: {
    data: Array<BaseObject<'subSkillEvaluationResult'>>
  }
  subSkill?: {
    data: BaseObject<'subSkill'>
  }
}

export type EvaluationIncluded = BaseResponse<EvaluationIncludedAttributes, EvaluationIncludedRelationships, 'evaluation' | 'evaluationResult' | 'subSkill' | 'subSkillEvaluationResult' | 'subject' | PersonType>
