import { User } from '../Common'
import { Attachment } from '../School'
import { HomeworkAssignment } from './HomeworkAssignment'

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
  locationComplement?: any
  anyHomeworkToDoForTheLesson: boolean
  anyHomeworkToDoAfterTheLesson: boolean
  anyContent: boolean
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
