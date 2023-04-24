import { describe } from 'node:test'
import { SkolengoResponse } from '../../src/models/Global'
import { NewParticipation } from '../../src/models/Messagerie/Participation'

type ExpectedType = SkolengoResponse<NewParticipation>

describe('Test NewParticipation', () => {
  it('should be correct type', () => {
    const data: ExpectedType = {
      data: {
        type: 'participation',
        attributes: {
          content:
            'Ok test réponse  <div style=\'padding-top: 5px;\'> <div><br>--<br />\r\nJohn DOE-PANPAN<br />\r\nÉlève</div></div>',
        },
        relationships: {
          communication: {
            data: {
              type: 'communication',
              id: '1234567'
            }
          },
        },
      },
    }

    expect<ExpectedType>(data).toBeDefined()
  })
})

