import type { User, Subject } from '../Common'
import type { HomeworkAssignment } from './HomeworkAssignment'
import type { Attachment } from '../School'

export interface Lesson {
  id: string
  startDateTime: string
  endDateTime: string
  title: string
  location: string | null
  anyHomeworkToDoForTheLesson: boolean
  anyHomeworkToDoAfterTheLesson: boolean
  anyContent: boolean
  locationComplement?: string | null
  canceled: boolean
  contents?: Array<{
    id: string
    html: string
    title: string
    url: string | null
    attachments: Attachment[]
  }>
  teachers: User[]
  subject: Subject
  toDoForTheLesson?: HomeworkAssignment[]
  toDoAfterTheLesson?: HomeworkAssignment[]
}
