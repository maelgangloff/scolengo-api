import { UserAttributes } from '../Global/User'
import { BaseObject, BaseResponse } from '../Global'
import { PersonType } from '../Messagerie/UsersMailSettings'
import { EvaluationDetailAttributes } from './EvaluationDetail'

export interface SubSkillsRelationship {
  subSkills: {
    data: Array<BaseObject<'subSkill'>>
  }
}

export interface EvaluationResultRelationship {
  evaluationResult: {
    data: BaseObject<'evaluationResult'>
  }
}

export interface SubSkillsEvaluationResultRelationship {
  subSkillsEvaluationResults: {
    data: Array<BaseObject<'subSkillEvaluationResult'>>
  }
}

export interface SubSkillRelationShip {
  subSkill: {
    data: BaseObject<'subSkill'>
  }
}

export interface EvaluationRelationship {
  evaluations: {
    data: Array<BaseObject<'evaluation'>>
  }
}

export interface EvaluationAttributes {
  coefficient: number
  average: number | null
  scale: number
  studentAverage: number | null
}

export interface EvaluationResultAttributes {
  mark: number | null
  nonEvaluationReason: null | string
  comment: string | null
}

export interface SubSkillAttributes {
  shortLabel: string
}

export interface SubSkillEvaluationResultAttributes {
  level: string
}

export interface SubjectAttributes {
  label: string
  color: null | string
}

export type Evaluation = BaseResponse<EvaluationAttributes, EvaluationRelationship & {
  subject: {
    data: BaseObject<'subject'>
  }
  teachers: {
    data: Array<BaseObject<'teacher'>>
  }
}, 'evaluationService'>

export type EvaluationIncluded =
  BaseResponse<EvaluationDetailAttributes, SubSkillsRelationship & EvaluationResultRelationship, 'evaluation'>
  | BaseResponse<EvaluationResultAttributes, SubSkillsEvaluationResultRelationship, 'evaluationResult'>
  | BaseResponse<SubSkillAttributes, SubSkillRelationShip, 'subSkill'>
  | BaseResponse<SubSkillEvaluationResultAttributes, SubSkillsEvaluationResultRelationship, 'subSkillEvaluationResult'>
  | BaseResponse<SubjectAttributes, {
    subject: {
      data: BaseObject<'subject'>
    }
  }, 'subject'>
  | BaseResponse<UserAttributes, undefined, PersonType>
