export interface Folder {
  /**
   * Identifiant
   */
  id: string
  /**
   * Nom du dossier
   */
  name: string
  /**
   * Position du dossier dans l'arborescence
   */
  position: number
  /**
   * Type de dossier
   */
  type: 'INBOX' | 'SENT' | 'DRAFTS' | 'MODERATION' | 'TRASH' | 'PERSONAL' | string
}
