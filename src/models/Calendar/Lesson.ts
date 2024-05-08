import type { User, Subject } from '../Common'
import type { HomeworkAssignment } from './HomeworkAssignment'
import type { Attachment } from '../School'

export interface Lesson {
  /**
   * Identifiant
   */
  id: string
  /**
   * Date de début
   */
  startDateTime: string
  /**
   * Date de fin
   */
  endDateTime: string
  /**
   * Titre
   */
  title: string
  /**
   * Localisation
   */
  location: string | null
  /**
   * Devoir à faire pour la séance
   */
  anyHomeworkToDoForTheLesson: boolean
  /**
   * Devoir à faire à l'issue de la séance
   */
  anyHomeworkToDoAfterTheLesson: boolean
  /**
   * Contenu de la sénce renseigné
   */
  anyContent: boolean
  /**
   * Complément de localisation
   */
  locationComplement?: string | null
  /**
   * Séance annulée
   */
  canceled: boolean
  /**
   * Contenu de la séance
   */
  contents?: Array<{
    /**
     * Identifiant
     */
    id: string
    /**
     * Contenu HTML
     */
    html: string
    /**
     * Titre
     */
    title: string
    /**
     * Lien URL du contenu
     */
    url: string | null
    /**
     * Pièces jointes
     */
    attachments: Attachment[]
  }>
  /**
   * Enseignants
   */
  teachers: User[]
  /**
   * Matière
   */
  subject: Subject
  /**
   * Devoirs à faire pour la séance
   */
  toDoForTheLesson?: HomeworkAssignment[]
  /**
   * Devoirs à faire à l'issue de la séance
   */
  toDoAfterTheLesson?: HomeworkAssignment[]
}
