export interface AttachmentAttributes {
  name: string
  mimeType: string
  mimeTypeLabel: string
  size: number
  url: string
}

export type PublicAttachment = AttachmentAttributes & {
  alternativeText: string | null
}
