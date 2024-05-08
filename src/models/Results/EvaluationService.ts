import type { Subject } from '../Common/Subject'
import type { User } from '../Common'

export interface EvaluationService {
  /**
   * Identifiant
   */
  id: string
  /**
   * Coefficient
   */
  coefficient: number | null
  /**
   * Moyenne
   */
  average: number | null
  /**
   * Barème de notation
   */
  scale: number | null
  /**
   * Moyenne de l'étudiant
   */
  studentAverage: number | null
  /**
   * Matière
   */
  subject: Subject
  /**
   * Enseignants
   */
  teachers: User[]
}
