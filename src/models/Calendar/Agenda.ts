import type { Lesson } from './Lesson'
import type { HomeworkAssignment } from './HomeworkAssignment'

export interface Agenda {
  /**
   * Identifiant
   */
  id: string
  /**
   * Date du jour
   */
  date: string
  /**
   * Cours de la journée
   */
  lessons: Lesson[]
  /**
   * Devoirs prévus à faire pour la journée
   */
  homeworkAssignments: HomeworkAssignment[]
}
