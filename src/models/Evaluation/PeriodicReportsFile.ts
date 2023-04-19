import { BaseResponse } from '../Globals'

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
        data :any
    }
}

export type PeriodicReportsFile = BaseResponse<PeriodicReportsFileAttributes, PeriodicReportsFileRelationships, 'periodicSchoolReportFile'>
