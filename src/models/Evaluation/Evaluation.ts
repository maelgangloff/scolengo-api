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
        data: BaseObject<'evaluation'>[];
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
} | {
    shortLabel: string
} | {
    level: string
}

export type EvaluationIncludedRelationships = {
    subSkills?: {
        data: BaseObject<'subSkill'>[];
    };
    evaluationResult?: {
        data: BaseObject<'evaluationResult'>
    };
    subSkillsEvaluationResults?: {
        data: BaseObject<'subSkillEvaluationResult'>[];
    },
    subSkill?: {
        data: BaseObject<'subSkill'>
    }
}

export type EvaluationIncluded = BaseResponse<EvaluationIncludedAttributes, EvaluationIncludedRelationships>
