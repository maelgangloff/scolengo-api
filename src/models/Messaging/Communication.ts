import { Participation } from './Participation'

export interface Communication<Part = Participation> {
  id: string
  subject: string
  participationsNumber: number | null
  recipientsSummary: string | null
  read: boolean | null
  replyToAllAllowed: boolean | null
  replyToSenderAllowed: boolean | null
  readTrackingEnabled: boolean | null
  lastParticipation?: Part
}
