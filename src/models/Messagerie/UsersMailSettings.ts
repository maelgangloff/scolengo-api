import { UserAttributes } from '../Global/User'
import { BaseObject, BaseResponse, BaseResponseAttributes } from '../Global'

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

export interface ContactAttributes {
  label?: string
  linksWithUser: Array<{
    description: null | string
    additionalInfo: string[]
    type: ('SCHOOL' | 'FAMILY' | 'GROUP' | string)
    studentId?: string
    schoolId?: string
    groupId?: string
  }> | null
}

export interface SignatureAttributes {
  content: string
}

export interface FolderAttributes {
  name: string
  position: number
  type: string
}

export type UsersMailSettingsIncluded = BaseResponseAttributes<SignatureAttributes, 'signature'>
| BaseResponse<UserAttributes, undefined, PersonType>
| BaseResponse<FolderAttributes, {
  parent: {
    data: BaseObject<'folder'> | null
  }
}, 'folder'>
| BaseResponse<ContactAttributes, {
  person: {
    data: BaseObject<PersonType> | null
  }
}, 'personContact'>
| BaseResponse<ContactAttributes, {
  personContacts: {
    data: Array<BaseObject<'personContact'>> | null
  }
}, 'groupContact'>
