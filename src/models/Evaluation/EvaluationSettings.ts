import { BaseResponse, BaseObject } from '../Globals'

export type EvaluationSettingsIncludedAttributes = {
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
}

export type EvaluationSettingsIncludedRelationships = {
    skillAcquisitionColors: {
        data: BaseObject<'skillAcquisitionColors'>
    };
}

export type EvaluationSettingsIncluded = BaseResponse<EvaluationSettingsIncludedAttributes, EvaluationSettingsIncludedRelationships>

export type EvaluationSettingsAttributes = {
    periodicReportsEnabled: boolean;
    skillsEnabled: boolean;
    evaluationsDetailsAvailable: boolean;
}

export type EvaluationSettingsRelationships = {
    periods: {
        data: BaseObject<'period'>[];
    };
    skillsSetting: {
        data: BaseObject<'skillsSetting'>
    };
}

export type EvaluationSettings = BaseResponse<EvaluationSettingsAttributes, EvaluationSettingsRelationships, 'evaluationsSetting'>
