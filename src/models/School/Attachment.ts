export interface Attachment {
  id: string
  name: string
  mimeType: string
  mimeTypeLabel: string
  size: number
  url: string
}

export type PublicAttachment = Attachment & {
  alternativeText: string | null
}
