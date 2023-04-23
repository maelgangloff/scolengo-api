import { UserAttributes } from '../Global/User'
import { BaseObject, BaseResponse, BaseResponseAttributes } from '../Global'
import { Folder } from './Folder'
import { Signature } from './Signature'
import { Contact } from './Contact'

export interface UsersMailSettingsAttributes {
  maxCharsInParticipationContent: number
  maxCharsInCommunicationSubject: number
}

export interface UsersMailSettingsRelationships {
  folders: {
    data: Array<BaseObject<'folder'>>
  }
  signature: {
    data: BaseObject<'signature'>
  }
  contacts: {
    data: Array<BaseObject<'personContact' | 'groupContact'>>
  }
}

export type UsersMailSettings = BaseResponse<UsersMailSettingsAttributes, UsersMailSettingsRelationships, 'userMailSetting'>

export type PersonType =
  'person'
  | 'student'
  | 'personInContactWithStudent'
  | 'nonTeachingStaff'
  | 'teacher'
  | 'technicalUser'

export type UsersMailSettingsIncluded = BaseResponseAttributes<Signature, 'signature'>
| BaseResponseAttributes<UserAttributes, PersonType>
| BaseResponse<Folder, {
  parent: {
    data: BaseObject<'folder'> | null
  }
}, 'folder'>
| BaseResponse<Contact, {
  person: {
    data: BaseObject<PersonType> | null
  }
}, 'personContact'>
| BaseResponse<Contact, {
  personContacts: {
    data: Array<BaseObject<'personContact'>> | null
  }
}, 'groupContact'>
