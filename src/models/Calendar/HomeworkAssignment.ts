import { Subject } from './Lesson'
import { Attachment } from '../School'
import { User } from '../Common'

export interface HomeworkAssignment {
  id: string
  title: string | null
  html: string | null
  dueDateTime: string | null
  dueDate: string | null
  done: boolean
  deliverWorkOnline: boolean
  onlineDeliveryUrl: null | string
  subject?: Subject
  attachments?: Attachment[]
  teacher?: User
  submissionAllowed: boolean | null
}

/*
interface CorrectionWork {
  html: string
  correctionDate: string
}
 */
