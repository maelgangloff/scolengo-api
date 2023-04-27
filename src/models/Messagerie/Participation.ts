import { Participant } from './Participant'
import { Attachment } from '../School/Attachment'

export interface Participation {
  id: string
  dateTime: string
  content: string
  read: boolean
  sender: Participant
  attachments: Attachment[]
}
