import { UserAttributes } from '../App/User'
import { BaseResponse, BaseObject } from '../Globals'
import { PersonType } from '../Messagerie/UsersMailSettings'
import { EvaluationDetailAttributes } from './EvaluationDetail'

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

export type EvaluationIncludedAttributes = UserAttributes | EvaluationDetailAttributes | {
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

export type EvaluationIncluded = BaseResponse<EvaluationIncludedAttributes, EvaluationIncludedRelationships, 'evaluation' | 'evaluationResult' | 'subSkill' | 'subSkillEvaluationResult' | 'subject' | PersonType>
