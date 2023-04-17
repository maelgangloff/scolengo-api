import { Included } from './Globals'

export interface EvaluationDetail {
    id: string;
    type: string;
    attributes: {
        title: string|null;
        topic: string|null;
        dateTime: string|null;
        coefficient: number;
        min: number|null;
        max: number|null;
        average: number|null;
        scale: number|null;
    };
    relationships: {
        subSkills: {
            data: {
                id: string;
                type: string;
            }[] | null;
        };
        subSubject: {
            data: {
                id: string;
                type: string;
            }[] | null;
        };
        evaluationService: {
            data: {
                id: string;
                type: string;
            };
        };
        evaluationResult: {
            data: {
                id: string;
                type: string;
            };
        };
    };
}

export type EvaluationDetailIncluded = Included<Partial<{
    mark: number|null;
    nonEvaluationReason: null;
    comment: null;
    label: string;
    coefficient: number|null
    average: number|null
    scale: number|null
    studentAverage: number|null
    photoUrl: string|null
    color: string;
    title: string;
    firstName: string;
    lastName: string;
}>, {
    subSkillsEvaluationResults?: {
        data: {
            id: string;
            type: string;
        }[] | null;
    };
    subject?: {
        data: {
            id: string;
            type: string;
        };
    };
    teachers?: {
        data: {
            id: string;
            type: string;
        }[] | null;
    };
}>
