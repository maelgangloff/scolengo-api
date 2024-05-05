import { describe, expect } from '@jest/globals'
import { Skolengo } from '../src/index'
import { createSchema } from './common'

const schema = createSchema('*')

/**
 * Tests d'intégration des endpoints ne nécessitant pas d'authentification
 */
describe('Test Skolengo API types - Public endpoints', () => {
  it('should getAppCurrentConfig return AppConfig type', async () => {
    const response = await Skolengo.getAppCurrentConfig()

    expect(response).toMatchSchema('AppCurrentConfig', schema)
  })

  it('should searchSchool return School type', async () => {
    const response = await Skolengo.searchSchool({ text: 'Lycée' }, 50)

    for (const school of response) {
      expect(school).toMatchSchema('School', schema)
    }
  })
})
