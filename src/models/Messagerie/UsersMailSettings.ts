import { UserAttributes } from '../App/User'
import { BaseObject, BaseResponse } from '../Globals'

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

export type UsersMailSettingsIncludedAttributes = {
  content?: string
} | {
  name: string
  position: number
  type: string
} | {
  label?: string
  linksWithUser: Array<{
    description: null | string
    additionalInfo: string[]
    type: ('SCHOOL' | 'FAMILY' | 'GROUP' | string)
    studentId?: string
    schoolId?: string
    groupId?: string
  }> | null
} | UserAttributes

export interface UsersMailSettingsIncludedRelationships {
  parent?: {
    data: BaseObject[] | BaseObject | null
  }
  personContacts?: {
    data: Array<BaseObject<'personContact'>> | null
  }
  person?: {
    data: BaseObject<PersonType> | null
  }
}

export type UsersMailSettingsIncluded = BaseResponse<
UsersMailSettingsIncludedAttributes,
UsersMailSettingsIncludedRelationships,
'groupContact' | 'signature' | 'personContact' | 'folder' | PersonType
>
