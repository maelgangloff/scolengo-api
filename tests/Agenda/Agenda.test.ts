import { describe } from 'node:test'
import { Agenda } from '../../src/models/Agenda/Agenda'

type ExpectedType = Agenda[]

describe('Test Agenda', () => {
  it('should be correct type', () => {
    const data: ExpectedType = [
      {
        'id': 'ESKO-P-X',
        'date': '2023-05-01',
        'lessons': [],
        'homeworkAssignments': []
      },
      {
        'id': 'ESKO-P-X',
        'date': '2023-05-02',
        'lessons': [
          {
            'id': '00000',
            'startDateTime': '2023-05-04T06:00:00Z',
            'endDateTime': '2023-05-04T06:55:00Z',
            'title': 'LATIN',
            'location': '00000',
            'locationComplement': null,
            'canceled': true,
            'teachers': [
              {
                'id': 'PSKO-P-X',
                'title': 'M.',
                'firstName': 'X',
                'lastName': 'X',
                'photoUrl': null
              }
            ],
            'subject': {
              'id': 'fcd026e0b2f74ac49781cbdae56dcc33',
              'label': 'LATIN',
              'color': '#d7ffff'
            }
          },
          {
            'id': '00000',
            'startDateTime': '2023-05-04T06:00:00Z',
            'endDateTime': '2023-05-04T06:55:00Z',
            'title': 'LATIN',
            'location': '00000',
            'locationComplement': null,
            'canceled': true,
            'teachers': [
              {
                'id': 'PSKO-P-X',
                'title': 'M.',
                'firstName': 'X',
                'lastName': 'X',
                'photoUrl': null
              }
            ],
            'subject': {
              'id': 'fcd026e0b2f74ac49781cbdae56dcc33',
              'label': 'LATIN',
              'color': '#d7ffff'
            }
          },
          {
            'id': '00000',
            'startDateTime': '2023-05-04T06:00:00Z',
            'endDateTime': '2023-05-04T06:55:00Z',
            'title': 'LATIN',
            'location': '00000',
            'locationComplement': null,
            'canceled': true,
            'teachers': [
              {
                'id': 'PSKO-P-X',
                'title': 'M.',
                'firstName': 'X',
                'lastName': 'X',
                'photoUrl': null
              }
            ],
            'subject': {
              'id': 'fcd026e0b2f74ac49781cbdae56dcc33',
              'label': 'LATIN',
              'color': '#d7ffff'
            }
          },
          {
            'id': '00000',
            'startDateTime': '2023-05-04T06:00:00Z',
            'endDateTime': '2023-05-04T06:55:00Z',
            'title': 'LATIN',
            'location': '00000',
            'locationComplement': null,
            'canceled': true,
            'teachers': [
              {
                'id': 'PSKO-P-X',
                'title': 'M.',
                'firstName': 'X',
                'lastName': 'X',
                'photoUrl': null
              }
            ],
            'subject': {
              'id': 'fcd026e0b2f74ac49781cbdae56dcc33',
              'label': 'LATIN',
              'color': '#d7ffff'
            }
          },
          {
            'id': '00000',
            'startDateTime': '2023-05-04T06:00:00Z',
            'endDateTime': '2023-05-04T06:55:00Z',
            'title': 'LATIN',
            'location': '00000',
            'locationComplement': null,
            'canceled': true,
            'teachers': [
              {
                'id': 'PSKO-P-X',
                'title': 'M.',
                'firstName': 'X',
                'lastName': 'X',
                'photoUrl': null
              }
            ],
            'subject': {
              'id': 'fcd026e0b2f74ac49781cbdae56dcc33',
              'label': 'LATIN',
              'color': '#d7ffff'
            }
          },
          {
            'id': '00000',
            'startDateTime': '2023-05-04T06:00:00Z',
            'endDateTime': '2023-05-04T06:55:00Z',
            'title': 'LATIN',
            'location': '00000',
            'locationComplement': null,
            'canceled': true,
            'teachers': [
              {
                'id': 'PSKO-P-X',
                'title': 'M.',
                'firstName': 'X',
                'lastName': 'X',
                'photoUrl': null
              }
            ],
            'subject': {
              'id': 'fcd026e0b2f74ac49781cbdae56dcc33',
              'label': 'LATIN',
              'color': '#d7ffff'
            }
          }
        ],
        'homeworkAssignments': [
          {
            'id': '00000',
            'title': 'Chapitre 8 (8.0 8.1 8.2) Electricité',
            'html': '<html></html>',
            'dueDateTime': '2023-05-03T06:00:00Z',
            'dueDate': null,
            'done': false,
            'deliverWorkOnline': false,
            'onlineDeliveryUrl': null,
            'subject': {
              'id': '3ce9205e72b448aaa4bfe1cc51e73593',
              'label': 'PHYSIQUE-CHIMIE',
              'color': '#008000'
            }
          },
          {
            'id': '00000',
            'title': 'Chapitre 8 (8.0 8.1 8.2) Electricité',
            'html': '<html></html>',
            'dueDateTime': '2023-05-03T06:00:00Z',
            'dueDate': null,
            'done': false,
            'deliverWorkOnline': false,
            'onlineDeliveryUrl': null,
            'subject': {
              'id': '3ce9205e72b448aaa4bfe1cc51e73593',
              'label': 'PHYSIQUE-CHIMIE',
              'color': '#008000'
            }
          }
        ]
      },
      {
        'id': 'ESKO-P-X',
        'date': '2023-05-03',
        'lessons': [
          {
            'id': '00000',
            'startDateTime': '2023-05-04T06:00:00Z',
            'endDateTime': '2023-05-04T06:55:00Z',
            'title': 'LATIN',
            'location': '00000',
            'locationComplement': null,
            'canceled': true,
            'teachers': [
              {
                'id': 'PSKO-P-X',
                'title': 'M.',
                'firstName': 'X',
                'lastName': 'X',
                'photoUrl': null
              }
            ],
            'subject': {
              'id': 'fcd026e0b2f74ac49781cbdae56dcc33',
              'label': 'LATIN',
              'color': '#d7ffff'
            }
          },
          {
            'id': '00000',
            'startDateTime': '2023-05-04T06:00:00Z',
            'endDateTime': '2023-05-04T06:55:00Z',
            'title': 'LATIN',
            'location': '00000',
            'locationComplement': null,
            'canceled': true,
            'teachers': [
              {
                'id': 'PSKO-P-X',
                'title': 'M.',
                'firstName': 'X',
                'lastName': 'X',
                'photoUrl': null
              }
            ],
            'subject': {
              'id': 'fcd026e0b2f74ac49781cbdae56dcc33',
              'label': 'LATIN',
              'color': '#d7ffff'
            }
          },
          {
            'id': '00000',
            'startDateTime': '2023-05-04T06:00:00Z',
            'endDateTime': '2023-05-04T06:55:00Z',
            'title': 'LATIN',
            'location': '00000',
            'locationComplement': null,
            'canceled': true,
            'teachers': [
              {
                'id': 'PSKO-P-X',
                'title': 'M.',
                'firstName': 'X',
                'lastName': 'X',
                'photoUrl': null
              }
            ],
            'subject': {
              'id': 'fcd026e0b2f74ac49781cbdae56dcc33',
              'label': 'LATIN',
              'color': '#d7ffff'
            }
          },
          {
            'id': '00000',
            'startDateTime': '2023-05-04T06:00:00Z',
            'endDateTime': '2023-05-04T06:55:00Z',
            'title': 'LATIN',
            'location': '00000',
            'locationComplement': null,
            'canceled': true,
            'teachers': [
              {
                'id': 'PSKO-P-X',
                'title': 'M.',
                'firstName': 'X',
                'lastName': 'X',
                'photoUrl': null
              }
            ],
            'subject': {
              'id': 'fcd026e0b2f74ac49781cbdae56dcc33',
              'label': 'LATIN',
              'color': '#d7ffff'
            }
          }
        ],
        'homeworkAssignments': [
          {
            'id': '00000',
            'title': 'Chapitre 8 (8.0 8.1 8.2) Electricité',
            'html': '<html></html>',
            'dueDateTime': '2023-05-03T06:00:00Z',
            'dueDate': null,
            'done': false,
            'deliverWorkOnline': false,
            'onlineDeliveryUrl': null,
            'subject': {
              'id': '3ce9205e72b448aaa4bfe1cc51e73593',
              'label': 'PHYSIQUE-CHIMIE',
              'color': '#008000'
            }
          },
          {
            'id': '00000',
            'title': 'Chapitre 8 (8.0 8.1 8.2) Electricité',
            'html': '<html></html>',
            'dueDateTime': '2023-05-03T06:00:00Z',
            'dueDate': null,
            'done': false,
            'deliverWorkOnline': false,
            'onlineDeliveryUrl': null,
            'subject': {
              'id': '3ce9205e72b448aaa4bfe1cc51e73593',
              'label': 'PHYSIQUE-CHIMIE',
              'color': '#008000'
            }
          },
          {
            'id': '00000',
            'title': 'Chapitre 8 (8.0 8.1 8.2) Electricité',
            'html': '<html></html>',
            'dueDateTime': '2023-05-03T06:00:00Z',
            'dueDate': null,
            'done': false,
            'deliverWorkOnline': false,
            'onlineDeliveryUrl': null,
            'subject': {
              'id': '3ce9205e72b448aaa4bfe1cc51e73593',
              'label': 'PHYSIQUE-CHIMIE',
              'color': '#008000'
            }
          },
          {
            'id': '00000',
            'title': 'Chapitre 8 (8.0 8.1 8.2) Electricité',
            'html': '<html></html>',
            'dueDateTime': '2023-05-03T06:00:00Z',
            'dueDate': null,
            'done': false,
            'deliverWorkOnline': false,
            'onlineDeliveryUrl': null,
            'subject': {
              'id': '3ce9205e72b448aaa4bfe1cc51e73593',
              'label': 'PHYSIQUE-CHIMIE',
              'color': '#008000'
            }
          }
        ]
      },
      {
        'id': 'ESKO-P-X',
        'date': '2023-05-04',
        'lessons': [
          {
            'id': '00000',
            'startDateTime': '2023-05-04T06:00:00Z',
            'endDateTime': '2023-05-04T06:55:00Z',
            'title': 'LATIN',
            'location': '00000',
            'locationComplement': null,
            'canceled': true,
            'teachers': [
              {
                'id': 'PSKO-P-X',
                'title': 'M.',
                'firstName': 'X',
                'lastName': 'X',
                'photoUrl': null
              }
            ],
            'subject': {
              'id': 'fcd026e0b2f74ac49781cbdae56dcc33',
              'label': 'LATIN',
              'color': '#d7ffff'
            }
          },
          {
            'id': '00000',
            'startDateTime': '2023-05-04T06:00:00Z',
            'endDateTime': '2023-05-04T06:55:00Z',
            'title': 'LATIN',
            'location': '00000',
            'locationComplement': null,
            'canceled': true,
            'teachers': [
              {
                'id': 'PSKO-P-X',
                'title': 'M.',
                'firstName': 'X',
                'lastName': 'X',
                'photoUrl': null
              }
            ],
            'subject': {
              'id': 'fcd026e0b2f74ac49781cbdae56dcc33',
              'label': 'LATIN',
              'color': '#d7ffff'
            }
          },
          {
            'id': '00000',
            'startDateTime': '2023-05-04T06:00:00Z',
            'endDateTime': '2023-05-04T06:55:00Z',
            'title': 'LATIN',
            'location': '00000',
            'locationComplement': null,
            'canceled': true,
            'teachers': [
              {
                'id': 'PSKO-P-X',
                'title': 'M.',
                'firstName': 'X',
                'lastName': 'X',
                'photoUrl': null
              }
            ],
            'subject': {
              'id': 'fcd026e0b2f74ac49781cbdae56dcc33',
              'label': 'LATIN',
              'color': '#d7ffff'
            }
          },
          {
            'id': '00000',
            'startDateTime': '2023-05-04T06:00:00Z',
            'endDateTime': '2023-05-04T06:55:00Z',
            'title': 'LATIN',
            'location': '00000',
            'locationComplement': null,
            'canceled': true,
            'teachers': [
              {
                'id': 'PSKO-P-X',
                'title': 'M.',
                'firstName': 'X',
                'lastName': 'X',
                'photoUrl': null
              }
            ],
            'subject': {
              'id': 'fcd026e0b2f74ac49781cbdae56dcc33',
              'label': 'LATIN',
              'color': '#d7ffff'
            }
          },
          {
            'id': '00000',
            'startDateTime': '2023-05-04T06:00:00Z',
            'endDateTime': '2023-05-04T06:55:00Z',
            'title': 'LATIN',
            'location': '00000',
            'locationComplement': null,
            'canceled': true,
            'teachers': [
              {
                'id': 'PSKO-P-X',
                'title': 'M.',
                'firstName': 'X',
                'lastName': 'X',
                'photoUrl': null
              }
            ],
            'subject': {
              'id': 'fcd026e0b2f74ac49781cbdae56dcc33',
              'label': 'LATIN',
              'color': '#d7ffff'
            }
          },
          {
            'id': '00000',
            'startDateTime': '2023-05-04T06:00:00Z',
            'endDateTime': '2023-05-04T06:55:00Z',
            'title': 'LATIN',
            'location': '00000',
            'locationComplement': null,
            'canceled': true,
            'teachers': [
              {
                'id': 'PSKO-P-X',
                'title': 'M.',
                'firstName': 'X',
                'lastName': 'X',
                'photoUrl': null
              }
            ],
            'subject': {
              'id': 'fcd026e0b2f74ac49781cbdae56dcc33',
              'label': 'LATIN',
              'color': '#d7ffff'
            }
          },
          {
            'id': '00000',
            'startDateTime': '2023-05-04T06:00:00Z',
            'endDateTime': '2023-05-04T06:55:00Z',
            'title': 'LATIN',
            'location': '00000',
            'locationComplement': null,
            'canceled': true,
            'teachers': [
              {
                'id': 'PSKO-P-X',
                'title': 'M.',
                'firstName': 'X',
                'lastName': 'X',
                'photoUrl': null
              }
            ],
            'subject': {
              'id': 'fcd026e0b2f74ac49781cbdae56dcc33',
              'label': 'LATIN',
              'color': '#d7ffff'
            }
          }
        ],
        'homeworkAssignments': []
      },
      {
        'id': 'ESKO-P-X',
        'date': '2023-05-05',
        'lessons': [
          {
            'id': '00000',
            'startDateTime': '2023-05-04T06:00:00Z',
            'endDateTime': '2023-05-04T06:55:00Z',
            'title': 'LATIN',
            'location': '00000',
            'locationComplement': null,
            'canceled': true,
            'teachers': [
              {
                'id': 'PSKO-P-X',
                'title': 'M.',
                'firstName': 'X',
                'lastName': 'X',
                'photoUrl': null
              }
            ],
            'subject': {
              'id': 'fcd026e0b2f74ac49781cbdae56dcc33',
              'label': 'LATIN',
              'color': '#d7ffff'
            }
          },
          {
            'id': '00000',
            'startDateTime': '2023-05-04T06:00:00Z',
            'endDateTime': '2023-05-04T06:55:00Z',
            'title': 'LATIN',
            'location': '00000',
            'locationComplement': null,
            'canceled': true,
            'teachers': [
              {
                'id': 'PSKO-P-X',
                'title': 'M.',
                'firstName': 'X',
                'lastName': 'X',
                'photoUrl': null
              }
            ],
            'subject': {
              'id': 'fcd026e0b2f74ac49781cbdae56dcc33',
              'label': 'LATIN',
              'color': '#d7ffff'
            }
          },
          {
            'id': '00000',
            'startDateTime': '2023-05-04T06:00:00Z',
            'endDateTime': '2023-05-04T06:55:00Z',
            'title': 'LATIN',
            'location': '00000',
            'locationComplement': null,
            'canceled': true,
            'teachers': [
              {
                'id': 'PSKO-P-X',
                'title': 'M.',
                'firstName': 'X',
                'lastName': 'X',
                'photoUrl': null
              }
            ],
            'subject': {
              'id': 'fcd026e0b2f74ac49781cbdae56dcc33',
              'label': 'LATIN',
              'color': '#d7ffff'
            }
          },
          {
            'id': '00000',
            'startDateTime': '2023-05-04T06:00:00Z',
            'endDateTime': '2023-05-04T06:55:00Z',
            'title': 'LATIN',
            'location': '00000',
            'locationComplement': null,
            'canceled': true,
            'teachers': [
              {
                'id': 'PSKO-P-X',
                'title': 'M.',
                'firstName': 'X',
                'lastName': 'X',
                'photoUrl': null
              }
            ],
            'subject': {
              'id': 'fcd026e0b2f74ac49781cbdae56dcc33',
              'label': 'LATIN',
              'color': '#d7ffff'
            }
          },
          {
            'id': '00000',
            'startDateTime': '2023-05-04T06:00:00Z',
            'endDateTime': '2023-05-04T06:55:00Z',
            'title': 'LATIN',
            'location': '00000',
            'locationComplement': null,
            'canceled': true,
            'teachers': [
              {
                'id': 'PSKO-P-X',
                'title': 'M.',
                'firstName': 'X',
                'lastName': 'X',
                'photoUrl': null
              }
            ],
            'subject': {
              'id': 'fcd026e0b2f74ac49781cbdae56dcc33',
              'label': 'LATIN',
              'color': '#d7ffff'
            }
          }
        ],
        'homeworkAssignments': []
      },
      {
        'id': 'ESKO-P-X',
        'date': '2023-05-06',
        'lessons': [],
        'homeworkAssignments': []
      },
      {
        'id': 'ESKO-P-X',
        'date': '2023-05-07',
        'lessons': [],
        'homeworkAssignments': []
      },
      {
        'id': 'ESKO-P-X',
        'date': '2023-05-08',
        'lessons': [],
        'homeworkAssignments': []
      },
      {
        'id': 'ESKO-P-X',
        'date': '2023-05-09',
        'lessons': [
          {
            'id': '00000',
            'startDateTime': '2023-05-04T06:00:00Z',
            'endDateTime': '2023-05-04T06:55:00Z',
            'title': 'LATIN',
            'location': '00000',
            'locationComplement': null,
            'canceled': true,
            'teachers': [
              {
                'id': 'PSKO-P-X',
                'title': 'M.',
                'firstName': 'X',
                'lastName': 'X',
                'photoUrl': null
              }
            ],
            'subject': {
              'id': 'fcd026e0b2f74ac49781cbdae56dcc33',
              'label': 'LATIN',
              'color': '#d7ffff'
            }
          },
          {
            'id': '00000',
            'startDateTime': '2023-05-04T06:00:00Z',
            'endDateTime': '2023-05-04T06:55:00Z',
            'title': 'LATIN',
            'location': '00000',
            'locationComplement': null,
            'canceled': true,
            'teachers': [
              {
                'id': 'PSKO-P-X',
                'title': 'M.',
                'firstName': 'X',
                'lastName': 'X',
                'photoUrl': null
              }
            ],
            'subject': {
              'id': 'fcd026e0b2f74ac49781cbdae56dcc33',
              'label': 'LATIN',
              'color': '#d7ffff'
            }
          },
          {
            'id': '00000',
            'startDateTime': '2023-05-04T06:00:00Z',
            'endDateTime': '2023-05-04T06:55:00Z',
            'title': 'LATIN',
            'location': '00000',
            'locationComplement': null,
            'canceled': true,
            'teachers': [
              {
                'id': 'PSKO-P-X',
                'title': 'M.',
                'firstName': 'X',
                'lastName': 'X',
                'photoUrl': null
              }
            ],
            'subject': {
              'id': 'fcd026e0b2f74ac49781cbdae56dcc33',
              'label': 'LATIN',
              'color': '#d7ffff'
            }
          },
          {
            'id': '00000',
            'startDateTime': '2023-05-04T06:00:00Z',
            'endDateTime': '2023-05-04T06:55:00Z',
            'title': 'LATIN',
            'location': '00000',
            'locationComplement': null,
            'canceled': true,
            'teachers': [
              {
                'id': 'PSKO-P-X',
                'title': 'M.',
                'firstName': 'X',
                'lastName': 'X',
                'photoUrl': null
              }
            ],
            'subject': {
              'id': 'fcd026e0b2f74ac49781cbdae56dcc33',
              'label': 'LATIN',
              'color': '#d7ffff'
            }
          },
          {
            'id': '00000',
            'startDateTime': '2023-05-04T06:00:00Z',
            'endDateTime': '2023-05-04T06:55:00Z',
            'title': 'LATIN',
            'location': '00000',
            'locationComplement': null,
            'canceled': true,
            'teachers': [
              {
                'id': 'PSKO-P-X',
                'title': 'M.',
                'firstName': 'X',
                'lastName': 'X',
                'photoUrl': null
              }
            ],
            'subject': {
              'id': 'fcd026e0b2f74ac49781cbdae56dcc33',
              'label': 'LATIN',
              'color': '#d7ffff'
            }
          },
          {
            'id': '00000',
            'startDateTime': '2023-05-04T06:00:00Z',
            'endDateTime': '2023-05-04T06:55:00Z',
            'title': 'LATIN',
            'location': '00000',
            'locationComplement': null,
            'canceled': true,
            'teachers': [
              {
                'id': 'PSKO-P-X',
                'title': 'M.',
                'firstName': 'X',
                'lastName': 'X',
                'photoUrl': null
              }
            ],
            'subject': {
              'id': 'fcd026e0b2f74ac49781cbdae56dcc33',
              'label': 'LATIN',
              'color': '#d7ffff'
            }
          }
        ],
        'homeworkAssignments': [
          {
            'id': '00000',
            'title': 'Chapitre 8 (8.0 8.1 8.2) Electricité',
            'html': '<html></html>',
            'dueDateTime': '2023-05-03T06:00:00Z',
            'dueDate': null,
            'done': false,
            'deliverWorkOnline': false,
            'onlineDeliveryUrl': null,
            'subject': {
              'id': '3ce9205e72b448aaa4bfe1cc51e73593',
              'label': 'PHYSIQUE-CHIMIE',
              'color': '#008000'
            }
          }
        ]
      },
      {
        'id': 'ESKO-P-X',
        'date': '2023-05-10',
        'lessons': [
          {
            'id': '00000',
            'startDateTime': '2023-05-04T06:00:00Z',
            'endDateTime': '2023-05-04T06:55:00Z',
            'title': 'LATIN',
            'location': '00000',
            'locationComplement': null,
            'canceled': true,
            'teachers': [
              {
                'id': 'PSKO-P-X',
                'title': 'M.',
                'firstName': 'X',
                'lastName': 'X',
                'photoUrl': null
              }
            ],
            'subject': {
              'id': 'fcd026e0b2f74ac49781cbdae56dcc33',
              'label': 'LATIN',
              'color': '#d7ffff'
            }
          },
          {
            'id': '00000',
            'startDateTime': '2023-05-04T06:00:00Z',
            'endDateTime': '2023-05-04T06:55:00Z',
            'title': 'LATIN',
            'location': '00000',
            'locationComplement': null,
            'canceled': true,
            'teachers': [
              {
                'id': 'PSKO-P-X',
                'title': 'M.',
                'firstName': 'X',
                'lastName': 'X',
                'photoUrl': null
              }
            ],
            'subject': {
              'id': 'fcd026e0b2f74ac49781cbdae56dcc33',
              'label': 'LATIN',
              'color': '#d7ffff'
            }
          },
          {
            'id': '00000',
            'startDateTime': '2023-05-04T06:00:00Z',
            'endDateTime': '2023-05-04T06:55:00Z',
            'title': 'LATIN',
            'location': '00000',
            'locationComplement': null,
            'canceled': true,
            'teachers': [
              {
                'id': 'PSKO-P-X',
                'title': 'M.',
                'firstName': 'X',
                'lastName': 'X',
                'photoUrl': null
              }
            ],
            'subject': {
              'id': 'fcd026e0b2f74ac49781cbdae56dcc33',
              'label': 'LATIN',
              'color': '#d7ffff'
            }
          },
          {
            'id': '00000',
            'startDateTime': '2023-05-04T06:00:00Z',
            'endDateTime': '2023-05-04T06:55:00Z',
            'title': 'LATIN',
            'location': '00000',
            'locationComplement': null,
            'canceled': true,
            'teachers': [
              {
                'id': 'PSKO-P-X',
                'title': 'M.',
                'firstName': 'X',
                'lastName': 'X',
                'photoUrl': null
              }
            ],
            'subject': {
              'id': 'fcd026e0b2f74ac49781cbdae56dcc33',
              'label': 'LATIN',
              'color': '#d7ffff'
            }
          }
        ],
        'homeworkAssignments': [
          {
            'id': '00000',
            'title': 'Chapitre 8 (8.0 8.1 8.2) Electricité',
            'html': '<html></html>',
            'dueDateTime': '2023-05-03T06:00:00Z',
            'dueDate': null,
            'done': false,
            'deliverWorkOnline': false,
            'onlineDeliveryUrl': null,
            'subject': {
              'id': '3ce9205e72b448aaa4bfe1cc51e73593',
              'label': 'PHYSIQUE-CHIMIE',
              'color': '#008000'
            }
          }
        ]
      },
      {
        'id': 'ESKO-P-X',
        'date': '2023-05-11',
        'lessons': [
          {
            'id': '00000',
            'startDateTime': '2023-05-04T06:00:00Z',
            'endDateTime': '2023-05-04T06:55:00Z',
            'title': 'LATIN',
            'location': '00000',
            'locationComplement': null,
            'canceled': true,
            'teachers': [
              {
                'id': 'PSKO-P-X',
                'title': 'M.',
                'firstName': 'X',
                'lastName': 'X',
                'photoUrl': null
              }
            ],
            'subject': {
              'id': 'fcd026e0b2f74ac49781cbdae56dcc33',
              'label': 'LATIN',
              'color': '#d7ffff'
            }
          },
          {
            'id': '00000',
            'startDateTime': '2023-05-04T06:00:00Z',
            'endDateTime': '2023-05-04T06:55:00Z',
            'title': 'LATIN',
            'location': '00000',
            'locationComplement': null,
            'canceled': true,
            'teachers': [
              {
                'id': 'PSKO-P-X',
                'title': 'M.',
                'firstName': 'X',
                'lastName': 'X',
                'photoUrl': null
              }
            ],
            'subject': {
              'id': 'fcd026e0b2f74ac49781cbdae56dcc33',
              'label': 'LATIN',
              'color': '#d7ffff'
            }
          },
          {
            'id': '00000',
            'startDateTime': '2023-05-04T06:00:00Z',
            'endDateTime': '2023-05-04T06:55:00Z',
            'title': 'LATIN',
            'location': '00000',
            'locationComplement': null,
            'canceled': true,
            'teachers': [
              {
                'id': 'PSKO-P-X',
                'title': 'M.',
                'firstName': 'X',
                'lastName': 'X',
                'photoUrl': null
              }
            ],
            'subject': {
              'id': 'fcd026e0b2f74ac49781cbdae56dcc33',
              'label': 'LATIN',
              'color': '#d7ffff'
            }
          },
          {
            'id': '00000',
            'startDateTime': '2023-05-04T06:00:00Z',
            'endDateTime': '2023-05-04T06:55:00Z',
            'title': 'LATIN',
            'location': '00000',
            'locationComplement': null,
            'canceled': true,
            'teachers': [
              {
                'id': 'PSKO-P-X',
                'title': 'M.',
                'firstName': 'X',
                'lastName': 'X',
                'photoUrl': null
              }
            ],
            'subject': {
              'id': 'fcd026e0b2f74ac49781cbdae56dcc33',
              'label': 'LATIN',
              'color': '#d7ffff'
            }
          },
          {
            'id': '00000',
            'startDateTime': '2023-05-04T06:00:00Z',
            'endDateTime': '2023-05-04T06:55:00Z',
            'title': 'LATIN',
            'location': '00000',
            'locationComplement': null,
            'canceled': true,
            'teachers': [
              {
                'id': 'PSKO-P-X',
                'title': 'M.',
                'firstName': 'X',
                'lastName': 'X',
                'photoUrl': null
              }
            ],
            'subject': {
              'id': 'fcd026e0b2f74ac49781cbdae56dcc33',
              'label': 'LATIN',
              'color': '#d7ffff'
            }
          },
          {
            'id': '00000',
            'startDateTime': '2023-05-04T06:00:00Z',
            'endDateTime': '2023-05-04T06:55:00Z',
            'title': 'LATIN',
            'location': '00000',
            'locationComplement': null,
            'canceled': true,
            'teachers': [
              {
                'id': 'PSKO-P-X',
                'title': 'M.',
                'firstName': 'X',
                'lastName': 'X',
                'photoUrl': null
              }
            ],
            'subject': {
              'id': 'fcd026e0b2f74ac49781cbdae56dcc33',
              'label': 'LATIN',
              'color': '#d7ffff'
            }
          }
        ],
        'homeworkAssignments': []
      },
      {
        'id': 'ESKO-P-X',
        'date': '2023-05-12',
        'lessons': [
          {
            'id': '00000',
            'startDateTime': '2023-05-04T06:00:00Z',
            'endDateTime': '2023-05-04T06:55:00Z',
            'title': 'LATIN',
            'location': '00000',
            'locationComplement': null,
            'canceled': true,
            'teachers': [
              {
                'id': 'PSKO-P-X',
                'title': 'M.',
                'firstName': 'X',
                'lastName': 'X',
                'photoUrl': null
              }
            ],
            'subject': {
              'id': 'fcd026e0b2f74ac49781cbdae56dcc33',
              'label': 'LATIN',
              'color': '#d7ffff'
            }
          },
          {
            'id': '00000',
            'startDateTime': '2023-05-04T06:00:00Z',
            'endDateTime': '2023-05-04T06:55:00Z',
            'title': 'LATIN',
            'location': '00000',
            'locationComplement': null,
            'canceled': true,
            'teachers': [
              {
                'id': 'PSKO-P-X',
                'title': 'M.',
                'firstName': 'X',
                'lastName': 'X',
                'photoUrl': null
              }
            ],
            'subject': {
              'id': 'fcd026e0b2f74ac49781cbdae56dcc33',
              'label': 'LATIN',
              'color': '#d7ffff'
            }
          },
          {
            'id': '00000',
            'startDateTime': '2023-05-04T06:00:00Z',
            'endDateTime': '2023-05-04T06:55:00Z',
            'title': 'LATIN',
            'location': '00000',
            'locationComplement': null,
            'canceled': true,
            'teachers': [
              {
                'id': 'PSKO-P-X',
                'title': 'M.',
                'firstName': 'X',
                'lastName': 'X',
                'photoUrl': null
              }
            ],
            'subject': {
              'id': 'fcd026e0b2f74ac49781cbdae56dcc33',
              'label': 'LATIN',
              'color': '#d7ffff'
            }
          },
          {
            'id': '00000',
            'startDateTime': '2023-05-04T06:00:00Z',
            'endDateTime': '2023-05-04T06:55:00Z',
            'title': 'LATIN',
            'location': '00000',
            'locationComplement': null,
            'canceled': true,
            'teachers': [
              {
                'id': 'PSKO-P-X',
                'title': 'M.',
                'firstName': 'X',
                'lastName': 'X',
                'photoUrl': null
              }
            ],
            'subject': {
              'id': 'fcd026e0b2f74ac49781cbdae56dcc33',
              'label': 'LATIN',
              'color': '#d7ffff'
            }
          },
          {
            'id': '00000',
            'startDateTime': '2023-05-04T06:00:00Z',
            'endDateTime': '2023-05-04T06:55:00Z',
            'title': 'LATIN',
            'location': '00000',
            'locationComplement': null,
            'canceled': true,
            'teachers': [
              {
                'id': 'PSKO-P-X',
                'title': 'M.',
                'firstName': 'X',
                'lastName': 'X',
                'photoUrl': null
              }
            ],
            'subject': {
              'id': 'fcd026e0b2f74ac49781cbdae56dcc33',
              'label': 'LATIN',
              'color': '#d7ffff'
            }
          },
          {
            'id': '00000',
            'startDateTime': '2023-05-04T06:00:00Z',
            'endDateTime': '2023-05-04T06:55:00Z',
            'title': 'LATIN',
            'location': '00000',
            'locationComplement': null,
            'canceled': true,
            'teachers': [
              {
                'id': 'PSKO-P-X',
                'title': 'M.',
                'firstName': 'X',
                'lastName': 'X',
                'photoUrl': null
              }
            ],
            'subject': {
              'id': 'fcd026e0b2f74ac49781cbdae56dcc33',
              'label': 'LATIN',
              'color': '#d7ffff'
            }
          }
        ],
        'homeworkAssignments': []
      },
      {
        'id': 'ESKO-P-X',
        'date': '2023-05-13',
        'lessons': [],
        'homeworkAssignments': []
      },
      {
        'id': 'ESKO-P-X',
        'date': '2023-05-14',
        'lessons': [],
        'homeworkAssignments': []
      },
      {
        'id': 'ESKO-P-X',
        'date': '2023-05-15',
        'lessons': [
          {
            'id': '00000',
            'startDateTime': '2023-05-04T06:00:00Z',
            'endDateTime': '2023-05-04T06:55:00Z',
            'title': 'LATIN',
            'location': '00000',
            'locationComplement': null,
            'canceled': true,
            'teachers': [
              {
                'id': 'PSKO-P-X',
                'title': 'M.',
                'firstName': 'X',
                'lastName': 'X',
                'photoUrl': null
              }
            ],
            'subject': {
              'id': 'fcd026e0b2f74ac49781cbdae56dcc33',
              'label': 'LATIN',
              'color': '#d7ffff'
            }
          },
          {
            'id': '00000',
            'startDateTime': '2023-05-04T06:00:00Z',
            'endDateTime': '2023-05-04T06:55:00Z',
            'title': 'LATIN',
            'location': '00000',
            'locationComplement': null,
            'canceled': true,
            'teachers': [
              {
                'id': 'PSKO-P-X',
                'title': 'M.',
                'firstName': 'X',
                'lastName': 'X',
                'photoUrl': null
              }
            ],
            'subject': {
              'id': 'fcd026e0b2f74ac49781cbdae56dcc33',
              'label': 'LATIN',
              'color': '#d7ffff'
            }
          },
          {
            'id': '00000',
            'startDateTime': '2023-05-04T06:00:00Z',
            'endDateTime': '2023-05-04T06:55:00Z',
            'title': 'LATIN',
            'location': '00000',
            'locationComplement': null,
            'canceled': true,
            'teachers': [
              {
                'id': 'PSKO-P-X',
                'title': 'M.',
                'firstName': 'X',
                'lastName': 'X',
                'photoUrl': null
              }
            ],
            'subject': {
              'id': 'fcd026e0b2f74ac49781cbdae56dcc33',
              'label': 'LATIN',
              'color': '#d7ffff'
            }
          },
          {
            'id': '00000',
            'startDateTime': '2023-05-04T06:00:00Z',
            'endDateTime': '2023-05-04T06:55:00Z',
            'title': 'LATIN',
            'location': '00000',
            'locationComplement': null,
            'canceled': true,
            'teachers': [
              {
                'id': 'PSKO-P-X',
                'title': 'M.',
                'firstName': 'X',
                'lastName': 'X',
                'photoUrl': null
              }
            ],
            'subject': {
              'id': 'fcd026e0b2f74ac49781cbdae56dcc33',
              'label': 'LATIN',
              'color': '#d7ffff'
            }
          },
          {
            'id': '00000',
            'startDateTime': '2023-05-04T06:00:00Z',
            'endDateTime': '2023-05-04T06:55:00Z',
            'title': 'LATIN',
            'location': '00000',
            'locationComplement': null,
            'canceled': true,
            'teachers': [
              {
                'id': 'PSKO-P-X',
                'title': 'M.',
                'firstName': 'X',
                'lastName': 'X',
                'photoUrl': null
              }
            ],
            'subject': {
              'id': 'fcd026e0b2f74ac49781cbdae56dcc33',
              'label': 'LATIN',
              'color': '#d7ffff'
            }
          }
        ],
        'homeworkAssignments': [
          {
            'id': '00000',
            'title': 'Chapitre 8 (8.0 8.1 8.2) Electricité',
            'html': '<html></html>',
            'dueDateTime': '2023-05-03T06:00:00Z',
            'dueDate': null,
            'done': false,
            'deliverWorkOnline': false,
            'onlineDeliveryUrl': null,
            'subject': {
              'id': '3ce9205e72b448aaa4bfe1cc51e73593',
              'label': 'PHYSIQUE-CHIMIE',
              'color': '#008000'
            }
          }
        ]
      }
    ]
    expect<ExpectedType>(data).toBeDefined()
  })
})

