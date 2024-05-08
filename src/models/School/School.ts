export type SchoolFilter = { text: string } | { lat: number, lon: number }

export interface School {
  /**
   * Identifiant
   */
  id: string
  /**
   * Nom de l'établissement
   */
  name?: string
  /**
   * Adresse ligne 1
   */
  addressLine1: string | null
  /**
   * Adresse ligne 2
   */
  addressLine2: string | null
  /**
   * Adresse ligne 3
   */
  addressLine3: string | null
  /**
   * Code postal
   */
  zipCode: string | null
  /**
   * Ville
   */
  city: string | null
  /**
   * Pays
   */
  country: string | null
  /**
   * Lien de la page d'accueil
   */
  homePageUrl: string | null
  /**
   * Fuseau horaire
   */
  timeZone?: string | null
  /**
   * Identifiant du projet ENT
   */
  emsCode?: string | null
  /**
   * Lien vers les métadonnées OpenID Connect Discovery
   */
  emsOIDCWellKnownUrl?: string | null
  /**
   * Distance vers l'établissement, si la recherche est effectuée à partir de coordonnées GPS
   */
  distance?: number | null
}
