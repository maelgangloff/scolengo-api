import type { Subject } from './Subject'
import type { User } from '../Common'

export interface EvaluationService {
  id: string
  coefficient: number | null
  average: number | null
  scale: number | null
  studentAverage: number | null
  subject: Subject
  teachers: User[]
}
