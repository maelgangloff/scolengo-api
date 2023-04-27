import { User } from '../Global/User'

export interface Contact {
  id: string
  label?: string
  person?: User
  personContacts?: Contact[]
  linksWithUser: Array<{
    description: null | string
    additionalInfo: string[]
    type: ('SCHOOL' | 'FAMILY' | 'GROUP' | string)
    studentId?: string
    schoolId?: string
    groupId?: string
  }> | null
}
