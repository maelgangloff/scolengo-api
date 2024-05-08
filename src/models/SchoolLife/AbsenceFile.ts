import type { AbsenceReason, SupportedAbsenceType } from './AbsenceReason'
import type { User } from '../Common'

export interface AbsenceFile {
  /**
   * Identifiant
   */
  id: string
  /**
   * Statut en cours
   */
  currentState: AbsenceState
  /**
   * Historique des statuts
   */
  history?: AbsenceState[]
}

export interface AbsenceState {
  id: string
  /**
   * Date de création
   */
  creationDateTime: string
  /**
   * Date de début de l'absence
   */
  absenceStartDateTime: string
  /**
   * Date de fin de l'absence
   */
  absenceEndDateTime: string
  /**
   * Type d'absence
   */
  absenceType: SupportedAbsenceType | string
  /**
   * Statut du dossier d'absence
   */
  absenceFileStatus: 'NEW' | 'IN_PROGRESS' | 'LOCKED' | string
  /**
   * Commentaire du dossier
   */
  comment: string
  /**
   * Créateur
   */
  creator?: User
  /**
   * Raison de l'absence
   */
  absenceReason?: AbsenceReason
  /**
   * Fichier d'absence
   */
  absenceFile: {
    /**
     * Identifiant
     */
    id: string
  }
}
