export interface Folder {
  id: string
  name: string
  position: number
  type:
    | 'INBOX'
    | 'SENT'
    | 'DRAFTS'
    | 'MODERATION'
    | 'TRASH'
    | 'PERSONAL'
    | string
}
