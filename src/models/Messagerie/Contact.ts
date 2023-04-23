export interface Contact {
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
