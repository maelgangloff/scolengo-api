import type { User } from '../Common'
import type { EvaluationDetail } from './EvaluationDetail'
import type { Subject } from '../Common/Subject'

export interface Evaluation {
  /**
   * Identifiant
   */
  id: string
  /**
   * Coefficient
   */
  coefficient: number | null
  /**
   * Moyenne de la classe
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
   * Détails de l'évaluation
   */
  evaluations: EvaluationDetail[]
  /**
   * Matière
   */
  subject: Subject
  /**
   * Enseignants
   */
  teachers: User[]
}
