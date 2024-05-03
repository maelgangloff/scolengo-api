import type { Attachment } from './Attachment'
import type { User } from '../Common'
import type { School } from './School'

export interface SchoolInfo {
  id: string
  level?: string
  publicationDateTime: string
  title: string
  shortContent: string
  content?: string
  url: string | null
  linkedInfoUrl: string | null
  linkedWebSiteUrl: string | null
  school: Partial<School>
  attachments?: Attachment[]
  author?: {
    id: string
    additionalInfo: any
    person?: User
    technicalUser?: {
      id: string
      label: string
      logoUrl: string
    }
  }
  illustration?: Attachment
}
