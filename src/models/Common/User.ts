export interface UserPermission<
  Service extends string,
  Operation extends string
> {
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
  permissions?: Array<
    | UserPermission<'EVAL', 'READ_EVALUATIONS'> // Résultats - Grading
    | UserPermission<'FACT', string> // Finances - Billing
    | UserPermission<'REST', string> // Porte-Monnaie - Catering
    | UserPermission<'CDT', 'READ_LESSONS'> // Agenda - Organizer
    | UserPermission<
        'TAF',
        'READ_HOMEWORK_ASSIGNMENTS' | 'MARK_HOMEWORK_ASSIGNMENT_AS_DONE'
      > // Travail à faire
    | UserPermission<
        'ABS',
        | 'READ_ABSENCE_FILES'
        | 'READ_ABSENCE_FILES_DETAILS'
        | 'COMPLETE_ABSENCE_FILES'
      > // Vie Scolaire - Absences
    | UserPermission<'MSG', 'READ_MESSAGES' | 'WRITE_MESSAGES'> // Messagerie
    | UserPermission<string, string>
  >
  addressLines?: string[]
  postalCode?: string
  city?: string
  country?: string
  students?: User[]
  school?: {
    id: string
    name: string
    timeZone: string
    subscribedServices: Array<
      | 'MSG'
      | 'SKOAPP'
      | 'ABS'
      | 'CDT'
      | 'ART'
      | 'TAF'
      | 'EVAL'
      | 'COMC'
      | 'FACT'
      | 'REST'
      | string
    >
  }
}
