import { BaseObject, BaseResponse } from '../Global'
import { PersonType } from './UsersMailSettings'
import { AttachmentAttributes } from '../School/Attachment'
import { UserAttributes } from '../Global/User'
import { SchoolAttributes } from '../School/School'
import { ParticipantAttributes } from './Participant'

export interface ParticipationAttributes {
  dateTime: string
  content: string
  read: boolean
}

export interface ParticipationRelationships {
  attachments: {
    data: Array<BaseObject<'attachment'>>
  }
  sender: {
    data: BaseObject<'personParticipant'>
  }
}

export type Participation = BaseResponse<ParticipationAttributes, ParticipationRelationships, 'participation'>

export type ParticipationIncluded = BaseResponse<UserAttributes, {
  school: {
    data: BaseObject<'school'> | null
  }
}, PersonType>
| BaseResponse<ParticipantAttributes, {
  technicalUser: {
    data: BaseObject<'technicalUser'> | null
  }
  person: {
    data: BaseObject<PersonType> | null
  }
}, 'personParticipant'>
| BaseResponse<AttachmentAttributes, any, 'attachment'>
| BaseResponse<SchoolAttributes, any, 'school'>
