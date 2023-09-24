import type { User } from '../Common'
import type { EvaluationDetail } from './EvaluationDetail'
import type { Subject } from './Subject'

export interface Evaluation<_EvaluationDetail = EvaluationDetail> {
  id: string
  coefficient: number
  average: number | null
  scale: number | null
  studentAverage: number | null
  evaluations: _EvaluationDetail[]
  subject: Subject
  teachers: User[]
}
