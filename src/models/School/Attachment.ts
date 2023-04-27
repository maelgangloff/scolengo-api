export interface Attachment {
  id: string
  name?: string
  mimeType?: string
  mimeTypeLabel?: string
  size?: number
  url: string
  alternativeText?: string | null
}
