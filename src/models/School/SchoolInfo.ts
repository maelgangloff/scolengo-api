import { PublicAttachment } from './Attachment'
import { BaseObject, BaseResponse } from '../Globals'
import { UserAttributes } from '../App/User'
import { PersonType } from '../Messagerie/UsersMailSettings'

export interface SchoolInfoAttributes {
  publicationDateTime: string
  title: string
  shortContent: string
  content?: string
  url?: string | null
  linkedInfoUrl?: string | null
  linkedWebSiteUrl?: string | null
}

export interface SchoolInfoRelationships {
  school: {
    data: BaseObject<'school'> | null
  }
  author: {
    data: BaseObject<'schoolInfoAuthor'> | null
  }
  illustration: {
    data: BaseObject<'schoolInfoFile'> | null
  }
  attachments?: {
    data: Array<BaseObject<'attachment'>>
  }
}

export type SchoolInfo = BaseResponse<SchoolInfoAttributes, SchoolInfoRelationships, 'news'>

interface SchoolInfoAuthor {
  additionalInfo: any
}

interface SchoolInfoSchool {
  name: string
  addressLine1?: string | null
  addressLine2?: string | null
  addressLine3?: string | null
  zipCode?: string | null
  city?: string | null
  country?: string | null
  homePageUrl?: string | null
  emsCode?: string | null
  emsOIDCWellKnownUrl?: string | null
  timeZone?: string | null
}

export type SchoolInfoIncludedAttributes = UserAttributes | PublicAttachment | SchoolInfoSchool | SchoolInfoAuthor
export interface SchoolInfoIncludedRelationships {
  technicalUser: {
    data: BaseObject<'technicalUser'> | null
  }
  person: {
    data: BaseObject<PersonType> | null
  }
}

export type SchoolInfoIncluded = BaseResponse<SchoolInfoIncludedAttributes, SchoolInfoIncludedRelationships>
