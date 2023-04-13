import { Included } from './Globals'

export type EvaluationsIncluded = Included<{
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
        data: {
            id: string;
            type: string;
        };
    };
}>
export interface EvaluationsSettings {
    id: string;
    type: string;
    attributes: {
        periodicReportsEnabled: boolean;
        skillsEnabled: boolean;
        evaluationsDetailsAvailable: boolean;
    };
    relationships?: {
        periods: {
            data: {
                id: string;
                type: string;
            }[];
        };
        skillsSetting: {
            data: {
                id: string;
                type: string;
            };
        };
    }
}
