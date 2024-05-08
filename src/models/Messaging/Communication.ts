import type { Participation } from './Participation'

export interface Communication {
  /**
   * Identifiant
   */
  id: string
  /**
   * Sujet du fil de discussion
   */
  subject: string
  /**
   * Nombre de participations
   */
  participationsNumber: number | null
  /**
   * Résumé des destinataires
   */
  recipientsSummary: string | null
  /**
   * Lu
   */
  read: boolean | null
  /**
   * Répondre à tous autorisé
   */
  replyToAllAllowed: boolean | null
  /**
   * Répondre à l'expéditeur autorisé
   */
  replyToSenderAllowed: boolean | null
  /**
   * Lecture du courriel pistée
   */
  readTrackingEnabled: boolean | null
  /**
   * Contenu de la première participation
   */
  firstParticipationContent: string | null
  /**
   * Dernière participation
   */
  lastParticipation?: Participation
}
