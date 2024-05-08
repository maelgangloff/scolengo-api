import type { Attachment } from '../School'
import type { User, Subject } from '../Common'

export interface HomeworkAssignment {
  /**
   * Identifiant
   */
  id: string
  /**
   * Titre du devoir
   */
  title: string | null
  /**
   * Contenu HTML du devoir
   */
  html: string | null
  /**
   * Date d'échéance
   */
  dueDateTime: string | null
  /**
   * Date d'échéance
   */
  dueDate?: string | null
  /**
   * Devoir fait
   */
  done: boolean
  /**
   * Devoir rendu en ligne
   */
  deliverWorkOnline?: boolean
  /**
   * Lien de rendu du devoir en ligne
   */
  onlineDeliveryUrl?: null | string
  /**
   * Matière
   */
  subject?: Subject
  /**
   * Pièces jointes
   */
  attachments?: Attachment[]
  /**
   * Enseignant
   */
  teacher?: User
  /**
   * Soumission en ligne autorisée
   */
  submissionAllowed?: boolean | null
}

/*
interface CorrectionWork {
  html: string
  correctionDate: string
}
 */
