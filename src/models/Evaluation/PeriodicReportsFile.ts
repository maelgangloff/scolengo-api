import { BaseResponse } from '../Globals'

export type PeriodicReportsFile = BaseResponse<{
    name: string
    mimeType: string
    mimeTypeLabel: string
    size: number
    url: string
    alternativeText: string|null
}, {
    period: {
        data :any
    }
}, 'periodicSchoolReportFile'>
