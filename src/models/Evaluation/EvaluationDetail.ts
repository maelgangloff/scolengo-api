import { UserAttributes } from '../Global/User'
import { BaseObject, BaseResponse, BaseResponseAttributes } from '../Global'
import { PersonType } from '../Messagerie/UsersMailSettings'
import {
  EvaluationResultAttributes,
  EvaluationResultRelationship, SubjectAttributes, SubSkillAttributes,
  SubSkillRelationShip,
  SubSkillsEvaluationResultRelationship,
  SubSkillsRelationship
} from './Evaluation'

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

export type EvaluationDetailRelationships = SubSkillsRelationship & EvaluationResultRelationship & {
  subSubject: {
    data: BaseObject<'subSubject'> | null
  }
  evaluationService: {
    data: BaseObject<'evaluationService'>
  }
}

export type EvaluationDetail = BaseResponse<EvaluationDetailAttributes, EvaluationDetailRelationships, 'evaluation'>

export interface EvaluationServiceAttributes {
  coefficient: number | null
  average: number | null
  scale: number | null
  studentAverage: number | null
}

export type EvaluationDetailIncluded = BaseResponseAttributes<UserAttributes, PersonType>
| BaseResponse<SubSkillAttributes, SubSkillRelationShip, 'subSkill'>
| BaseResponse<SubSkillsEvaluationResultRelationship, SubSkillsEvaluationResultRelationship, 'subSkillEvaluationResult'>
| BaseResponseAttributes<SubjectAttributes, 'subject'>
| BaseResponse<EvaluationResultAttributes, SubSkillsEvaluationResultRelationship, 'evaluationResult'>
| BaseResponse<EvaluationServiceAttributes, {
  subject: {
    data: BaseObject<'subject'>
  }
  teachers: {
    data: Array<BaseObject<'teacher'>>
  }
}, 'evaluationService'>
