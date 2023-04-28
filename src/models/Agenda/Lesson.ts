import { User } from '../Global'
import { HomeworkAssignment } from '../Homework/HomeworkAssignment'

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
  locationComplement: any
  canceled: boolean
  contents?: any
  teachers: User[]
  subject: Subject
  toDoForTheLesson?: HomeworkAssignment[]
  toDoAfterTheLesson?: HomeworkAssignment[]
}
