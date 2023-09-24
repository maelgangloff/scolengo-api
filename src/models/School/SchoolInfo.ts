import { Attachment } from './Attachment'
import { User } from '../Common'
import { School } from './School'

export interface SchoolInfo {
  id: string
  level: 'INFO' | string | null
  publicationDateTime: string
  title: string
  shortContent: string
  content?: string
  url?: string | null
  linkedInfoUrl?: string | null
  linkedWebSiteUrl?: string | null
  school?: Partial<School>
  attachments?: Attachment[]
  author: {
    id: string
    additionalInfo: any
    person: User
  }
  illustration?: Attachment
}
