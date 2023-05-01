import { SubSkill } from './SubSkill'

export interface EvaluationResult {
  id: string
  mark: number | null
  nonEvaluationReason: null | string
  comment: string | null
  subSkillsEvaluationResults: Array<{
    id: string
    level: string
    subSkill: SubSkill
  }>
}
