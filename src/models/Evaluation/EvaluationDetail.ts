import { SimpleUser } from '../App/User'
import { BaseResponse, BaseObject } from '../Globals'

export type EvaluationDetail = BaseResponse<{
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
            data: BaseObject[] | null;
        };
        subSubject: {
            data: BaseObject[] | null;
        };
        evaluationService: {
            data: BaseObject
        };
        evaluationResult: {
            data: BaseObject
        };
}>

export type EvaluationDetailIncluded = BaseResponse<SimpleUser | {
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
        data: BaseObject[] | null;
    };
    subject?: {
        data: BaseObject<'subject'>
    };
    teachers?: {
        data: BaseObject<'teacher'>[] | null;
    };
}>
