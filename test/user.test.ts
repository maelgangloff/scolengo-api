import { describe, expect } from '@jest/globals'
import type { Config } from 'ts-json-schema-generator'
import { createGenerator } from 'ts-json-schema-generator'
import { Skolengo } from '../src/index'
import Ajv from 'ajv'

const SKOLENGO_TOKENSET = process.env.SKOLENGO_TOKENSET
const describeIfLoggedIn = SKOLENGO_TOKENSET !== undefined ? describe : describe.skip

const ajv = new Ajv()

const ajvConfig: Config = {
  path: 'src/**/*.ts',
  tsconfig: 'tsconfig.json'
}

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
    const schema = createGenerator({ ...ajvConfig, type }).createSchema(type)

    const result = ajv.validate(schema, response)
    if (!result) console.error(ajv.errors)

    expect(result).toBe(true)
  })

  it('should getEvaluationSettings return EvaluationSettings type', async () => {
    if (!userPermissions.includes('READ_EVALUATIONS')) return
    const type = 'EvaluationSettings'
    const response = await user.getEvaluationSettings()
    const schema = createGenerator({ ...ajvConfig, type }).createSchema(type)

    for (const evaluationSettings of response) {
      const result = ajv.validate(schema, evaluationSettings)
      if (!result) console.error(ajv.errors)

      expect(result).toBe(true)
    }
  })
})
