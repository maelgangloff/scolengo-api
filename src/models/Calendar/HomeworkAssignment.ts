import type { Subject } from './Lesson'
import type { Attachment } from '../School'
import type { User } from '../Common'

export interface HomeworkAssignment {
  id: string
  title: string
  html: string
  dueDateTime: string
  dueDate: string | null
  done: boolean
  deliverWorkOnline: boolean
  onlineDeliveryUrl: null | string
  subject: Subject
  attachments?: Attachment[]
  teacher?: User
}

/*
interface CorrectionWork {
  html: string
  correctionDate: string
}
 */
