export interface Contact {
  id: StringConstructor
  linksWithUser: Array<{
    description: null | string
    additionalInfo: string[]
    type: 'SCHOOL' | 'FAMILY' | 'GROUP' | string
    groupId?: string
  }> | null
}
