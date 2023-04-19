import { BaseResponse, BaseObject } from '../Globals'

export type EvaluationSettingsIncluded = BaseResponse<{
    label?: string;
    startDate?: string;
    endDate?: string;
    colorLevelMappings?: {
        level: string;
        color: string;
    }[];
    skillAcquisitionLevels?: {
        label: string;
        shortLabel: string;
        level: string;
    }[];
}, {
    skillAcquisitionColors: {
        data: BaseObject
    };
}>
export type EvaluationSettings = BaseResponse<{
        periodicReportsEnabled: boolean;
        skillsEnabled: boolean;
        evaluationsDetailsAvailable: boolean;
    }, {
        periods: {
            data: BaseObject<'period'>[];
        };
        skillsSetting: {
            data: BaseObject
        };
}, 'evaluationsSetting'>
