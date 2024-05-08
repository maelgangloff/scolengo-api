export interface UserPermission<Service extends string, Operation extends string> {
  /**
   * Identifiant de l'établissement scolaire
   */
  schoolId: string
  /**
   * Service
   */
  service: Service
  /**
   * Opérations permises à l'utilisateur sur le service
   */
  permittedOperations: Operation[]
}

export interface User {
  /**
   * Identifiant
   */
  id: string
  /**
   * Identifiant d'audience
   */
  audienceId?: string
  /**
   * Titre
   */
  title?: string
  /**
   * Nom de la classe
   */
  className?: string
  /**
   * Date de naissance
   */
  dateOfBirth?: string | null
  /**
   * Régime scolaire (Demi-pensionnaire, Externe)
   */
  regime?: string
  /**
   * Nom de famille
   */
  lastName: string
  /**
   * Prénom
   */
  firstName: string
  /**
   * Lien vers la photo de profil
   */
  photoUrl: string | null
  mef?: {
    code: string
    label: string
  }
  /**
   * Courriel externe
   */
  externalMail?: string
  /**
   * Courriel importé
   */
  importedMail?: string
  /**
   * Courriel interne
   */
  internalMail?: string
  /**
   * Type de profile
   */
  profile?: string
  /**
   * Source
   */
  source?: string
  /**
   * Numéro de téléphone mobile
   */
  mobilePhone?: string
  /**
   * Permissions de l'utilisateur
   */
  permissions?: Array<UserPermission<'EVAL', 'READ_EVALUATIONS'> | // Résultats - Grading
  UserPermission<'FACT', string> | // Finances - Billing
  UserPermission<'REST', string> | // Porte-Monnaie - Catering
  UserPermission<'CDT', 'READ_LESSONS'> | // Agenda - Organizer
  UserPermission<'TAF', 'READ_HOMEWORK_ASSIGNMENTS' | 'MARK_HOMEWORK_ASSIGNMENT_AS_DONE'> | // Travail à faire
  UserPermission<'ABS', 'READ_ABSENCE_FILES' | 'READ_ABSENCE_FILES_DETAILS' | 'COMPLETE_ABSENCE_FILES'> | // Vie Scolaire - Absences
  UserPermission<'MSG', 'READ_MESSAGES' | 'WRITE_MESSAGES'> | // Messagerie
  UserPermission<string, string>>
  /**
   * Adresse postale
   */
  addressLines?: string[]
  /**
   * Code postal
   */
  postalCode?: string
  /**
   * Ville
   */
  city?: string
  /**
   * Pays
   */
  country?: string
  /**
   * Etudiants rattachés au profile
   */
  students?: User[]
  /**
   * Etablissement scolaire
   */
  school?: {
    /**
     * Identifiant
     */
    id: string
    /**
     * Nom de l'établissement
     */
    name: string
    /**
     * Fuseau horaire
     */
    timeZone: string
    /**
     * Identifiant administratif
     */
    administrativeId: string
    /**
     * Ville
     */
    city: string
    /**
     * Audience
     */
    schoolAudience?: {
      /**
       * Actif
       */
      enabled: boolean
      /**
       * Identifiant de l'audience
       */
      audienceId: string
      /**
       * Identifiant du projet
       */
      projectId: string
    }
    /**
     * Services souscrits par l'établissement
     */
    subscribedServices: Array<'MSG' | 'SKOAPP' | 'ABS' | 'CDT' | 'ART' | 'TAF' | 'EVAL' | 'COMC' | 'FACT' | 'REST' | string>
  }
}
