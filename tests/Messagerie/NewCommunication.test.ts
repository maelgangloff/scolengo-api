import { describe } from 'node:test'
import { NewCommunication } from '../../src/models/Messagerie/Communication'

type ExpectedType = NewCommunication

describe('Test NewCommunication', () => {
  it('should be correct type', () => {
    const data: ExpectedType = {
      type: 'communication',
      attributes: {
        subject: 'Sujet du nouveau fil de discussion',
        firstParticipationContent: 'Première participation'
      },
      relationships: {
        toRecipients: {
          data: [
            {
              type: 'personContact',
              id: 'ID-CONTACT'
            }
          ]
        },
        ccRecipients: {
          data: []
        },
        bccRecipients: {
          data: []
        }
      }
    }

    expect<ExpectedType>(data).toBeDefined()
  })
})

