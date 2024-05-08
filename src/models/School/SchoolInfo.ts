import type { Attachment } from './Attachment'
import type { User } from '../Common'
import type { School } from './School'
import { TechnicalUser } from '../Messaging'

export interface SchoolInfo {
  /**
   * Identifiant
   */
  id: string
  /**
   * Niveau
   */
  level?: string
  /**
   * Date de publication
   */
  publicationDateTime: string
  /**
   * Titre
   */
  title: string
  /**
   * Premières lignes de l'article
   */
  shortContent: string
  /**
   * Contenu
   */
  content?: string
  /**
   * Lien vers l'article
   */
  url: string | null
  /**
   * Lien vers l'article lié
   */
  linkedInfoUrl: string | null
  /**
   * Lien vers le site internet lié
   */
  linkedWebSiteUrl: string | null
  /**
   * Etablissement
   */
  school: Partial<School>
  /**
   * Pièces jointes
   */
  attachments?: Attachment[]
  /**
   * Auteur
   */
  author?: {
    /**
     * Identifiant
     */
    id: string
    /**
     * Informations additionnelles
     */
    additionalInfo: any
    /**
     * Personne physique associée
     */
    person?: User
    /**
     * Utilisateur technique associé
     */
    technicalUser?: TechnicalUser
  }
  /**
   * Illustration
   */
  illustration?: Attachment
}
