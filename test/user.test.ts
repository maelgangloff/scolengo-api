import { describe, expect } from '@jest/globals'
import type { AuthConfig } from '../src/models/Common/Auth'
import type { EvaluationSettings } from '../src/models/Results'
import { Skolengo } from '../src/index'
import './common'

const SKOLENGO_TOKENSET = process.env.SKOLENGO_TOKENSET
const describeAuthenticated = SKOLENGO_TOKENSET !== undefined ? describe : describe.skip

/**
 * Tests unitaires des endpoints qui nécessitent une authentification
 */
describeAuthenticated('Test of the Skolengo API types - Authenticated user', () => {
  let user: Skolengo
  let userPermissions: string[] = []

  beforeAll(async () => {
    user = await Skolengo.fromConfigObject((JSON.parse(SKOLENGO_TOKENSET as string) as AuthConfig), { handlePronoteError: true })
    const userInfo = await user.getUserInfo()
    if (userInfo.permissions === undefined) throw new Error("Impossible de lister les habilitations de l'utilisateur.")
    userPermissions = userInfo.permissions.map(p => p.permittedOperations).flat()
  })

  it('should getUserInfo return User type', async () => {
    const response = await user.getUserInfo()
    expect(response).toMatchSchema('User')
  })

  it('should getSchoolInfos return an array of SchoolInfo type', async () => {
    const response = await user.getSchoolInfos()
    for (const info of response) expect(info).toMatchSchema('SchoolInfo')
  })

  /**
   * Tests unitaires du module d'évaluation
   */
  describe('Test of the Evaluation module', () => {
    if (!userPermissions.includes('READ_EVALUATIONS')) return

    let evaluationSettingsList: EvaluationSettings[]

    beforeAll(async () => {
      evaluationSettingsList = await user.getEvaluationSettings()
    })

    it('should getEvaluationSettings return EvaluationSettings type', async () => {
      for (const evaluationSettings of evaluationSettingsList) expect(evaluationSettings).toMatchSchema('EvaluationSettings')
    })

    it('should getEvaluation return an array of Evaluation', async () => {
      if (evaluationSettingsList.length === 0 || evaluationSettingsList[0].periods.length === 0) return
      const response = await user.getEvaluation(undefined, evaluationSettingsList[0].periods[0].id)
      for (const evaluation of response) expect(evaluation).toMatchSchema('Evaluation')
    })
  })

  /**
   * Tests du module de messagerie
   */
  describe('Test of the Messagerie module', () => {
    if (!userPermissions.includes('READ_MESSAGES')) return

    it('should getUsersMailSettings return UsersMailSettings type', async () => {
      const response = await user.getUsersMailSettings()
      expect(response).toMatchSchema('UsersMailSettings')
    })
  })
})
