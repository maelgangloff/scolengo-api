import type { Lesson } from './Lesson'
import type { HomeworkAssignment } from './HomeworkAssignment'

export interface Agenda {
  id: string
  date: string
  lessons: Lesson[]
  homeworkAssignments: HomeworkAssignment[]
}
