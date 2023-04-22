import { expectAssignable } from 'tsd'
import { SkolengoResponse } from '../src/models/Global'
import { Lesson, LessonIncluded } from '../src/models/Agenda/Lesson'

expectAssignable<SkolengoResponse<Lesson, LessonIncluded>>({
  'data': {
    'id': '000000',
    'type': 'lesson',
    'attributes': {
      'startDateTime': '2023-04-14T11:55:00Z',
      'endDateTime': '2023-04-14T12:50:00Z',
      'title': 'HISTOIRE-GEOGRAPHIE',
      'location': '208',
      'locationComplement': null,
      'canceled': false
    },
    'relationships': {
      'contents': {
        'data': [
          {
            'id': '00000',
            'type': 'lessonContent'
          }
        ]
      },
      'teachers': {
        'data': [
          {
            'id': 'PSKO-P-398b9ef2-5b41-45d7-8f38-X',
            'type': 'teacher'
          }
        ]
      },
      'subject': {
        'data': {
          'id': 'aaef3f1b75d04d179544230f53849f35',
          'type': 'subject'
        }
      },
      'toDoForTheLesson': {
        'data': []
      },
      'toDoAfterTheLesson': {
        'data': [
          {
            'id': '000',
            'type': 'homework'
          },
          {
            'id': '000',
            'type': 'homework'
          }
        ]
      }
    }
  },
  'included': [
    {
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
        'subject': {
          'data': {
            'id': 'aaef3f1b75d04d179544230f53849f35',
            'type': 'subject'
          }
        }
      }
    },
    {
      'id': '00000',
      'type': 'homework',
      'attributes': {
        'title': 'le document avec les questions',
        'html': '<html></html>',
        'dueDateTime': '2023-05-02T08:10:00Z',
        'dueDate': null,
        'done': true,
        'deliverWorkOnline': false,
        'onlineDeliveryUrl': null
      },
      'relationships': {
        'subject': {
          'data': {
            'id': 'aaef3f1b75d04d179544230f53849f35',
            'type': 'subject'
          }
        }
      }
    },
    {
      'id': '00000',
      'type': 'lessonContent',
      'attributes': {
        'html': '<html></html>',
        'title': 'Cours',
        'url': null
      },
      'relationships': {
        'attachments': {
          'data': []
        }
      }
    },
    {
      'id': 'aaef3f1b75d04d179544230f53849f35',
      'type': 'subject',
      'attributes': {
        'label': 'HISTOIRE-GEOGRAPHIE',
        'color': '#874b94'
      }
    },
    {
      'id': 'PSKO-P-398b9ef2-5b41-45d7-8f38-e02613a38da5',
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
