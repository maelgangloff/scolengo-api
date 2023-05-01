import { Lesson } from './Lesson'
import { HomeworkAssignment } from './HomeworkAssignment'

export interface Agenda {
  id: string
  date: string
  lessons: Lesson[]
  homeworkAssignments: HomeworkAssignment[]
}
