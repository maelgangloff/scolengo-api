export type SupportedAbsenceType = 'ABSENCE' | 'DEPARTURE' | 'EXEMPTION' | 'LATENESS'

export interface AbsenceReason {
  /**
   * Identifiant
   */
  id: string
  /**
   * Code d'identification
   */
  code: string
  /**
   * Intitulé long
   */
  longLabel: string
  /**
   * Type d'absence supporté par ce motif
   */
  supportedAbsenceTypes: SupportedAbsenceType[]
}
