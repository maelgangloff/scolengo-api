import type { SubSkill } from './SubSkill'

export interface EvaluationResult {
  /**
   * Identifiant
   */
  id: string
  /**
   * Note de l'étudiant
   */
  mark: number | null
  /**
   * Motif de non-évaluation
   */
  nonEvaluationReason: null | string
  /**
   * Commentaire de l'enseignant
   */
  comment: string | null
  /**
   * Résultats des compétences évaluées
   */
  subSkillsEvaluationResults: Array<{
    /**
     * Identifiant
     */
    id: string
    /**
     * Niveau atteint
     */
    level: string
    /**
     * Compétence
     */
    subSkill: SubSkill
  }>
}
