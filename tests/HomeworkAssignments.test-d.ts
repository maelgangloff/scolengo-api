import { expectAssignable } from 'tsd'
import { SkolengoResponse } from '../src/models/Globals'
import { HomeworkAssignment, HomeworkAssignmentIncluded } from '../src/models/Homework/HomeworkAssignment'

expectAssignable<SkolengoResponse<HomeworkAssignment[], HomeworkAssignmentIncluded>>({
  'data': [
    {
      'id': '128500',
      'type': 'homework',
      'attributes': {
        'title': 'Exercices',
        'html': '<html></html>',
        'dueDateTime': '2023-05-02T08:10:00Z',
        'dueDate': '2023-05-02',
        'done': true,
        'deliverWorkOnline': false,
        'onlineDeliveryUrl': null
      },
      'relationships': {
        'teacher': {
          'data': {
            'id': 'PSKO-X',
            'type': 'teacher'
          }
        },
        'attachments': {
          'data': []
        },
        'subject': {
          'data': {
            'id': 'aaef3f1b75d04d179544230f53849f35',
            'type': 'subject'
          }
        }
      }
    },
    {
      'id': '128575',
      'type': 'homework',
      'attributes': {
        'title': 'le document avec les questions',
        'html': '<html>\n <head></head>\n <body>   \n  <p>en PJ</p>  \n </body>\n</html>',
        'dueDateTime': '2023-05-02T08:10:00Z',
        'dueDate': '2023-05-02',
        'done': true,
        'deliverWorkOnline': false,
        'onlineDeliveryUrl': null
      },
      'relationships': {
        'teacher': {
          'data': {
            'id': 'PSKO-X',
            'type': 'teacher'
          }
        },
        'attachments': {
          'data': [
            {
              'id': '27998',
              'type': 'attachment'
            }
          ]
        },
        'subject': {
          'data': {
            'id': 'aaef3f1b75d04d179544230f53849f35',
            'type': 'subject'
          }
        }
      }
    },
    {
      'id': '127879',
      'type': 'homework',
      'attributes': {
        'title': 'Chapitre 8 (8.0 8.1 8.2) Electricité',
        'html': '<html></html>',
        'dueDateTime': '2023-05-03T06:00:00Z',
        'dueDate': '2023-05-03',
        'done': false,
        'deliverWorkOnline': false,
        'onlineDeliveryUrl': null
      },
      'relationships': {
        'teacher': {
          'data': {
            'id': 'PSKO-X',
            'type': 'teacher'
          }
        },
        'attachments': {
          'data': []
        },
        'subject': {
          'data': {
            'id': '3ce9205e72b448aaa4bfe1cc51e73593',
            'type': 'subject'
          }
        }
      }
    },
    {
      'id': '128300',
      'type': 'homework',
      'attributes': {
        'title': 'Exercices',
        'html': '<html>\n <head></head>\n <body>   \n  <p>finir le projet + explications</p>  \n </body>\n</html>',
        'dueDateTime': '2023-05-03T06:55:00Z',
        'dueDate': '2023-05-03',
        'done': true,
        'deliverWorkOnline': false,
        'onlineDeliveryUrl': null
      },
      'relationships': {
        'teacher': {
          'data': {
            'id': 'PSKO-X',
            'type': 'teacher'
          }
        },
        'attachments': {
          'data': []
        },
        'subject': {
          'data': {
            'id': '842fba9eabfb4ea29b89540af794e465',
            'type': 'subject'
          }
        }
      }
    },
    {
      'id': '128289',
      'type': 'homework',
      'attributes': {
        'title': 'Exercices',
        'html': '<html></html>',
        'dueDateTime': '2023-05-03T08:10:00Z',
        'dueDate': '2023-05-03',
        'done': true,
        'deliverWorkOnline': false,
        'onlineDeliveryUrl': null
      },
      'relationships': {
        'teacher': {
          'data': {
            'id': 'PSKO-X',
            'type': 'teacher'
          }
        },
        'attachments': {
          'data': []
        },
        'subject': {
          'data': {
            'id': '0c45bb6d0a724a6da01ac062428f1e43',
            'type': 'subject'
          }
        }
      }
    },
    {
      'id': '128532',
      'type': 'homework',
      'attributes': {
        'title': 'Exercices',
        'html': '<html></html>',
        'dueDateTime': '2023-05-03T09:05:00Z',
        'dueDate': '2023-05-03',
        'done': false,
        'deliverWorkOnline': false,
        'onlineDeliveryUrl': null
      },
      'relationships': {
        'teacher': {
          'data': {
            'id': 'PSKO-X',
            'type': 'teacher'
          }
        },
        'attachments': {
          'data': []
        },
        'subject': {
          'data': {
            'id': 'bcebb7c93cae48d089e52d12cada31e8',
            'type': 'subject'
          }
        }
      }
    },
    {
      'id': '128471',
      'type': 'homework',
      'attributes': {
        'title': 'Rédiger un paragraphe argumentatif',
        'html': '<html></html>',
        'dueDateTime': '2023-05-09T11:55:00Z',
        'dueDate': '2023-05-09',
        'done': true,
        'deliverWorkOnline': false,
        'onlineDeliveryUrl': null
      },
      'relationships': {
        'teacher': {
          'data': {
            'id': 'PSKO-X',
            'type': 'teacher'
          }
        },
        'attachments': {
          'data': []
        },
        'subject': {
          'data': {
            'id': '15976bb5e3574543ab0333e41ab9b8d1',
            'type': 'subject'
          }
        }
      }
    },
    {
      'id': '128612',
      'type': 'homework',
      'attributes': {
        'title': 'Apprendre le début du nouveau chapitre',
        'html': '<html></html>',
        'dueDateTime': '2023-05-10T06:00:00Z',
        'dueDate': '2023-05-10',
        'done': false,
        'deliverWorkOnline': false,
        'onlineDeliveryUrl': null
      },
      'relationships': {
        'teacher': {
          'data': {
            'id': 'PSKO-X',
            'type': 'teacher'
          }
        },
        'attachments': {
          'data': [
            {
              'id': '28004',
              'type': 'attachment'
            },
            {
              'id': '28005',
              'type': 'attachment'
            }
          ]
        },
        'subject': {
          'data': {
            'id': 'c68e12a417b44fcf9fa30e6eabf3426b',
            'type': 'subject'
          }
        }
      }
    }
  ],
  'included': [
    {
      'id': 'X',
      'type': 'attachment',
      'attributes': {
        'name': 'cuba 3e.pdf',
        'mimeType': 'application/pdf',
        'mimeTypeLabel': 'Document PDF',
        'size': 558296,
        'url': 'https://cite-val-argent.monbureaunumerique.fr/lectureFichiergw.do?ID_FICHIER=X'
      }
    },
    {
      'id': 'X',
      'type': 'attachment',
      'attributes': {
        'name': 'X.PDF',
        'mimeType': 'application/pdf',
        'mimeTypeLabel': 'Document PDF',
        'size': 261555,
        'url': 'https://cite-val-argent.monbureaunumerique.fr/lectureFichiergw.do?ID_FICHIER=X'
      }
    },
    {
      'id': 'X',
      'type': 'attachment',
      'attributes': {
        'name': 'X.PDF',
        'mimeType': 'application/pdf',
        'mimeTypeLabel': 'Document PDF',
        'size': 298388,
        'url': 'https://cite-val-argent.monbureaunumerique.fr/lectureFichiergw.do?ID_FICHIER=X'
      }
    },
    {
      'id': '0c45bb6d0a724a6da01ac062428f1e43',
      'type': 'subject',
      'attributes': {
        'label': 'MATHS',
        'color': '#4a87ca'
      }
    },
    {
      'id': '15976bb5e3574543ab0333e41ab9b8d1',
      'type': 'subject',
      'attributes': {
        'label': 'FRANCAIS',
        'color': '#ffff00'
      }
    },
    {
      'id': '3ce9205e72b448aaa4bfe1cc51e73593',
      'type': 'subject',
      'attributes': {
        'label': 'PHYSIQUE-CHIMIE',
        'color': '#008000'
      }
    },
    {
      'id': '842fba9eabfb4ea29b89540af794e465',
      'type': 'subject',
      'attributes': {
        'label': 'ARTS PLASTIQUES',
        'color': '#d9dbc6'
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
      'id': 'bcebb7c93cae48d089e52d12cada31e8',
      'type': 'subject',
      'attributes': {
        'label': 'ALLEMAND LV2',
        'color': '#ff0000'
      }
    },
    {
      'id': 'c68e12a417b44fcf9fa30e6eabf3426b',
      'type': 'subject',
      'attributes': {
        'label': 'SCIENCES VIE & TERRE',
        'color': '#ff00ff'
      }
    },
    {
      'id': 'PSKO-X',
      'type': 'teacher',
      'attributes': {
        'title': 'Mme',
        'firstName': 'X',
        'lastName': 'X',
        'photoUrl': null
      }
    },
    {
      'id': 'PSKO-X',
      'type': 'teacher',
      'attributes': {
        'title': 'M.',
        'firstName': 'X',
        'lastName': 'X',
        'photoUrl': null
      }
    },
    {
      'id': 'PSKO-X',
      'type': 'teacher',
      'attributes': {
        'title': 'Mme',
        'firstName': 'X',
        'lastName': 'X',
        'photoUrl': null
      }
    },
    {
      'id': 'PSKO-X',
      'type': 'teacher',
      'attributes': {
        'title': 'M.',
        'firstName': 'X',
        'lastName': 'X',
        'photoUrl': null
      }
    },
    {
      'id': 'PSKO-X',
      'type': 'teacher',
      'attributes': {
        'title': 'M.',
        'firstName': 'X',
        'lastName': 'X',
        'photoUrl': null
      }
    },
    {
      'id': 'PSKO-X',
      'type': 'teacher',
      'attributes': {
        'title': 'Mme',
        'firstName': 'X',
        'lastName': 'X',
        'photoUrl': null
      }
    },
    {
      'id': 'PSKO-X',
      'type': 'teacher',
      'attributes': {
        'title': 'Mme',
        'firstName': 'X',
        'lastName': 'X',
        'photoUrl': null
      }
    }
  ],
  'links': {
    'first': 'http://bff-prod-ha/api/v1/bff-sko-app/homework-assignments?page[limit]=20&include=subject%2Cteacher%2Cattachments%2Cteacher.person&filter[student.id]=ESKO-P-b2c86113-1062-427e-bc7f-X&filter[dueDate][GE]=2023-05-01&filter[dueDate][LE]=2023-05-10',
    'last': 'http://bff-prod-ha/api/v1/bff-sko-app/homework-assignments?page[limit]=20&include=subject%2Cteacher%2Cattachments%2Cteacher.person&filter[student.id]=ESKO-P-b2c86113-1062-427e-bc7f-X&filter[dueDate][GE]=2023-05-01&filter[dueDate][LE]=2023-05-10'
  },
  'meta': {
    'totalResourceCount': 8
  }
})
