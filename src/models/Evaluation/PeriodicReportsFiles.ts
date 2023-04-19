import { BaseResponse } from '../Globals'

export type PeriodicReportsFiles = BaseResponse<{
    name: string
    mimeType: string
    mimeTypeLabel: string
    size: number
    url: string
    alternativeText: string|null
}, never, 'periodicSchoolReportFile'>
