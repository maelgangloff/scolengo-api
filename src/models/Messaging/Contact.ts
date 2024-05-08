import type { User } from '../Common'

export interface Contact {
  /**
   * Identifiant
   */
  id: string
  /**
   * Label
   */
  label?: string
  /**
   * Personne
   */
  person?: User
  /**
   * Contacts
   */
  personContacts?: Contact[]
  /**
   * Liens avec l'utilisateur
   */
  linksWithUser: Array<{
    /**
     * Descriptions
     */
    description: null | string
    /**
     * Informations additionnelles
     */
    additionalInfo: string[]
    /**
     * Type de relation
     */
    type: ('SCHOOL' | 'FAMILY' | 'GROUP' | string)
    /**
     * Identifiant de l'étudiant
     */
    studentId?: string
    /**
     * Identifiant de l'établissement
     */
    schoolId?: string
    /**
     * Identifiant du groupe
     */
    groupId?: string
  }> | null
}
