import { UserAttributes } from '../Global/User'
import { BaseObject, BaseResponse, BaseResponseAttributes } from '../Global'
import { PersonType } from '../Messagerie/UsersMailSettings'
import { EvaluationServiceAttributes } from './EvaluationService'
import {
  SubSkillAttributes,
  SubSkillRelationShip,
  SubSkillsEvaluationResultRelationship,
  SubSkillsRelationship
} from './SubSkill'
import { EvaluationResultAttributes, EvaluationResultRelationship } from './EvaluationResult'
import { SubjectAttributes } from './Subject'

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
