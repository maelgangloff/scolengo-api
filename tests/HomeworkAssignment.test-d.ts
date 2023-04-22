import { expectAssignable } from 'tsd'
import { SkolengoResponse } from '../src/models/Global'
import { HomeworkAssignment, HomeworkAssignmentIncluded } from '../src/models/Homework/HomeworkAssignment'

expectAssignable<SkolengoResponse<HomeworkAssignment, HomeworkAssignmentIncluded>>({
  'data': {
    'id': '128500',
    'type': 'homework',
    'attributes': {
      'title': 'Exercices',
      'html': '<html></html>',
      'dueDateTime': '2023-05-02T08:10:00Z',
      'dueDate': null,
      'done': true,
      'deliverWorkOnline': false,
      'onlineDeliveryUrl': null
    },
    'relationships': {
      'teacher': {
        'data': {
          'id': 'PSKO-P-398b9ef2-5b41-45d7-8f38-e02613a38da5',
          'type': 'teacher'
        },
      },
      'attachments': {
        'data': []
      },
      'commonCorrectedWork': {
        'data': null
      },
      'subject': {
        'data': {
          'id': 'aaef3f1b75d04d179544230f53849f35',
          'type': 'subject'
        }
      },
      'audio': {
        'data': null
      },
      'pedagogicContent': {
        'data': null
      },
      'individualCorrectedWork': {
        'data': null
      }
    }
  },
  'included': [
    {
      'id': 'aaef3f1b75d04d179544230f53849f35',
      'type': 'subject',
      'attributes': {
        'label': 'HISTOIRE-GEOGRAPHIE',
        'color': '#874b94'
      }
    },
    {
      'id': 'PSKO-P-398b9ef2-5b41-45d7-8f38-X',
      'type': 'teacher',
      'attributes': {
        'title': 'M.',
        'firstName': 'X',
        'lastName': 'X',
        'photoUrl': null
      }
    }
  ]
})
