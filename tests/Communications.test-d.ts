import { expectAssignable } from 'tsd'
import { SkolengoResponse } from '../src/models/Globals'
import { Communication, CommunicationIncluded } from '../src/models/Messagerie/Communication'

expectAssignable<SkolengoResponse<Communication[], CommunicationIncluded>>({
  'data': [
    {
      'id': '79057022',
      'type': 'communication',
      'attributes': {
        'subject': 'ORIENTATION / avis conseil de classe',
        'participationsNumber': 1,
        'recipientsSummary': '',
        'read': true,
        'replyToAllAllowed': true,
        'replyToSenderAllowed': true,
        'readTrackingEnabled': false,
        'firstParticipationContent': null
      },
      'relationships': {
        'lastParticipation': {
          'data': {
            'id': '00000',
            'type': 'participation'
          }
        }
      }
    },
    {
      'id': '78425487',
      'type': 'communication',
      'attributes': {
        'subject': 'parcours santé des 3eme2 - jeudi 6 avril de 14h à 16h',
        'participationsNumber': 1,
        'recipientsSummary': '',
        'read': true,
        'replyToAllAllowed': true,
        'replyToSenderAllowed': true,
        'readTrackingEnabled': false,
        'firstParticipationContent': null
      },
      'relationships': {
        'lastParticipation': {
          'data': {
            'id': '103814929',
            'type': 'participation'
          }
        }
      }
    },
    {
      'id': '77212999',
      'type': 'communication',
      'attributes': {
        'subject': 'Voeux d\'orientation provisoires',
        'participationsNumber': 1,
        'recipientsSummary': '',
        'read': true,
        'replyToAllAllowed': true,
        'replyToSenderAllowed': true,
        'readTrackingEnabled': false,
        'firstParticipationContent': null
      },
      'relationships': {
        'lastParticipation': {
          'data': {
            'id': '102411984',
            'type': 'participation'
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
      'id': 'XXXX',
      'type': 'participation',
      'attributes': {
        'dateTime': '2023-02-25T13:04:08Z',
        'content': '',
        'read': false
      },
      'relationships': {
        'sender': {
          'data': {
            'id': 'XXXX-PSKO-P-X',
            'type': 'personParticipant'
          }
        }
      }
    },
    {
      'id': 'XXXX-PSKO-P-X',
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
            'id': 'PSKO-P-X',
            'type': 'teacher'
          }
        }
      }
    },
    {
      'id': 'XXXX-PSKO-P-X',
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
            'id': 'PSKO-P-X',
            'type': 'teacher'
          }
        }
      }
    },
    {
      'id': 'XXXX-NSKO-P-X',
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
            'id': 'XX-P-XX-345f-4093-9844-XXXX',
            'type': 'nonTeachingStaff'
          }
        }
      }
    },
    {
      'id': 'PSKO-P-X',
      'type': 'teacher',
      'attributes': {
        'title': 'M.',
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
      'id': 'PSKO-P-X',
      'type': 'teacher',
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
      'id': 'ENT_MESSAGERIE_10485',
      'type': 'technicalUser',
      'attributes': {
        'label': 'Cité scolaire du Val d\'argent ',
        'logoUrl': null
      }
    }
  ],
  'meta': {
    'totalResourceCount': 210
  }
})
