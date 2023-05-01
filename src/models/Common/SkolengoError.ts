export interface SkolengoError {
  status: number
  title: string
  detail: string
}

export class SkolengoError extends Error implements SkolengoError {
  public constructor (error: SkolengoError) {
    super(error.detail)
    this.name = error.title
    this.status = error.status
    this.detail = error.detail
    Error.captureStackTrace(this, this.constructor)
  }
}
