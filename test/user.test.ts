import { describe, expect } from '@jest/globals'
import { Skolengo } from '../src/index'
import './common'

const SKOLENGO_TOKENSET = process.env.SKOLENGO_TOKENSET
const describeIfLoggedIn = SKOLENGO_TOKENSET !== undefined ? describe : describe.skip

/**
 * Tests unitaires des endpoints qui nécessitent une authentification
 */
describeIfLoggedIn('Test Skolengo API types - User logged in', () => {
  let user: Skolengo
  let userPermissions: string[] = []

  beforeAll(async () => {
    user = await Skolengo.fromConfigObject(JSON.parse(SKOLENGO_TOKENSET as string), { handlePronoteError: true })
    const userInfo = await user.getUserInfo()
    if (userInfo.permissions === undefined) throw new Error("Impossible de lister les habilitations de l'utilisateur.")
    userPermissions = userInfo.permissions.map(p => p.permittedOperations).flat()
  })

  it('should getUserInfo return User type', async () => {
    const type = 'User'
    const response = await user.getUserInfo()

    expect(response).toMatchSchema(type)
  })

  it('should getEvaluationSettings return EvaluationSettings type', async () => {
    if (!userPermissions.includes('READ_EVALUATIONS')) return
    const type = 'EvaluationSettings'
    const response = await user.getEvaluationSettings()

    for (const evaluationSettings of response) {
      expect(evaluationSettings).toMatchSchema(type)
    }
  })

  it('should getUsersMailSettings return UsersMailSettings type', async () => {
    const type = 'UsersMailSettings'
    const response = await user.getUsersMailSettings()

    expect(response).toMatchSchema(type)
  })
})
