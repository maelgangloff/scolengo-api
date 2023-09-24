import { Folder } from './Folder'
import { Signature } from './Signature'
import { Contact } from './Contact'

export interface UsersMailSettings {
  id: string
  maxCharsInParticipationContent: number
  maxCharsInCommunicationSubject: number
  folders: Folder[]
  signature: Signature
  contacts: Contact[]
}

export type PersonType =
  | 'person'
  | 'student'
  | 'personInContactWithStudent'
  | 'nonTeachingStaff'
  | 'teacher'
