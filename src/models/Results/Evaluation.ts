import { User } from '../Common'
import { EvaluationDetail } from './EvaluationDetail'
import { Subject } from './Subject'

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
