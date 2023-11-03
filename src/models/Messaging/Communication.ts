import type { Participation } from './Participation'

export interface Communication {
  id: string
  subject: string
  participationsNumber: number | null
  recipientsSummary: string | null
  read: boolean | null
  replyToAllAllowed: boolean | null
  replyToSenderAllowed: boolean | null
  readTrackingEnabled: boolean | null
  firstParticipationContent: string | null
  lastParticipation?: Participation
}
