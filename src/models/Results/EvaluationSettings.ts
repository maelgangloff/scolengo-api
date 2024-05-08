export interface Period {
  /**
   * Identifiant
   */
  id: string
  /**
   * Date de fin
   */
  endDate: string
  /**
   * Date de début
   */
  startDate: string
  /**
   * Intitulé de la période
   */
  label: string
}

export interface EvaluationSettings {
  /**
   * Identifiant
   */
  id: string
  /**
   * Bulletin périodique activé
   */
  periodicReportsEnabled: boolean
  /**
   * Notation par compétences activé
   */
  skillsEnabled: boolean
  /**
   * Détail des évaluations disponibles
   */
  evaluationsDetailsAvailable: boolean
  /**
   * Périodes de notation
   */
  periods: Period[]
  /**
   * Paramètres de la notation par compétences
   */
  skillsSetting?: {
    /**
     * Identifiant
     */
    id: string
    /**
     * Niveaux d'acquisition des compétences
     */
    skillAcquisitionLevels: Array<{
      /**
       * Intitulé
       */
      label: string
      /**
       * Intitulé court
       */
      shortLabel: string
      /**
       * Niveau
       */
      level: string
    }>
    /**
     * Couleurs des compétences par niveau d'acquisition
     */
    skillAcquisitionColors: {
      /**
       * Identifiant
       */
      id: string
      /**
       * Couleur en fonction du niveau atteint
       */
      colorLevelMappings: Array<{
        /**
         * Niveau
         */
        level: string
        /**
         * Couleur
         */
        color: string
      }>
    }
  }
}
