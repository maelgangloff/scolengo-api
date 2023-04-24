import { describe } from 'node:test'
import { AbsenceFile, AbsenceFileIncluded } from '../../src/models/Assiduite/AbsenceFile'
import { SkolengoResponse } from '../../src/models/Global'

type ExpectedType = SkolengoResponse<AbsenceFile[], AbsenceFileIncluded>

describe('Test AbsenceFiles', () => {
  it('should be correct type', () => {
    const data: ExpectedType = {
      'data': [
        {
          'id': '0000',
          'type': 'absenceFile',
          'relationships': {
            'currentState': {
              'data': {
                'id': '0000',
                'type': 'absenceFileState'
              }
            }
          }
        },
        {
          'id': '0000',
          'type': 'absenceFile',
          'relationships': {
            'currentState': {
              'data': {
                'id': '0000',
                'type': 'absenceFileState'
              }
            }
          }
        },
        {
          'id': '0000',
          'type': 'absenceFile',
          'relationships': {
            'currentState': {
              'data': {
                'id': '0000',
                'type': 'absenceFileState'
              }
            }
          }
        },
        {
          'id': '0000',
          'type': 'absenceFile',
          'relationships': {
            'currentState': {
              'data': {
                'id': '0000',
                'type': 'absenceFileState'
              }
            }
          }
        }
      ],
      'included': [
        {
          'id': '0000',
          'type': 'absenceFileState',
          'attributes': {
            'creationDateTime': '2022-12-02T07:59:46Z',
            'absenceStartDateTime': '2022-12-01T07:00:00Z',
            'absenceEndDateTime': '2022-12-01T07:55:00Z',
            'absenceType': 'ABSENCE',
            'absenceFileStatus': 'LOCKED',
            'comment': ''
          },
          'relationships': {
            'creator': {
              'data': null
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
              'data': null
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
          'type': 'absenceFileState',
          'attributes': {
            'creationDateTime': '2022-12-13T15:48:36Z',
            'absenceStartDateTime': '2022-12-13T15:00:00Z',
            'absenceEndDateTime': '2022-12-13T15:55:00Z',
            'absenceType': 'ABSENCE',
            'absenceFileStatus': 'IN_PROGRESS',
            'comment': ''
          },
          'relationships': {
            'creator': {
              'data': null
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
          'type': 'absenceFileState',
          'attributes': {
            'creationDateTime': '2023-03-10T08:01:49Z',
            'absenceStartDateTime': '2023-03-09T12:00:00Z',
            'absenceEndDateTime': '2023-03-09T15:55:00Z',
            'absenceType': 'ABSENCE',
            'absenceFileStatus': 'LOCKED',
            'comment': ''
          },
          'relationships': {
            'creator': {
              'data': null
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
          'id': '0000',
          'type': 'absenceReason',
          'attributes': {
            'code': 'ma_remé',
            'longLabel': 'Rendez-vous médical',
            'supportedAbsenceTypes': [
              'ABSENCE',
              'DEPARTURE',
              'LATENESS'
            ]
          }
        },
        {
          'id': '0000',
          'type': 'absenceReason',
          'attributes': {
            'code': 'ma_pade',
            'longLabel': 'panne de réveil',
            'supportedAbsenceTypes': [
              'ABSENCE',
              'LATENESS'
            ]
          }
        },
        {
          'id': '0000',
          'type': 'absenceReason',
          'attributes': {
            'code': 'ma_pren_0000',
            'longLabel': 'PRISE EN CHARGE FAMILLE',
            'supportedAbsenceTypes': [
              'ABSENCE',
              'DEPARTURE'
            ]
          }
        }
      ],
      'links': {
        'first': 'http://bff-prod-ha/api/v1/bff-sko-app/absence-files?page[limit]=20&include=currentState%2CcurrentState.absenceReason%2CcurrentState.absenceRecurrence&filter[student.id]=ESKO-P-X',
        'last': 'http://bff-prod-ha/api/v1/bff-sko-app/absence-files?page[limit]=20&include=currentState%2CcurrentState.absenceReason%2CcurrentState.absenceRecurrence&filter[student.id]=ESKO-P-X'
      },
      'meta': {
        'totalResourceCount': 4
      }
    }
    expect<ExpectedType>(data).toBeDefined()
  })
})

