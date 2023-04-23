import { BaseObject } from '../Global'

export interface EvaluationResultAttributes {
  mark: number | null
  nonEvaluationReason: null | string
  comment: string | null
}
export interface EvaluationResultRelationship {
  evaluationResult: {
    data: BaseObject<'evaluationResult'>
  }
}
