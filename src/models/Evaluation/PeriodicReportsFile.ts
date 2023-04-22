import { BaseObject, BaseResponse } from '../Global'
import { PublicAttachment } from '../School/Attachment'

export type PeriodicReportsFileAttributes = PublicAttachment

export interface PeriodRelationship {
  period: {
    data: BaseObject<'period'> | null
  }
}

export type PeriodicReportsFile = BaseResponse<PeriodicReportsFileAttributes, PeriodRelationship, 'periodicSchoolReportFile'>
