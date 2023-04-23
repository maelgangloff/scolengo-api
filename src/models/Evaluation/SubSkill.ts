import { BaseObject } from '../Global'

export interface SubSkillAttributes {
  shortLabel: string
}
export interface SubSkillRelationShip {
  subSkill: {
    data: BaseObject<'subSkill'>
  }
}

export interface SubSkillsRelationship {
  subSkills: {
    data: Array<BaseObject<'subSkill'>>
  }
}

export interface SubSkillsEvaluationResultRelationship {
  subSkillsEvaluationResults: {
    data: Array<BaseObject<'subSkillEvaluationResult'>>
  }
}

export interface SubSkillEvaluationResultAttributes {
  level: string
}
