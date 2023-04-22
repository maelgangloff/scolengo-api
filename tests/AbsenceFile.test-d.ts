import { expectAssignable } from 'tsd'
import { SkolengoResponse } from '../src/models/Globals'
import { AbsenceFile, AbsenceFileIncluded } from '../src/models/Assiduite/AbsenceFile'

expectAssignable<SkolengoResponse<AbsenceFile, AbsenceFileIncluded>>({
  'data': {
    'id': '0000',
    'type': 'absenceFile',
    'relationships': {
      'history': {
        'data': [
          {
            'id': '0000',
            'type': 'absenceFileState'
          },
          {
            'id': '0000',
            'type': 'absenceFileState'
          },
          {
            'id': '0000',
            'type': 'absenceFileState'
          },
          {
            'id': '0000',
            'type': 'absenceFileState'
          }
        ]
      },
      'currentState': {
        'data': {
          'id': '0000',
          'type': 'absenceFileState'
        }
      }
    }
  },
  'included': [
    {
      'id': '0000',
      'type': 'absenceFileState',
      'attributes': {
        'creationDateTime': '2022-12-13T10:14:17Z',
        'absenceStartDateTime': '2022-12-13T10:05:00Z',
        'absenceEndDateTime': '2022-12-13T11:00:00Z',
        'absenceType': 'ABSENCE',
        'absenceFileStatus': 'NEW',
        'comment': ''
      },
      'relationships': {
        'creator': {
          'data': {
            'id': 'PKO-P-X',
            'type': 'teacher'
          }
        },
        'absenceReason': {
          'data': null
        },
        'absenceRecurrence': {
          'data': null
        },
        'absenceFile': {
          'data': {
            'id': '0000',
            'type': 'absenceFile'
          }
        }
      }
    },
    {
      'id': '0000',
      'type': 'absenceFileState',
      'attributes': {
        'creationDateTime': '2022-12-13T10:20:08Z',
        'absenceStartDateTime': '2022-12-13T10:05:00Z',
        'absenceEndDateTime': '2022-12-13T11:00:00Z',
        'absenceType': 'ABSENCE',
        'absenceFileStatus': 'IN_PROGRESS',
        'comment': ''
      },
      'relationships': {
        'creator': {
          'data': {
            'id': 'NKO-P-X',
            'type': 'nonTeachingStaff'
          }
        },
        'absenceReason': {
          'data': null
        },
        'absenceRecurrence': {
          'data': null
        },
        'absenceFile': {
          'data': {
            'id': '0000',
            'type': 'absenceFile'
          }
        }
      }
    },
    {
      'id': '0000',
      'type': 'absenceFileState',
      'attributes': {
        'creationDateTime': '2022-12-13T13:05:41Z',
        'absenceStartDateTime': '2022-12-13T12:55:00Z',
        'absenceEndDateTime': '2022-12-13T13:50:00Z',
        'absenceType': 'ABSENCE',
        'absenceFileStatus': 'NEW',
        'comment': ''
      },
      'relationships': {
        'creator': {
          'data': {
            'id': 'PKO-P-X',
            'type': 'teacher'
          }
        },
        'absenceReason': {
          'data': null
        },
        'absenceRecurrence': {
          'data': null
        },
        'absenceFile': {
          'data': {
            'id': '0000',
            'type': 'absenceFile'
          }
        }
      }
    },
    {
      'id': '0000',
      'type': 'absenceFileState',
      'attributes': {
        'creationDateTime': '2022-12-13T13:05:41Z',
        'absenceStartDateTime': '2022-12-13T10:05:00Z',
        'absenceEndDateTime': '2022-12-13T13:50:00Z',
        'absenceType': 'ABSENCE',
        'absenceFileStatus': 'LOCKED',
        'comment': 'Regroupement automatique des dossiers <ul><li>Absence du 13/12/22 à 11:05 au 13/12/22 à 12:00 - Justifié (motif « Evacuation infirmerie »)</li><li>Absence du 13/12/22 à 13:55 au 13/12/22 à 14:50 - Non justifié (motif « Aucun motif »)</li></ul>'
      },
      'relationships': {
        'creator': {
          'data': {
            'id': 'PKO-P-X',
            'type': 'teacher'
          }
        },
        'absenceReason': {
          'data': {
            'id': '0000',
            'type': 'absenceReason'
          }
        },
        'absenceRecurrence': {
          'data': null
        },
        'absenceFile': {
          'data': {
            'id': '0000',
            'type': 'absenceFile'
          }
        }
      }
    },
    {
      'id': '0000',
      'type': 'absenceReason',
      'attributes': {
        'code': 'ma_evin',
        'longLabel': 'Evacuation infirmerie',
        'supportedAbsenceTypes': [
          'ABSENCE'
        ]
      }
    },
    {
      'id': 'NKO-P-X',
      'type': 'nonTeachingStaff',
      'attributes': {
        'title': 'Mme',
        'firstName': 'X-X',
        'lastName': 'X',
        'photoUrl': null
      }
    },
    {
      'id': 'PKO-P-X',
      'type': 'teacher',
      'attributes': {
        'title': 'M.',
        'firstName': 'X',
        'lastName': 'X',
        'photoUrl': null
      }
    },
    {
      'id': 'PKO-P-X',
      'type': 'teacher',
      'attributes': {
        'title': 'Mme',
        'firstName': 'X',
        'lastName': 'X',
        'photoUrl': null
      }
    }
  ]
})
