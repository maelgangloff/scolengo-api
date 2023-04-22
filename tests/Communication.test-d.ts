import { expectAssignable } from 'tsd'
import { SkolengoResponse } from '../src/models/Globals'
import { Participation, ParticipationIncluded } from '../src/models/Messagerie/Participation'

expectAssignable<SkolengoResponse<Participation[], ParticipationIncluded>>({
  'data': [
    {
      'id': 'X',
      'type': 'participation',
      'attributes': {
        'dateTime': '2023-04-02T14:39:56Z',
        'content': 'HTML',
        'read': true
      },
      'relationships': {
        'attachments': {
          'data': []
        },
        'sender': {
          'data': {
            'id': 'XXXX-NSKO-P-X',
            'type': 'personParticipant'
          }
        }
      }
    }
  ],
  'included': [
    {
      'id': 'NSKO-P-X',
      'type': 'nonTeachingStaff',
      'attributes': {
        'title': 'Mme',
        'lastName': 'X',
        'firstName': 'X',
        'photoUrl': null
      },
      'relationships': {
        'school': {
          'data': null
        }
      }
    },
    {
      'id': 'X-NSKO-P-X',
      'type': 'personParticipant',
      'attributes': {
        'category': 'INITIATOR',
        'additionalInfo': null,
        'fromGroup': false
      },
      'relationships': {
        'technicalUser': {
          'data': null
        },
        'person': {
          'data': {
            'id': 'NSKO-P-X',
            'type': 'nonTeachingStaff'
          }
        }
      }
    }
  ]
})
