import { describe, expect } from '@jest/globals'
import type { AuthConfig } from '../src/models/Common/Auth'
import type { Evaluation, EvaluationSettings } from '../src/models/Results'
import type { Agenda } from '../src/models/Calendar'
import { Skolengo } from '../src/index'
import './common'

const SKOLENGO_TOKENSET = process.env.SKOLENGO_TOKENSET
const describeAuthenticated = SKOLENGO_TOKENSET !== undefined ? describe : describe.skip

/**
 * Tests unitaires des endpoints qui nécessitent une authentification
 */
describeAuthenticated('Test of the Skolengo API types - Authenticated user', () => {
  let user: Skolengo

  beforeAll(async () => {
    user = await Skolengo.fromConfigObject((JSON.parse(SKOLENGO_TOKENSET as string) as AuthConfig), { handlePronoteError: true })
  })

  it('should match type User', async () => {
    const response = await user.getUserInfo()
    expect(response).toMatchSchema('User')
  })

  it('should match type SchoolInfo[]', async () => {
    const response = await user.getSchoolInfos()
    for (const info of response) expect(info).toMatchSchema('SchoolInfo')
  })

  /**
   * Tests unitaires du module d'évaluation
   */
  describe('Test of the Evaluation module', () => {
    let evaluationSettingsList: EvaluationSettings[]
    let evaluationList: Evaluation[]

    beforeAll(async () => {
      evaluationSettingsList = await user.getEvaluationSettings()
      if (evaluationSettingsList.length === 0 || evaluationSettingsList[0].periods.length === 0) return

      evaluationList = await user.getEvaluation(undefined, evaluationSettingsList[0].periods[0].id, 2)
    })

    it('should match type EvaluationSettings', async () => {
      for (const evaluationSettings of evaluationSettingsList) expect(evaluationSettings).toMatchSchema('EvaluationSettings')
    })

    it('should match type Evaluation[]', async () => {
      for (const evaluation of evaluationList) expect(evaluation).toMatchSchema('Evaluation')
    })

    it('should match type EvaluationDetail[]', async () => {
      for (const evaluation of evaluationList) {
        const evaluationDetail = await user.getEvaluationDetail(undefined, evaluation.evaluations[0].id)
        expect(evaluationDetail).toMatchSchema('EvaluationDetail')
      }
    })
  })

  /**
   * Tests unitaires du module de messagerie
   */
  describe('Test of the MSG module', () => {
    it('should match type UsersMailSettings', async () => {
      const response = await user.getUsersMailSettings()
      expect(response).toMatchSchema('UsersMailSettings')
    })
  })

  describe('Test of the CDT module', () => {
    let agendaList: Agenda[]

    beforeAll(async () => {
      const dateToString = (date = new Date()): string => date.toISOString().split('T')[0]
      agendaList = await user.getAgenda(undefined, dateToString(new Date(new Date().getTime() - 7 * 24 * 60 * 60 * 1e3)), dateToString(), 2)
    })

    it('should match type Agenda[]', async () => {
      for (const agenda of agendaList) expect(agenda).toMatchSchema('Agenda')
    })
  })
})
