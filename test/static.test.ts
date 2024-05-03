import { describe, expect } from '@jest/globals'
import type { Config } from 'ts-json-schema-generator'
import { createGenerator } from 'ts-json-schema-generator'
import { Skolengo } from '../src/index'
import Ajv from 'ajv'

const ajv = new Ajv()

const ajvConfig: Config = {
  path: 'src/**/*.ts',
  tsconfig: 'tsconfig.json'
}

/**
 * Tests unitaires des endpoints ne nécessitant pas d'authentification
 */
describe('Test Skolengo API types - Anonymous', () => {
  it('should getAppCurrentConfig return AppConfig type', async () => {
    const type = 'AppCurrentConfig'
    const response = await Skolengo.getAppCurrentConfig()
    const schema = createGenerator({ ...ajvConfig, type }).createSchema(type)

    const result = ajv.validate(schema, response)
    if (!result) console.error(ajv.errors)

    expect(result).toBe(true)
  })

  it('should searchSchool return School type', async () => {
    const type = 'School'
    const response = await Skolengo.searchSchool({ text: 'Lycée' }, 10)
    const schema = createGenerator({ ...ajvConfig, type }).createSchema(type)
    for (const school of response) {
      const result = ajv.validate(schema, school)
      if (!result) console.error(ajv.errors)

      expect(result).toBe(true)
    }
  })
})
