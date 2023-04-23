import { UserAttributes } from '../Global/User'
import { BaseObject, BaseResponse, BaseResponseAttributes } from '../Global'
import { PersonType } from '../Messagerie/UsersMailSettings'
import { EvaluationDetailAttributes } from './EvaluationDetail'
import { SubjectAttributes } from './Subject'
import { EvaluationResultAttributes, EvaluationResultRelationship } from './EvaluationResult'
import {
  SubSkillAttributes, SubSkillEvaluationResultAttributes,
  SubSkillRelationShip,
  SubSkillsEvaluationResultRelationship,
  SubSkillsRelationship
} from './SubSkill'

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
  | BaseResponseAttributes<UserAttributes, PersonType>
