import { UserAttributes } from '../App/User'
import { BaseObject, BaseResponse } from '../Globals'
import { PersonType } from '../Messagerie/UsersMailSettings'

export interface EvaluationDetailAttributes {
  title: string | null
  topic: string | null
  dateTime: string | null
  coefficient: number
  min: number | null
  max: number | null
  average: number | null
  scale: number | null
}

export interface EvaluationDetailRelationships {
  subSkills: {
    data: Array<BaseObject<'subSkill'>> | null
  }
  subSubject: {
    data: BaseObject<'subSubject'> | null
  }
  evaluationService: {
    data: BaseObject<'evaluationService'>
  }
  evaluationResult: {
    data: BaseObject<'evaluationResult'>
  }
}

export type EvaluationDetail = BaseResponse<EvaluationDetailAttributes, EvaluationDetailRelationships, 'evaluation'>

export type EvaluationDetailIncludedAttributes = UserAttributes | {
  mark: number | null
  nonEvaluationReason: null
  comment: string | null
} | {
  coefficient: number | null
  average: number | null
  scale: number | null
  studentAverage: number | null
} | {
  color: string
  label: string
}

export interface EvaluationDetailIncludedRelationships {
  subSkillsEvaluationResults?: {
    data: Array<BaseObject<'subSkillEvaluationResult'>> | null
  }
  subject?: {
    data: BaseObject<'subject'>
  }
  teachers?: {
    data: Array<BaseObject<'teacher'>> | null
  }
}

export type EvaluationDetailIncluded = BaseResponse<EvaluationDetailIncludedAttributes, EvaluationDetailIncludedRelationships, 'evaluationResult' | 'evaluationService' | 'subSkill' | 'subSkillEvaluationResult' | 'subject' | PersonType>
