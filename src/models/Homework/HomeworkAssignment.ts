import { Subject } from '../Agenda/Lesson'
import { Attachment } from '../School/Attachment'
import { User } from '../Global'

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
