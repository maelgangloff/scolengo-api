import { describe } from 'node:test'
import { SkolengoResponse } from '../../src/models/Global'
import { Participation } from '../../src/models/Messagerie/Participation'

type ExpectedType = SkolengoResponse<Participation>

describe('Test Participation', () => {
  it('should be correct type', () => {
    const data: ExpectedType = {
      data: {
        id: '3625209',
        type: 'participation',
        attributes: {
          dateTime: '2023-04-24T18:46:46.674Z',
          content:
            '<html>\n <head></head>\n <body>   Ok test réponse \n  <div style="padding-top:5px"> \n   <div> \n    <br>-- \n    <br> John DOE-PANPAN \n    <br> Élève \n   </div> \n  </div>  \n </body>\n</html>',
          read: true,
        },
        relationships: {
          communication: {
            data: {
              id: '2482320',
              type: 'communication',
            },
          },
        },
      },
    }

    expect<ExpectedType>(data).toBeDefined()
  })
})

