import { Included } from '../Globals'

export type EvaluationDetail = Included<{
        title: string|null;
        topic: string|null;
        dateTime: string|null;
        coefficient: number;
        min: number|null;
        max: number|null;
        average: number|null;
        scale: number|null;
    }, {
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
}>

export type EvaluationDetailIncluded = Included<{
    photoUrl: string|null
    title: string;
    firstName: string;
    lastName: string;
} | {
    mark: number|null;
    nonEvaluationReason: null;
    comment: null;
} | {
    coefficient: number|null
    average: number|null
    scale: number|null
    studentAverage: number|null
} | {
    color: string;
    label: string
}, {
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
