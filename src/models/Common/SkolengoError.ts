export interface SkolengoError {
  status: number
  title: string
  detail: string
}

export class SkolengoError extends Error implements SkolengoError {
  public constructor (error: SkolengoError, cause: Error) {
    super(error.detail)
    this.name = error.title
    this.status = error.status
    this.detail = error.detail
    this.cause = cause
    Error.captureStackTrace(this, this.constructor)
  }
}
