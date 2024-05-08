import type { Folder } from './Folder'
import type { Signature } from './Signature'
import type { Contact } from './Contact'

export interface UsersMailSettings {
  /**
   * Identifiant
   */
  id: string
  /**
   * Nombre maximal de caractères dans le contenu de la participation
   */
  maxCharsInParticipationContent: number
  /**
   * Nombre maximal de caractères dans le contenu du sujet
   */
  maxCharsInCommunicationSubject: number
  /**
   * Dossiers accessibles
   */
  folders: Folder[]
  /**
   * Signature configurée
   */
  signature: Signature
  /**
   * Contacts
   */
  contacts: Contact[]
}

export type PersonType =
  'person'
  | 'student'
  | 'personInContactWithStudent'
  | 'nonTeachingStaff'
  | 'teacher'
