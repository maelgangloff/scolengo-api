import { User } from '../Common'
import { EvaluationDetail } from './EvaluationDetail'
import { Subject } from './Subject'

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
