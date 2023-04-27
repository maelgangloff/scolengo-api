export type SupportedAbsenceType = 'ABSENCE' | 'DEPARTURE' | 'EXEMPTION' | 'LATENESS'

export interface AbsenceReason {
  id: string
  code: string
  longLabel: string
  supportedAbsenceTypes: SupportedAbsenceType[]
}
