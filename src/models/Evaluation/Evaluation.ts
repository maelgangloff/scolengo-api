import { SimpleUser } from '../App/User'
import { BaseResponse, BaseObject } from '../Globals'

export type Evaluation = BaseResponse<{
        coefficient: number;
        average: number | null;
        scale: number;
        studentAverage: number | null;
    }, {
    evaluations: {
        data: BaseObject[];
    };
    subject: {
        data: BaseObject
    };
    teachers: {
        data: BaseObject[];
    }
}>

export type EvaluationIncluded = BaseResponse<SimpleUser | {
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
        data: BaseObject[];
    };
    evaluationResult?: {
        data: BaseObject
    };
    subSkillsEvaluationResults?: {
        data: BaseObject[];
    }
}>
