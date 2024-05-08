export interface Attachment {
  /**
   * Identifiant
   */
  id: string
  /**
   * Nom du fichier
   */
  name: string | null
  /**
   * Identifiant type MIME du média
   * @see https://www.iana.org/assignments/media-types/media-types.xhtml
   */
  mimeType: string | null
  /**
   * Nom usuel du type MIME
   */
  mimeTypeLabel: string | null
  /**
   * Taille du fichier
   */
  size: number | null
  /**
   * Lien vers le fichier
   */
  url: string
  /**
   * Texte alternatif
   */
  alternativeText: string | null
}
