export interface Attachment {
  id: string
  name: string | null
  mimeType: string | null
  mimeTypeLabel: string | null
  size: number | null
  url: string
  alternativeText: string | null
}
