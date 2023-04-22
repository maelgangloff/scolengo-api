import { expectAssignable } from 'tsd'
import { SkolengoResponse } from '../src/models/Globals'
import { User, UserIncluded } from '../src/models/App/User'

expectAssignable<SkolengoResponse<User, UserIncluded>>(
  {
    'data': {
      'id': 'RSKO-P-X',
      'type': 'legalRepresentativeUserInfo',
      'attributes': {
        'addressLines': [
          '1 RUE DU TEST UNITAIRE'
        ],
        'postalCode': '68160',
        'city': 'STE MARIE AUX MINES',
        'country': 'FRANCE',
        'lastName': 'DOE',
        'firstName': 'John',
        'photoUrl': null,
        'externalMail': 'johnn.doe@example.com',
        'mobilePhone': '+33 6 00 00 00 00',
        'permissions': [
          {
            'schoolId': 'SKO-E-X',
            'service': 'EVAL',
            'permittedOperations': [
              'READ_EVALUATIONS'
            ]
          },
          {
            'schoolId': 'SKO-E-X',
            'service': 'CDT',
            'permittedOperations': [
              'READ_LESSONS'
            ]
          },
          {
            'schoolId': 'SKO-E-X',
            'service': 'TAF',
            'permittedOperations': [
              'READ_HOMEWORK_ASSIGNMENTS'
            ]
          },
          {
            'schoolId': 'SKO-E-X',
            'service': 'ABS',
            'permittedOperations': [
              'READ_ABSENCE_FILES',
              'READ_ABSENCE_FILES_DETAILS',
              'COMPLETE_ABSENCE_FILES'
            ]
          },
          {
            'schoolId': 'SKO-E-X',
            'service': 'MSG',
            'permittedOperations': [
              'READ_MESSAGES',
              'WRITE_MESSAGES'
            ]
          }
        ]
      },
      'relationships': {
        'students': {
          'data': [
            {
              'id': 'ESKO-P-X',
              'type': 'student'
            }
          ]
        }
      }
    },
    'included': [
      {
        'id': 'SKO-E-X',
        'type': 'school',
        'attributes': {
          'name': 'Collège Jean Georges Reber',
          'timeZone': 'Europe/Paris',
          'subscribedServices': [
            'MSG',
            'CDT',
            'ABS',
            'SKOAPP',
            'ART',
            'TAF',
            'EVAL',
            'COMC'
          ]
        }
      },
      {
        'id': 'RSKO-P-X',
        'type': 'student',
        'attributes': {
          'lastName': 'DOE',
          'firstName': 'John Junior',
          'photoUrl': null,
          'className': '3EME0',
          'dateOfBirth': '2000-01-01',
          'regime': 'EXTERNE LIBRE'
        },
        'relationships': {
          'school': {
            'data': {
              'id': 'SKO-E-X',
              'type': 'school'
            }
          }
        }
      }
    ]
  }
)
