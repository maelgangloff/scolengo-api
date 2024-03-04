import type { User } from '../Common'
import type { EvaluationDetail } from './EvaluationDetail'
import type { Subject } from '../Common/Subject'

export interface Evaluation {
  id: string
  coefficient: number
  average: number | null
  scale: number | null
  studentAverage: number | null
  evaluations: EvaluationDetail[]
  subject: Subject
  teachers: User[]
}
