import type { SubSkill } from './SubSkill'
import type { EvaluationResult } from './EvaluationResult'
import type { EvaluationService } from './EvaluationService'

export interface EvaluationDetail {
  /**
   * Identifiant
   */
  id: string
  /**
   * Titre de l'évaluation
   */
  title: string | null
  /**
   * Sujet
   */
  topic: string | null
  /**
   * Date
   */
  dateTime: string | null
  /**
   * Coefficient
   */
  coefficient: number | null
  /**
   * Note minimale
   */
  min: number | null
  /**
   * Note maximale
   */
  max: number | null
  /**
   * Moyenne
   */
  average: number | null
  /**
   * Barème de notation
   */
  scale: number | null
  /**
   * Compétences évaluées
   */
  subSkills: SubSkill[]
  /**
   * Service d'évaluation
   */
  evaluationService?: EvaluationService
  /**
   * Résultat d'évaluation
   */
  evaluationResult: EvaluationResult
}
