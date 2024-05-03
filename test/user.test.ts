import { describe, expect } from '@jest/globals'
import { Skolengo } from '../src/index'
import './common'

const SKOLENGO_TOKENSET = process.env.SKOLENGO_TOKENSET
const describeAuthenticated = SKOLENGO_TOKENSET !== undefined ? describe : describe.skip

/**
 * Tests unitaires des endpoints qui nécessitent une authentification
 */
describeAuthenticated('Test Skolengo API types - Authenticated user', () => {
  let user: Skolengo
  let userPermissions: string[] = []

  beforeAll(async () => {
    user = await Skolengo.fromConfigObject(JSON.parse(SKOLENGO_TOKENSET as string), { handlePronoteError: true })
    const userInfo = await user.getUserInfo()
    if (userInfo.permissions === undefined) throw new Error("Impossible de lister les habilitations de l'utilisateur.")
    userPermissions = userInfo.permissions.map(p => p.permittedOperations).flat()
  })

  it('should getUserInfo return User type', async () => {
    const response = await user.getUserInfo()

    expect(response).toMatchSchema('User')
  })

  it('should getEvaluationSettings return EvaluationSettings type', async () => {
    if (!userPermissions.includes('READ_EVALUATIONS')) return
    const response = await user.getEvaluationSettings()

    for (const evaluationSettings of response) {
      expect(evaluationSettings).toMatchSchema('EvaluationSettings')
    }
  })

  it('should getUsersMailSettings return UsersMailSettings type', async () => {
    const response = await user.getUsersMailSettings()

    expect(response).toMatchSchema('UsersMailSettings')
  })
})
