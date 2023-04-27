import { SubSkill } from './SubSkill'
import { EvaluationResult } from './EvaluationResult'
import { EvaluationService } from './EvaluationService'

export interface EvaluationDetail {
  id: string
  title: string | null
  topic: string | null
  dateTime: string | null
  coefficient: number
  min: number | null
  max: number | null
  average: number | null
  scale: number | null
  subSkills: SubSkill[]
  evaluationService?: EvaluationService
  evaluationResult: EvaluationResult
}
