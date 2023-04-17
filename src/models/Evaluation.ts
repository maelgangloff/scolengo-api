import { Included } from './Globals'

export interface Evaluation {
    id: string;
    type: string;
    attributes: {
        coefficient: number;
        average: number | null;
        scale: number;
        studentAverage: number | null;
    };
    relationships: {
        evaluations: {
            data: {
                id: string;
                type: string;
            }[];
        };
        subject: {
            data: {
                id: string;
                type: string;
            };
        };
        teachers: {
            data: {
                id: string;
                type: string;
            }[];
        }
    };
}

export type EvaluationIncluded = Included<Partial<{
    dateTime: string;
    coefficient: number;
    average: number;
    scale: number;
    mark: number | null;
    nonEvaluationReason: null | string;
    label: string;
    color: null | string;
    title: string;
    firstName: string;
    lastName: string;
}>, {
    subSkills?: {
        data: {
            id: string;
            type: string;
        }[];
    };
    evaluationResult?: {
        data: {
            id: string;
            type: string;
        };
    };
    subSkillsEvaluationResults?: {
        data: {
            id: string;
            type: string;
        }[];
    }
}>
