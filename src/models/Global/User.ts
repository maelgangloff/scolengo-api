export interface UserPermission<Service extends string, Operation extends string> {
  schoolId: string
  service: Service
  permittedOperations: Operation[]
}

export interface User {
  id: string
  title?: string
  className?: string
  dateOfBirth?: string | null
  regime?: string
  lastName: string
  firstName: string
  photoUrl: string | null
  mef?: {
    code: string
    label: string
  }
  externalMail?: string
  importedMail?: string
  internalMail?: string
  profile?: string
  source?: string
  mobilePhone?: string
  permissions?: Array<UserPermission<'EVAL', 'READ_EVALUATIONS'> |
  UserPermission<'CDT', 'READ_LESSONS'> |
  UserPermission<'TAF', 'READ_HOMEWORK_ASSIGNMENTS' | 'MARK_HOMEWORK_ASSIGNMENT_AS_DONE'> |
  UserPermission<'ABS', 'READ_ABSENCE_FILES' | 'READ_ABSENCE_FILES_DETAILS' | 'COMPLETE_ABSENCE_FILES'> |
  UserPermission<'MSG', 'READ_MESSAGES' | 'WRITE_MESSAGES'> | UserPermission<string, string>>
  addressLines?: string[]
  postalCode?: string
  city?: string
  country?: string
  students?: User[]
  school?: {
    name: string
    timeZone: string
    subscribedServices: Array<'MSG' | 'SKOAPP' | 'ABS' | 'CDT' | 'ART' | 'TAF' | 'EVAL' | 'COMC' | string>
  }
}
