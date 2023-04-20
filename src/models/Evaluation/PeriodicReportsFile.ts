import { BaseObject, BaseResponse } from '../Globals'

export type PeriodicReportsFileAttributes = {
    name: string
    mimeType: string
    mimeTypeLabel: string
    size: number
    url: string
    alternativeText: string|null
}

export type PeriodicReportsFileRelationships = {
    period: {
        data : BaseObject<'period'> | null
    }
}

export type PeriodicReportsFile = BaseResponse<PeriodicReportsFileAttributes, PeriodicReportsFileRelationships, 'periodicSchoolReportFile'>
