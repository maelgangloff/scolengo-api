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

export type EvaluationIncluded = Included<{
    title: string
    firstName: string;
    lastName: string;
    photoUrl:string|null
} | {
    title: string | null;
    topic: string | null
    dateTime: string;
    coefficient: number;
    min: number |null
    max: number |null
    average: number | null;
    scale: number;
} | {
    mark: number | null;
    nonEvaluationReason: null | string;
    comment: string|null
} | {
    label: string;
    color: null | string;
}, {
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
