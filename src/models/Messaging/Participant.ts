import type { User } from '../Common'
import type { TechnicalUser } from './TechnicalUser'

export interface Participant {
  /**
   * Identifiant
   */
  id: string
  /**
   * Catégorie de participant
   */
  category: 'INITIATOR' | 'TO' | 'CC'
  /**
   * Informations additionnelles
   */
  additionalInfo: any
  /**
   * Label
   */
  label?: string
  /**
   * Le participant provient d'un groupe
   */
  fromGroup?: boolean
  /**
   * Personne
   */
  person?: User
  /**
   * Utilisateur technique
   */
  technicalUser?: TechnicalUser
}
