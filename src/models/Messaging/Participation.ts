import type { Participant } from './Participant'
import type { Attachment } from '../School'

export interface Participation {
  /**
   * Identifiant
   */
  id: string
  /**
   * Date de la participation
   */
  dateTime: string
  /**
   * Contenu
   */
  content: string | null
  /**
   * Contenu en texte brut
   */
  contentWithoutHtml: string | null
  /**
   * Lu
   */
  read: boolean
  /**
   * Expéditeur
   */
  sender: Participant
  /**
   * Pièces jointes
   */
  attachments?: Attachment[]
}
