export interface SkolengoErrorBody {
  /**
   * Code de status de l'erreur
   */
  status: string
  /**
   * Identifiant du type d'erreur
   * 
   * Exemple :
   * - PRONOTE_RESOURCES_NOT_READY
   */
  title: string
  /**
   * Détails de l'erreur
   */
  detail: string
}

export class SkolengoError extends Error implements SkolengoErrorBody {
  public readonly status: string
  public readonly detail: string
  public readonly title: string

  public constructor (error: SkolengoErrorBody) {
    super(error.detail)
    this.name = error.title
    this.title = error.title

    this.status = error.status
    this.detail = error.detail
    Error.captureStackTrace(this, this.constructor)
  }
}
