import { SimpleUser } from '../App/User'
import { BaseResponse, BaseObject } from '../Globals'

export type EvaluationAttributes = {
    coefficient: number;
    average: number | null;
    scale: number;
    studentAverage: number | null;
}

export type EvaluationRelationships = {
    evaluations: {
        data: BaseObject[];
    };
    subject: {
        data: BaseObject<'subject'>
    };
    teachers: {
        data: BaseObject<'teacher'>[];
    }
    }

export type Evaluation = BaseResponse<EvaluationAttributes, EvaluationRelationships, 'evaluationService'>

export type EvaluationIncludedAttributes = SimpleUser | {
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
}

export type EvaluationIncludedRelationships = {
    subSkills?: {
        data: BaseObject[];
    };
    evaluationResult?: {
        data: BaseObject
    };
    subSkillsEvaluationResults?: {
        data: BaseObject[];
    }
}

export type EvaluationIncluded = BaseResponse<EvaluationIncludedAttributes, EvaluationIncludedRelationships>
