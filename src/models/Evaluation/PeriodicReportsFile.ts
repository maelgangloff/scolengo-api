import { BaseObject, BaseResponse } from '../Globals'
import { PublicAttachment } from '../School/Attachment'

export type PeriodicReportsFileAttributes = PublicAttachment

export interface PeriodicReportsFileRelationships {
  period: {
    data: BaseObject<'period'> | null
  }
}

export type PeriodicReportsFile = BaseResponse<PeriodicReportsFileAttributes, PeriodicReportsFileRelationships, 'periodicSchoolReportFile'>
