import { expectAssignable } from 'tsd'
import { SkolengoResponse } from '../src/models/Globals'
import { EvaluationDetail, EvaluationDetailIncluded } from '../src/models/Evaluation/EvaluationDetail'

expectAssignable<SkolengoResponse<EvaluationDetail, EvaluationDetailIncluded>>({
    'data': {
      'id': '25518',
      'type': 'evaluation',
      'attributes': {
        'title': null,
        'topic': null,
        'dateTime': null,
        'coefficient': 1,
        'min': null,
        'max': null,
        'average': null,
        'scale': null
      },
      'relationships': {
        'subSkills': {
          'data': []
        },
        'subSubject': {
          'data': null
        },
        'evaluationService': {
          'data': {
            'id': '5074',
            'type': 'evaluationService'
          }
        },
        'evaluationResult': {
          'data': {
            'id': '433302',
            'type': 'evaluationResult'
          }
        }
      }
    },
    'included': [
      {
        'id': '433302',
        'type': 'evaluationResult',
        'attributes': {
          'mark': 17,
          'nonEvaluationReason': null,
          'comment': null
        },
        'relationships': {
          'subSkillsEvaluationResults': {
            'data': []
          }
        }
      },
      {
        'id': '5074',
        'type': 'evaluationService',
        'attributes': {
          'coefficient': null,
          'average': null,
          'scale': 20,
          'studentAverage': null
        },
        'relationships': {
          'subject': {
            'data': {
              'id': 'bcebb7c93cae48d089e52d12cada31e8',
              'type': 'subject'
            }
          },
          'teachers': {
            'data': [
              {
                'id': 'PSKO-P-b07a8c48-d909-44e4-aaf3-X',
                'type': 'teacher'
              }
            ]
          }
        }
      },
      {
        'id': 'bcebb7c93cae48d089e52d12cada31e8',
        'type': 'subject',
        'attributes': {
          'label': 'ALLEMAND LV2',
          'color': 'ff0000'
        }
      },
      {
        'id': 'PSKO-P-b07a8c48-d909-44e4-aaf3-X',
        'type': 'teacher',
        'attributes': {
          'title': 'Mme',
          'firstName': 'X',
          'lastName': 'X',
          'photoUrl': null
        }
      }
    ]
  }
)
