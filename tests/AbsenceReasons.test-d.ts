import { expectAssignable } from 'tsd'
import { SkolengoResponse } from '../src/models/Globals'
import { AbsenceReason } from '../src/models/Assiduite/AbsenceReasons'

expectAssignable<SkolengoResponse<AbsenceReason[]>>({
  'data': [
    {
      'id': '1',
      'type': 'absenceReason',
      'attributes': {
        'code': 'ma_aucun',
        'longLabel': 'Aucun motif',
        'supportedAbsenceTypes': [
          'ABSENCE',
          'DEPARTURE',
          'EXEMPTION',
          'LATENESS'
        ]
      }
    },
    {
      'id': '3',
      'type': 'absenceReason',
      'attributes': {
        'code': 'ma_rdv_ext',
        'longLabel': 'Rendez-vous extérieur',
        'supportedAbsenceTypes': [
          'ABSENCE',
          'DEPARTURE',
          'LATENESS'
        ]
      }
    },
    {
      'id': '4',
      'type': 'absenceReason',
      'attributes': {
        'code': 'ma_perso',
        'longLabel': 'Convenance personnelle',
        'supportedAbsenceTypes': [
          'ABSENCE',
          'DEPARTURE',
          'EXEMPTION',
          'LATENESS'
        ]
      }
    },
    {
      'id': '5',
      'type': 'absenceReason',
      'attributes': {
        'code': 'ma_famille',
        'longLabel': 'Raisons familiales',
        'supportedAbsenceTypes': [
          'ABSENCE',
          'DEPARTURE',
          'LATENESS'
        ]
      }
    },
    {
      'id': '69',
      'type': 'absenceReason',
      'attributes': {
        'code': 'ma_pede',
        'longLabel': 'Permis de conduire, code, leçon de conduite',
        'supportedAbsenceTypes': [
          'ABSENCE',
          'DEPARTURE',
          'LATENESS'
        ]
      }
    },
    {
      'id': '7',
      'type': 'absenceReason',
      'attributes': {
        'code': 'ma_transp',
        'longLabel': 'Problèmes de transport',
        'supportedAbsenceTypes': [
          'ABSENCE',
          'DEPARTURE',
          'LATENESS'
        ]
      }
    },
    {
      'id': '8',
      'type': 'absenceReason',
      'attributes': {
        'code': 'ma_temps',
        'longLabel': 'Problèmes d\'emploi du temps',
        'supportedAbsenceTypes': [
          'ABSENCE',
          'DEPARTURE',
          'LATENESS'
        ]
      }
    },
    {
      'id': '11',
      'type': 'absenceReason',
      'attributes': {
        'code': 'ma_ecbu',
        'longLabel': 'Ecole buissonière',
        'supportedAbsenceTypes': [
          'ABSENCE',
          'DEPARTURE',
          'EXEMPTION'
        ]
      }
    },
    {
      'id': '75',
      'type': 'absenceReason',
      'attributes': {
        'code': 'ma_amd\'',
        'longLabel': 'Aménagement d\'emploi du temps',
        'supportedAbsenceTypes': [
          'ABSENCE'
        ]
      }
    },
    {
      'id': '81',
      'type': 'absenceReason',
      'attributes': {
        'code': 'ma_snu',
        'longLabel': 'SNU',
        'supportedAbsenceTypes': [
          'ABSENCE'
        ]
      }
    },
    {
      'id': '82',
      'type': 'absenceReason',
      'attributes': {
        'code': 'ma_maex',
        'longLabel': 'Maladie ',
        'supportedAbsenceTypes': [
          'ABSENCE',
          'DEPARTURE',
          'LATENESS'
        ]
      }
    },
    {
      'id': '83',
      'type': 'absenceReason',
      'attributes': {
        'code': 'ma_exde',
        'longLabel': 'Exclusion de cours',
        'supportedAbsenceTypes': [
          'ABSENCE'
        ]
      }
    },
    {
      'id': '84',
      'type': 'absenceReason',
      'attributes': {
        'code': 'ma_expa_1',
        'longLabel': 'EXCUSE PAR MESSAGE MBN',
        'supportedAbsenceTypes': [
          'ABSENCE'
        ]
      }
    },
    {
      'id': '21',
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
      'id': '85',
      'type': 'absenceReason',
      'attributes': {
        'code': 'ma_expa_2',
        'longLabel': 'EXCUSE PAR MAIL',
        'supportedAbsenceTypes': [
          'ABSENCE'
        ]
      }
    },
    {
      'id': '87',
      'type': 'absenceReason',
      'attributes': {
        'code': 'ma_cemé',
        'longLabel': 'Certificat médical',
        'supportedAbsenceTypes': [
          'ABSENCE',
          'EXEMPTION'
        ]
      }
    },
    {
      'id': '24',
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
      'id': '88',
      'type': 'absenceReason',
      'attributes': {
        'code': 'ma_emdu',
        'longLabel': 'Emploi du temps aménagé',
        'supportedAbsenceTypes': [
          'ABSENCE',
          'EXEMPTION'
        ]
      }
    },
    {
      'id': '26',
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
      'id': '90',
      'type': 'absenceReason',
      'attributes': {
        'code': 'ma_covi',
        'longLabel': 'COVID',
        'supportedAbsenceTypes': [
          'ABSENCE',
          'DEPARTURE'
        ]
      }
    }
  ],
  'links': {
    'first': 'http://bff-prod-ha/api/v1/bff-sko-app/absence-reasons?page[limit]=20',
    'last': 'http://bff-prod-ha/api/v1/bff-sko-app/absence-reasons?page[limit]=20'
  },
  'meta': {
    'totalResourceCount': 20
  }
})
