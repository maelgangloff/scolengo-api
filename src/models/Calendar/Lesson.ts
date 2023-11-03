import type { User } from '../Common'
import type { HomeworkAssignment } from './HomeworkAssignment'
import type { Attachment } from '../School'

export interface Subject {
  id: string
  label: string
  color: string
}

export interface Lesson {
  id: string
  startDateTime: string
  endDateTime: string
  title: string
  location: string
  anyHomeworkToDoForTheLesson: boolean
  anyHomeworkToDoAfterTheLesson: boolean
  anyContent: boolean
  locationComplement: string | null
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
