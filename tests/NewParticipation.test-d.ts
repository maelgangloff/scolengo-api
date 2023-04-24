import { expectAssignable } from 'tsd'
import { SkolengoResponse } from '../src/models/Global'
import { NewParticipation } from '../src/models/Messagerie/Participation'

expectAssignable<SkolengoResponse<NewParticipation>>({
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
})
