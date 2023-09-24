import { describe } from 'node:test'
import { User } from '../../src/models/Common/User'

type ExpectedType = User

describe('Test User', () => {
  it('should be correct type', () => {
    const data: ExpectedType = {
      id: 'RSKO-P-X',
      addressLines: ['1 RUE DU TEST UNITAIRE'],
      postalCode: '68160',
      city: 'STE MARIE AUX MINES',
      country: 'FRANCE',
      lastName: 'DOE',
      firstName: 'John',
      photoUrl: null,
      externalMail: 'johnn.doe@example.com',
      mobilePhone: '+33 6 00 00 00 00',
      permissions: [
        {
          schoolId: 'SKO-E-X',
          service: 'EVAL',
          permittedOperations: ['READ_EVALUATIONS']
        },
        {
          schoolId: 'SKO-E-X',
          service: 'CDT',
          permittedOperations: ['READ_LESSONS']
        },
        {
          schoolId: 'SKO-E-X',
          service: 'TAF',
          permittedOperations: ['READ_HOMEWORK_ASSIGNMENTS']
        },
        {
          schoolId: 'SKO-E-X',
          service: 'ABS',
          permittedOperations: [
            'READ_ABSENCE_FILES',
            'READ_ABSENCE_FILES_DETAILS',
            'COMPLETE_ABSENCE_FILES'
          ]
        },
        {
          schoolId: 'SKO-E-X',
          service: 'MSG',
          permittedOperations: ['READ_MESSAGES', 'WRITE_MESSAGES']
        }
      ],
      students: [
        {
          id: 'ESKO-P-X',
          lastName: 'DOE',
          firstName: 'John Junior',
          photoUrl: null,
          className: '3EME0',
          dateOfBirth: '2000-01-01',
          regime: 'EXTERNE LIBRE'
        }
      ]
    }
    expect<ExpectedType>(data).toBeDefined()
  })
})
