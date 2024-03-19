import type { Participant } from './Participant'
import type { Attachment } from '../School'

export interface Participation {
  id: string
  dateTime: string
  content: string | null
  contentWithoutHtml: string | null
  read: boolean
  sender: Participant
  attachments?: Attachment[]
}
