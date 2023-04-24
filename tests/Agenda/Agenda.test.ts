import { describe } from 'node:test'
import { SkolengoResponse } from '../../src/models/Global'
import { Agenda, AgendaIncluded } from '../../src/models/Agenda/Agenda'

type ExpectedType = SkolengoResponse<Agenda[], AgendaIncluded>

describe('Test Agenda', () => {
  it('should be correct type', () => {
    const data: ExpectedType = {
      'data': [
        {
          'id': 'ESKO-P-X',
          'type': 'agenda',
          'attributes': {
            'date': '2023-05-01'
          },
          'relationships': {
            'lessons': {
              'data': []
            },
            'homeworkAssignments': {
              'data': []
            }
          }
        },
        {
          'id': 'ESKO-P-X',
          'type': 'agenda',
          'attributes': {
            'date': '2023-05-02'
          },
          'relationships': {
            'lessons': {
              'data': [
                {
                  'id': '00000',
                  'type': 'lesson'
                },
                {
                  'id': '00000',
                  'type': 'lesson'
                },
                {
                  'id': '00000',
                  'type': 'lesson'
                },
                {
                  'id': '00000',
                  'type': 'lesson'
                },
                {
                  'id': '00000',
                  'type': 'lesson'
                },
                {
                  'id': '00000',
                  'type': 'lesson'
                }
              ]
            },
            'homeworkAssignments': {
              'data': [
                {
                  'id': '00000',
                  'type': 'homework'
                },
                {
                  'id': '00000',
                  'type': 'homework'
                }
              ]
            }
          }
        },
        {
          'id': 'ESKO-P-X',
          'type': 'agenda',
          'attributes': {
            'date': '2023-05-03'
          },
          'relationships': {
            'lessons': {
              'data': [
                {
                  'id': '00000',
                  'type': 'lesson'
                },
                {
                  'id': '00000',
                  'type': 'lesson'
                },
                {
                  'id': '00000',
                  'type': 'lesson'
                },
                {
                  'id': '00000',
                  'type': 'lesson'
                }
              ]
            },
            'homeworkAssignments': {
              'data': [
                {
                  'id': '00000',
                  'type': 'homework'
                },
                {
                  'id': '00000',
                  'type': 'homework'
                },
                {
                  'id': '00000',
                  'type': 'homework'
                },
                {
                  'id': '00000',
                  'type': 'homework'
                }
              ]
            }
          }
        },
        {
          'id': 'ESKO-P-X',
          'type': 'agenda',
          'attributes': {
            'date': '2023-05-04'
          },
          'relationships': {
            'lessons': {
              'data': [
                {
                  'id': '00000',
                  'type': 'lesson'
                },
                {
                  'id': '00000',
                  'type': 'lesson'
                },
                {
                  'id': '00000',
                  'type': 'lesson'
                },
                {
                  'id': '00000',
                  'type': 'lesson'
                },
                {
                  'id': '00000',
                  'type': 'lesson'
                },
                {
                  'id': '00000',
                  'type': 'lesson'
                },
                {
                  'id': '00000',
                  'type': 'lesson'
                }
              ]
            },
            'homeworkAssignments': {
              'data': []
            }
          }
        },
        {
          'id': 'ESKO-P-X',
          'type': 'agenda',
          'attributes': {
            'date': '2023-05-05'
          },
          'relationships': {
            'lessons': {
              'data': [
                {
                  'id': '00000',
                  'type': 'lesson'
                },
                {
                  'id': '00000',
                  'type': 'lesson'
                },
                {
                  'id': '00000',
                  'type': 'lesson'
                },
                {
                  'id': '00000',
                  'type': 'lesson'
                },
                {
                  'id': '00000',
                  'type': 'lesson'
                }
              ]
            },
            'homeworkAssignments': {
              'data': []
            }
          }
        },
        {
          'id': 'ESKO-P-X',
          'type': 'agenda',
          'attributes': {
            'date': '2023-05-06'
          },
          'relationships': {
            'lessons': {
              'data': []
            },
            'homeworkAssignments': {
              'data': []
            }
          }
        },
        {
          'id': 'ESKO-P-X',
          'type': 'agenda',
          'attributes': {
            'date': '2023-05-07'
          },
          'relationships': {
            'lessons': {
              'data': []
            },
            'homeworkAssignments': {
              'data': []
            }
          }
        },
        {
          'id': 'ESKO-P-X',
          'type': 'agenda',
          'attributes': {
            'date': '2023-05-08'
          },
          'relationships': {
            'lessons': {
              'data': []
            },
            'homeworkAssignments': {
              'data': []
            }
          }
        },
        {
          'id': 'ESKO-P-X',
          'type': 'agenda',
          'attributes': {
            'date': '2023-05-09'
          },
          'relationships': {
            'lessons': {
              'data': [
                {
                  'id': '00000',
                  'type': 'lesson'
                },
                {
                  'id': '00000',
                  'type': 'lesson'
                },
                {
                  'id': '00000',
                  'type': 'lesson'
                },
                {
                  'id': '00000',
                  'type': 'lesson'
                },
                {
                  'id': '00000',
                  'type': 'lesson'
                },
                {
                  'id': '00000',
                  'type': 'lesson'
                }
              ]
            },
            'homeworkAssignments': {
              'data': [
                {
                  'id': '00000',
                  'type': 'homework'
                }
              ]
            }
          }
        },
        {
          'id': 'ESKO-P-X',
          'type': 'agenda',
          'attributes': {
            'date': '2023-05-10'
          },
          'relationships': {
            'lessons': {
              'data': [
                {
                  'id': '00000',
                  'type': 'lesson'
                },
                {
                  'id': '00000',
                  'type': 'lesson'
                },
                {
                  'id': '00000',
                  'type': 'lesson'
                },
                {
                  'id': '00000',
                  'type': 'lesson'
                }
              ]
            },
            'homeworkAssignments': {
              'data': [
                {
                  'id': '00000',
                  'type': 'homework'
                }
              ]
            }
          }
        },
        {
          'id': 'ESKO-P-X',
          'type': 'agenda',
          'attributes': {
            'date': '2023-05-11'
          },
          'relationships': {
            'lessons': {
              'data': [
                {
                  'id': '00000',
                  'type': 'lesson'
                },
                {
                  'id': '00000',
                  'type': 'lesson'
                },
                {
                  'id': '00000',
                  'type': 'lesson'
                },
                {
                  'id': '00000',
                  'type': 'lesson'
                },
                {
                  'id': '00000',
                  'type': 'lesson'
                },
                {
                  'id': '00000',
                  'type': 'lesson'
                }
              ]
            },
            'homeworkAssignments': {
              'data': []
            }
          }
        },
        {
          'id': 'ESKO-P-X',
          'type': 'agenda',
          'attributes': {
            'date': '2023-05-12'
          },
          'relationships': {
            'lessons': {
              'data': [
                {
                  'id': '00000',
                  'type': 'lesson'
                },
                {
                  'id': '00000',
                  'type': 'lesson'
                },
                {
                  'id': '00000',
                  'type': 'lesson'
                },
                {
                  'id': '00000',
                  'type': 'lesson'
                },
                {
                  'id': '00000',
                  'type': 'lesson'
                },
                {
                  'id': '00000',
                  'type': 'lesson'
                }
              ]
            },
            'homeworkAssignments': {
              'data': []
            }
          }
        },
        {
          'id': 'ESKO-P-X',
          'type': 'agenda',
          'attributes': {
            'date': '2023-05-13'
          },
          'relationships': {
            'lessons': {
              'data': []
            },
            'homeworkAssignments': {
              'data': []
            }
          }
        },
        {
          'id': 'ESKO-P-X',
          'type': 'agenda',
          'attributes': {
            'date': '2023-05-14'
          },
          'relationships': {
            'lessons': {
              'data': []
            },
            'homeworkAssignments': {
              'data': []
            }
          }
        },
        {
          'id': 'ESKO-P-X',
          'type': 'agenda',
          'attributes': {
            'date': '2023-05-15'
          },
          'relationships': {
            'lessons': {
              'data': [
                {
                  'id': '00000',
                  'type': 'lesson'
                },
                {
                  'id': '00000',
                  'type': 'lesson'
                },
                {
                  'id': '00000',
                  'type': 'lesson'
                },
                {
                  'id': '00000',
                  'type': 'lesson'
                },
                {
                  'id': '00000',
                  'type': 'lesson'
                }
              ]
            },
            'homeworkAssignments': {
              'data': [
                {
                  'id': '00000',
                  'type': 'homework'
                }
              ]
            }
          }
        }
      ],
      'included': [
        {
          'id': '00000',
          'type': 'homework',
          'attributes': {
            'title': 'Chapitre 8 (8.0 8.1 8.2) Electricité',
            'html': '<html></html>',
            'dueDateTime': '2023-05-03T06:00:00Z',
            'dueDate': null,
            'done': false,
            'deliverWorkOnline': false,
            'onlineDeliveryUrl': null
          },
          'relationships': {
            'subject': {
              'data': {
                'id': '3ce9205e72b448aaa4bfe1cc51e73593',
                'type': 'subject'
              }
            }
          }
        },
        {
          'id': '00000',
          'type': 'homework',
          'attributes': {
            'title': 'Exercices',
            'html': '<html></html>',
            'dueDateTime': '2023-05-03T08:10:00Z',
            'dueDate': null,
            'done': true,
            'deliverWorkOnline': false,
            'onlineDeliveryUrl': null
          },
          'relationships': {
            'subject': {
              'data': {
                'id': '0c45bb6d0a724a6da01ac062428f1e43',
                'type': 'subject'
              }
            }
          }
        },
        {
          'id': '00000',
          'type': 'homework',
          'attributes': {
            'title': 'Exercices',
            'html': '<html></html>',
            'dueDateTime': '2023-05-03T06:55:00Z',
            'dueDate': null,
            'done': true,
            'deliverWorkOnline': false,
            'onlineDeliveryUrl': null
          },
          'relationships': {
            'subject': {
              'data': {
                'id': '842fba9eabfb4ea29b89540af794e465',
                'type': 'subject'
              }
            }
          }
        },
        {
          'id': '00000',
          'type': 'homework',
          'attributes': {
            'title': 'Rédiger un paragraphe argumentatif',
            'html': '<html></html>',
            'dueDateTime': '2023-05-09T11:55:00Z',
            'dueDate': null,
            'done': true,
            'deliverWorkOnline': false,
            'onlineDeliveryUrl': null
          },
          'relationships': {
            'subject': {
              'data': {
                'id': '15976bb5e3574543ab0333e41ab9b8d1',
                'type': 'subject'
              }
            }
          }
        },
        {
          'id': '00000',
          'type': 'homework',
          'attributes': {
            'title': 'Lecture',
            'html': '<html></html>',
            'dueDateTime': '2023-05-15T11:55:00Z',
            'dueDate': null,
            'done': false,
            'deliverWorkOnline': false,
            'onlineDeliveryUrl': null
          },
          'relationships': {
            'subject': {
              'data': {
                'id': '15976bb5e3574543ab0333e41ab9b8d1',
                'type': 'subject'
              }
            }
          }
        },
        {
          'id': '00000',
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
            'title': 'Exercices',
            'html': '<html></html>',
            'dueDateTime': '2023-05-03T09:05:00Z',
            'dueDate': null,
            'done': false,
            'deliverWorkOnline': false,
            'onlineDeliveryUrl': null
          },
          'relationships': {
            'subject': {
              'data': {
                'id': 'bcebb7c93cae48d089e52d12cada31e8',
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
          'type': 'homework',
          'attributes': {
            'title': 'Apprendre le début du nouveau chapitre',
            'html': '<html></html>',
            'dueDateTime': '2023-05-10T06:00:00Z',
            'dueDate': null,
            'done': false,
            'deliverWorkOnline': false,
            'onlineDeliveryUrl': null
          },
          'relationships': {
            'subject': {
              'data': {
                'id': 'c68e12a417b44fcf9fa30e6eabf3426b',
                'type': 'subject'
              }
            }
          }
        },
        {
          'id': '00000',
          'type': 'lesson',
          'attributes': {
            'startDateTime': '2023-05-04T06:00:00Z',
            'endDateTime': '2023-05-04T06:55:00Z',
            'title': 'LATIN',
            'location': '00000',
            'locationComplement': null,
            'canceled': true
          },
          'relationships': {
            'teachers': {
              'data': [
                {
                  'id': 'PSKO-P-X',
                  'type': 'teacher'
                }
              ]
            },
            'subject': {
              'data': {
                'id': 'fcd026e0b2f74ac49781cbdae56dcc33',
                'type': 'subject'
              }
            }
          }
        },
        {
          'id': '00000',
          'type': 'lesson',
          'attributes': {
            'startDateTime': '2023-05-04T09:05:00Z',
            'endDateTime': '2023-05-04T10:00:00Z',
            'title': 'SCIENCES VIE & TERRE',
            'location': '00000',
            'locationComplement': null,
            'canceled': true
          },
          'relationships': {
            'teachers': {
              'data': [
                {
                  'id': 'PSKO-P-X',
                  'type': 'teacher'
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
        },
        {
          'id': '00000',
          'type': 'lesson',
          'attributes': {
            'startDateTime': '2023-05-02T11:55:00Z',
            'endDateTime': '2023-05-02T12:50:00Z',
            'title': 'FRANCAIS',
            'location': '00000',
            'locationComplement': null,
            'canceled': true
          },
          'relationships': {
            'teachers': {
              'data': [
                {
                  'id': 'PSKO-P-X',
                  'type': 'teacher'
                }
              ]
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
          'id': '00000',
          'type': 'lesson',
          'attributes': {
            'startDateTime': '2023-05-05T11:55:00Z',
            'endDateTime': '2023-05-05T13:45:00Z',
            'title': 'ED.PHYSIQUE & SPORT',
            'location': 'COSEC',
            'locationComplement': null,
            'canceled': false
          },
          'relationships': {
            'teachers': {
              'data': [
                {
                  'id': 'PSKO-P-X',
                  'type': 'teacher'
                }
              ]
            },
            'subject': {
              'data': {
                'id': '22d26d6bbdb14361818e1f8eab025f1a',
                'type': 'subject'
              }
            }
          }
        },
        {
          'id': '00000',
          'type': 'lesson',
          'attributes': {
            'startDateTime': '2023-05-02T06:00:00Z',
            'endDateTime': '2023-05-02T07:50:00Z',
            'title': 'ED.PHYSIQUE & SPORT',
            'location': 'COSEC',
            'locationComplement': null,
            'canceled': false
          },
          'relationships': {
            'teachers': {
              'data': [
                {
                  'id': 'PSKO-P-X',
                  'type': 'teacher'
                }
              ]
            },
            'subject': {
              'data': {
                'id': '22d26d6bbdb14361818e1f8eab025f1a',
                'type': 'subject'
              }
            }
          }
        },
        {
          'id': '00000',
          'type': 'lesson',
          'attributes': {
            'startDateTime': '2023-05-09T06:00:00Z',
            'endDateTime': '2023-05-09T07:50:00Z',
            'title': 'ED.PHYSIQUE & SPORT',
            'location': 'COSEC',
            'locationComplement': null,
            'canceled': false
          },
          'relationships': {
            'teachers': {
              'data': [
                {
                  'id': 'PSKO-P-X',
                  'type': 'teacher'
                }
              ]
            },
            'subject': {
              'data': {
                'id': '22d26d6bbdb14361818e1f8eab025f1a',
                'type': 'subject'
              }
            }
          }
        },
        {
          'id': '00000',
          'type': 'lesson',
          'attributes': {
            'startDateTime': '2023-05-10T06:00:00Z',
            'endDateTime': '2023-05-10T06:55:00Z',
            'title': 'SCIENCES VIE & TERRE',
            'location': '00000',
            'locationComplement': null,
            'canceled': false
          },
          'relationships': {
            'teachers': {
              'data': [
                {
                  'id': 'PSKO-P-X',
                  'type': 'teacher'
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
        },
        {
          'id': '00000',
          'type': 'lesson',
          'attributes': {
            'startDateTime': '2023-05-11T09:05:00Z',
            'endDateTime': '2023-05-11T10:00:00Z',
            'title': 'SCIENCES VIE & TERRE',
            'location': '00000',
            'locationComplement': null,
            'canceled': false
          },
          'relationships': {
            'teachers': {
              'data': [
                {
                  'id': 'PSKO-P-X',
                  'type': 'teacher'
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
        },
        {
          'id': '00000',
          'type': 'lesson',
          'attributes': {
            'startDateTime': '2023-05-03T06:00:00Z',
            'endDateTime': '2023-05-03T06:55:00Z',
            'title': 'PHYSIQUE-CHIMIE',
            'location': '00000',
            'locationComplement': null,
            'canceled': false
          },
          'relationships': {
            'teachers': {
              'data': [
                {
                  'id': 'PSKO-P-X',
                  'type': 'teacher'
                }
              ]
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
          'id': '00000',
          'type': 'lesson',
          'attributes': {
            'startDateTime': '2023-05-15T09:05:00Z',
            'endDateTime': '2023-05-15T10:00:00Z',
            'title': 'PHYSIQUE-CHIMIE',
            'location': '00000',
            'locationComplement': null,
            'canceled': false
          },
          'relationships': {
            'teachers': {
              'data': [
                {
                  'id': 'PSKO-P-X',
                  'type': 'teacher'
                }
              ]
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
          'id': '00000',
          'type': 'lesson',
          'attributes': {
            'startDateTime': '2023-05-04T12:50:00Z',
            'endDateTime': '2023-05-04T13:45:00Z',
            'title': 'FRANCAIS',
            'location': '00000',
            'locationComplement': null,
            'canceled': false
          },
          'relationships': {
            'teachers': {
              'data': [
                {
                  'id': 'PSKO-P-X',
                  'type': 'teacher'
                }
              ]
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
          'id': '00000',
          'type': 'lesson',
          'attributes': {
            'startDateTime': '2023-05-11T12:50:00Z',
            'endDateTime': '2023-05-11T13:45:00Z',
            'title': 'FRANCAIS',
            'location': '00000',
            'locationComplement': null,
            'canceled': false
          },
          'relationships': {
            'teachers': {
              'data': [
                {
                  'id': 'PSKO-P-X',
                  'type': 'teacher'
                }
              ]
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
          'id': '00000',
          'type': 'lesson',
          'attributes': {
            'startDateTime': '2023-05-04T06:55:00Z',
            'endDateTime': '2023-05-04T07:50:00Z',
            'title': 'FRANCAIS',
            'location': '00000',
            'locationComplement': null,
            'canceled': false
          },
          'relationships': {
            'teachers': {
              'data': [
                {
                  'id': 'PSKO-P-X',
                  'type': 'teacher'
                }
              ]
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
          'id': '00000',
          'type': 'lesson',
          'attributes': {
            'startDateTime': '2023-05-11T06:55:00Z',
            'endDateTime': '2023-05-11T07:50:00Z',
            'title': 'FRANCAIS',
            'location': '00000',
            'locationComplement': null,
            'canceled': false
          },
          'relationships': {
            'teachers': {
              'data': [
                {
                  'id': 'PSKO-P-X',
                  'type': 'teacher'
                }
              ]
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
          'id': '00000',
          'type': 'lesson',
          'attributes': {
            'startDateTime': '2023-05-02T09:05:00Z',
            'endDateTime': '2023-05-02T10:00:00Z',
            'title': 'TECHNO',
            'location': 'TECH1',
            'locationComplement': null,
            'canceled': false
          },
          'relationships': {
            'teachers': {
              'data': [
                {
                  'id': 'PSKO-P-X',
                  'type': 'teacher'
                }
              ]
            },
            'subject': {
              'data': {
                'id': 'd4db253a6cd04a0fb82244aa0ec31988',
                'type': 'subject'
              }
            }
          }
        },
        {
          'id': '00000',
          'type': 'lesson',
          'attributes': {
            'startDateTime': '2023-05-09T09:05:00Z',
            'endDateTime': '2023-05-09T10:00:00Z',
            'title': 'TECHNO',
            'location': 'TECH1',
            'locationComplement': null,
            'canceled': false
          },
          'relationships': {
            'teachers': {
              'data': [
                {
                  'id': 'PSKO-P-X',
                  'type': 'teacher'
                }
              ]
            },
            'subject': {
              'data': {
                'id': 'd4db253a6cd04a0fb82244aa0ec31988',
                'type': 'subject'
              }
            }
          }
        },
        {
          'id': '00000',
          'type': 'lesson',
          'attributes': {
            'startDateTime': '2023-05-04T08:10:00Z',
            'endDateTime': '2023-05-04T09:05:00Z',
            'title': 'TECHNO',
            'location': 'TECH1',
            'locationComplement': null,
            'canceled': false
          },
          'relationships': {
            'teachers': {
              'data': [
                {
                  'id': 'PSKO-P-X',
                  'type': 'teacher'
                }
              ]
            },
            'subject': {
              'data': {
                'id': 'd4db253a6cd04a0fb82244aa0ec31988',
                'type': 'subject'
              }
            }
          }
        },
        {
          'id': '00000',
          'type': 'lesson',
          'attributes': {
            'startDateTime': '2023-05-12T11:55:00Z',
            'endDateTime': '2023-05-12T12:50:00Z',
            'title': 'HISTOIRE-GEOGRAPHIE',
            'location': '00000',
            'locationComplement': null,
            'canceled': false
          },
          'relationships': {
            'teachers': {
              'data': [
                {
                  'id': 'PSKO-P-X',
                  'type': 'teacher'
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
          'id': '00000',
          'type': 'lesson',
          'attributes': {
            'startDateTime': '2023-05-04T14:00:00Z',
            'endDateTime': '2023-05-04T14:55:00Z',
            'title': 'HISTOIRE-GEOGRAPHIE',
            'location': '00000',
            'locationComplement': null,
            'canceled': false
          },
          'relationships': {
            'teachers': {
              'data': [
                {
                  'id': 'PSKO-P-X',
                  'type': 'teacher'
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
          'id': '00000',
          'type': 'lesson',
          'attributes': {
            'startDateTime': '2023-05-11T14:00:00Z',
            'endDateTime': '2023-05-11T14:55:00Z',
            'title': 'HISTOIRE-GEOGRAPHIE',
            'location': '00000',
            'locationComplement': null,
            'canceled': false
          },
          'relationships': {
            'teachers': {
              'data': [
                {
                  'id': 'PSKO-P-X',
                  'type': 'teacher'
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
          'id': '00000',
          'type': 'lesson',
          'attributes': {
            'startDateTime': '2023-05-15T08:10:00Z',
            'endDateTime': '2023-05-15T09:05:00Z',
            'title': 'HISTOIRE-GEOGRAPHIE',
            'location': '00000',
            'locationComplement': null,
            'canceled': false
          },
          'relationships': {
            'teachers': {
              'data': [
                {
                  'id': 'PSKO-P-X',
                  'type': 'teacher'
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
          'id': '00000',
          'type': 'lesson',
          'attributes': {
            'startDateTime': '2023-05-02T08:10:00Z',
            'endDateTime': '2023-05-02T09:05:00Z',
            'title': 'HISTOIRE-GEOGRAPHIE',
            'location': '00000',
            'locationComplement': null,
            'canceled': false
          },
          'relationships': {
            'teachers': {
              'data': [
                {
                  'id': 'PSKO-P-X',
                  'type': 'teacher'
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
          'id': '00000',
          'type': 'lesson',
          'attributes': {
            'startDateTime': '2023-05-09T08:10:00Z',
            'endDateTime': '2023-05-09T09:05:00Z',
            'title': 'HISTOIRE-GEOGRAPHIE',
            'location': '00000',
            'locationComplement': null,
            'canceled': false
          },
          'relationships': {
            'teachers': {
              'data': [
                {
                  'id': 'PSKO-P-X',
                  'type': 'teacher'
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
          'id': '00000',
          'type': 'lesson',
          'attributes': {
            'startDateTime': '2023-05-12T12:50:00Z',
            'endDateTime': '2023-05-12T13:45:00Z',
            'title': 'MATHS',
            'location': '00000',
            'locationComplement': null,
            'canceled': false
          },
          'relationships': {
            'teachers': {
              'data': [
                {
                  'id': 'PSKO-P-X',
                  'type': 'teacher'
                }
              ]
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
          'id': '00000',
          'type': 'lesson',
          'attributes': {
            'startDateTime': '2023-05-03T08:10:00Z',
            'endDateTime': '2023-05-03T09:05:00Z',
            'title': 'MATHS',
            'location': '00000',
            'locationComplement': null,
            'canceled': false
          },
          'relationships': {
            'teachers': {
              'data': [
                {
                  'id': 'PSKO-P-X',
                  'type': 'teacher'
                }
              ]
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
          'id': '00000',
          'type': 'lesson',
          'attributes': {
            'startDateTime': '2023-05-10T08:10:00Z',
            'endDateTime': '2023-05-10T09:05:00Z',
            'title': 'MATHS',
            'location': '00000',
            'locationComplement': null,
            'canceled': false
          },
          'relationships': {
            'teachers': {
              'data': [
                {
                  'id': 'PSKO-P-X',
                  'type': 'teacher'
                }
              ]
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
          'id': '00000',
          'type': 'lesson',
          'attributes': {
            'startDateTime': '2023-05-05T11:00:00Z',
            'endDateTime': '2023-05-05T11:55:00Z',
            'title': 'VIE DE CLASSE',
            'location': '00000',
            'locationComplement': null,
            'canceled': false
          },
          'relationships': {
            'teachers': {
              'data': [
                {
                  'id': 'PSKO-P-X',
                  'type': 'teacher'
                }
              ]
            },
            'subject': {
              'data': {
                'id': '1a9ba457a93543d0a5cdf1b81bc53123',
                'type': 'subject'
              }
            }
          }
        },
        {
          'id': '00000',
          'type': 'lesson',
          'attributes': {
            'startDateTime': '2023-05-12T11:00:00Z',
            'endDateTime': '2023-05-12T11:55:00Z',
            'title': 'VIE DE CLASSE',
            'location': '00000',
            'locationComplement': null,
            'canceled': false
          },
          'relationships': {
            'teachers': {
              'data': [
                {
                  'id': 'PSKO-P-X',
                  'type': 'teacher'
                }
              ]
            },
            'subject': {
              'data': {
                'id': '1a9ba457a93543d0a5cdf1b81bc53123',
                'type': 'subject'
              }
            }
          }
        },
        {
          'id': '00000',
          'type': 'lesson',
          'attributes': {
            'startDateTime': '2023-05-04T11:00:00Z',
            'endDateTime': '2023-05-04T11:55:00Z',
            'title': 'LATIN',
            'location': '00000',
            'locationComplement': null,
            'canceled': false
          },
          'relationships': {
            'teachers': {
              'data': [
                {
                  'id': 'PSKO-P-X',
                  'type': 'teacher'
                }
              ]
            },
            'subject': {
              'data': {
                'id': 'fcd026e0b2f74ac49781cbdae56dcc33',
                'type': 'subject'
              }
            }
          }
        },
        {
          'id': '00000',
          'type': 'lesson',
          'attributes': {
            'startDateTime': '2023-05-11T06:00:00Z',
            'endDateTime': '2023-05-11T06:55:00Z',
            'title': 'LATIN',
            'location': '00000',
            'locationComplement': null,
            'canceled': false
          },
          'relationships': {
            'teachers': {
              'data': [
                {
                  'id': 'PSKO-P-X',
                  'type': 'teacher'
                }
              ]
            },
            'subject': {
              'data': {
                'id': 'fcd026e0b2f74ac49781cbdae56dcc33',
                'type': 'subject'
              }
            }
          }
        },
        {
          'id': '00000',
          'type': 'lesson',
          'attributes': {
            'startDateTime': '2023-05-11T08:10:00Z',
            'endDateTime': '2023-05-11T09:05:00Z',
            'title': 'LATIN',
            'location': '00000',
            'locationComplement': null,
            'canceled': false
          },
          'relationships': {
            'teachers': {
              'data': [
                {
                  'id': 'PSKO-P-X',
                  'type': 'teacher'
                }
              ]
            },
            'subject': {
              'data': {
                'id': 'fcd026e0b2f74ac49781cbdae56dcc33',
                'type': 'subject'
              }
            }
          }
        },
        {
          'id': '00000',
          'type': 'lesson',
          'attributes': {
            'startDateTime': '2023-05-03T09:05:00Z',
            'endDateTime': '2023-05-03T10:00:00Z',
            'title': 'ALLEMAND LV2',
            'location': '00000',
            'locationComplement': null,
            'canceled': false
          },
          'relationships': {
            'teachers': {
              'data': [
                {
                  'id': 'PSKO-P-X',
                  'type': 'teacher'
                }
              ]
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
          'id': '00000',
          'type': 'lesson',
          'attributes': {
            'startDateTime': '2023-05-10T09:05:00Z',
            'endDateTime': '2023-05-10T10:00:00Z',
            'title': 'ALLEMAND LV2',
            'location': '00000',
            'locationComplement': null,
            'canceled': false
          },
          'relationships': {
            'teachers': {
              'data': [
                {
                  'id': 'PSKO-P-X',
                  'type': 'teacher'
                }
              ]
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
          'id': '00000',
          'type': 'lesson',
          'attributes': {
            'startDateTime': '2023-05-05T08:10:00Z',
            'endDateTime': '2023-05-05T09:05:00Z',
            'title': 'ALLEMAND LV2',
            'location': '00000',
            'locationComplement': null,
            'canceled': false
          },
          'relationships': {
            'teachers': {
              'data': [
                {
                  'id': 'PSKO-P-X',
                  'type': 'teacher'
                }
              ]
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
          'id': '00000',
          'type': 'lesson',
          'attributes': {
            'startDateTime': '2023-05-12T08:10:00Z',
            'endDateTime': '2023-05-12T09:05:00Z',
            'title': 'ALLEMAND LV2',
            'location': '00000',
            'locationComplement': null,
            'canceled': false
          },
          'relationships': {
            'teachers': {
              'data': [
                {
                  'id': 'PSKO-P-X',
                  'type': 'teacher'
                }
              ]
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
          'id': '00000',
          'type': 'lesson',
          'attributes': {
            'startDateTime': '2023-05-09T11:55:00Z',
            'endDateTime': '2023-05-09T12:50:00Z',
            'title': 'FRANCAIS',
            'location': '00000',
            'locationComplement': null,
            'canceled': false
          },
          'relationships': {
            'teachers': {
              'data': [
                {
                  'id': 'PSKO-P-X',
                  'type': 'teacher'
                }
              ]
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
          'id': '00000',
          'type': 'lesson',
          'attributes': {
            'startDateTime': '2023-05-02T12:50:00Z',
            'endDateTime': '2023-05-02T13:45:00Z',
            'title': 'MATHEMATIQUES',
            'location': '00000',
            'locationComplement': null,
            'canceled': false
          },
          'relationships': {
            'teachers': {
              'data': [
                {
                  'id': 'PSKO-P-X',
                  'type': 'teacher'
                }
              ]
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
          'id': '00000',
          'type': 'lesson',
          'attributes': {
            'startDateTime': '2023-05-09T12:50:00Z',
            'endDateTime': '2023-05-09T13:45:00Z',
            'title': 'MATHEMATIQUES',
            'location': '00000',
            'locationComplement': null,
            'canceled': false
          },
          'relationships': {
            'teachers': {
              'data': [
                {
                  'id': 'PSKO-P-X',
                  'type': 'teacher'
                }
              ]
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
          'id': '00000',
          'type': 'lesson',
          'attributes': {
            'startDateTime': '2023-05-05T09:05:00Z',
            'endDateTime': '2023-05-05T10:00:00Z',
            'title': 'ANGLAIS LV1',
            'location': '00000',
            'locationComplement': null,
            'canceled': false
          },
          'relationships': {
            'teachers': {
              'data': [
                {
                  'id': 'PSKO-P-X',
                  'type': 'teacher'
                }
              ]
            },
            'subject': {
              'data': {
                'id': 'a7d337bbde6e4e6a85cd3c4d6d012ee6',
                'type': 'subject'
              }
            }
          }
        },
        {
          'id': '00000',
          'type': 'lesson',
          'attributes': {
            'startDateTime': '2023-05-12T09:05:00Z',
            'endDateTime': '2023-05-12T10:00:00Z',
            'title': 'ANGLAIS LV1',
            'location': '00000',
            'locationComplement': null,
            'canceled': false
          },
          'relationships': {
            'teachers': {
              'data': [
                {
                  'id': 'PSKO-P-X',
                  'type': 'teacher'
                }
              ]
            },
            'subject': {
              'data': {
                'id': 'a7d337bbde6e4e6a85cd3c4d6d012ee6',
                'type': 'subject'
              }
            }
          }
        },
        {
          'id': '00000',
          'type': 'lesson',
          'attributes': {
            'startDateTime': '2023-05-15T06:55:00Z',
            'endDateTime': '2023-05-15T07:50:00Z',
            'title': 'ANGLAIS LV1',
            'location': '00000',
            'locationComplement': null,
            'canceled': false
          },
          'relationships': {
            'teachers': {
              'data': [
                {
                  'id': 'PSKO-P-X',
                  'type': 'teacher'
                }
              ]
            },
            'subject': {
              'data': {
                'id': 'a7d337bbde6e4e6a85cd3c4d6d012ee6',
                'type': 'subject'
              }
            }
          }
        },
        {
          'id': '00000',
          'type': 'lesson',
          'attributes': {
            'startDateTime': '2023-05-15T11:55:00Z',
            'endDateTime': '2023-05-15T12:50:00Z',
            'title': 'FRANCAIS',
            'location': '00000',
            'locationComplement': null,
            'canceled': false
          },
          'relationships': {
            'teachers': {
              'data': [
                {
                  'id': 'PSKO-P-X',
                  'type': 'teacher'
                }
              ]
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
          'id': '00000',
          'type': 'lesson',
          'attributes': {
            'startDateTime': '2023-05-15T12:50:00Z',
            'endDateTime': '2023-05-15T13:45:00Z',
            'title': 'EDUCATION MUSICALE',
            'location': '00000',
            'locationComplement': null,
            'canceled': false
          },
          'relationships': {
            'teachers': {
              'data': [
                {
                  'id': 'PSKO-P-X',
                  'type': 'teacher'
                }
              ]
            },
            'subject': {
              'data': {
                'id': 'cee533e860a14edca78c63c61dbc8d3a',
                'type': 'subject'
              }
            }
          }
        },
        {
          'id': '00000',
          'type': 'lesson',
          'attributes': {
            'startDateTime': '2023-05-02T14:00:00Z',
            'endDateTime': '2023-05-02T14:55:00Z',
            'title': 'ANGLAIS LV1',
            'location': '00000',
            'locationComplement': null,
            'canceled': false
          },
          'relationships': {
            'teachers': {
              'data': [
                {
                  'id': 'PSKO-P-X',
                  'type': 'teacher'
                }
              ]
            },
            'subject': {
              'data': {
                'id': 'a7d337bbde6e4e6a85cd3c4d6d012ee6',
                'type': 'subject'
              }
            }
          }
        },
        {
          'id': '00000',
          'type': 'lesson',
          'attributes': {
            'startDateTime': '2023-05-09T14:00:00Z',
            'endDateTime': '2023-05-09T14:55:00Z',
            'title': 'ANGLAIS LV1',
            'location': '00000',
            'locationComplement': null,
            'canceled': false
          },
          'relationships': {
            'teachers': {
              'data': [
                {
                  'id': 'PSKO-P-X',
                  'type': 'teacher'
                }
              ]
            },
            'subject': {
              'data': {
                'id': 'a7d337bbde6e4e6a85cd3c4d6d012ee6',
                'type': 'subject'
              }
            }
          }
        },
        {
          'id': '00000',
          'type': 'lesson',
          'attributes': {
            'startDateTime': '2023-05-03T06:55:00Z',
            'endDateTime': '2023-05-03T07:50:00Z',
            'title': 'ARTS PLASTIQUES',
            'location': '00000',
            'locationComplement': null,
            'canceled': false
          },
          'relationships': {
            'teachers': {
              'data': [
                {
                  'id': 'PSKO-P-X',
                  'type': 'teacher'
                }
              ]
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
          'id': '00000',
          'type': 'lesson',
          'attributes': {
            'startDateTime': '2023-05-10T06:55:00Z',
            'endDateTime': '2023-05-10T07:50:00Z',
            'title': 'ARTS PLASTIQUES',
            'location': '00000',
            'locationComplement': null,
            'canceled': false
          },
          'relationships': {
            'teachers': {
              'data': [
                {
                  'id': 'PSKO-P-X',
                  'type': 'teacher'
                }
              ]
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
          'id': '00000',
          'type': 'lesson',
          'attributes': {
            'startDateTime': '2023-05-05T06:55:00Z',
            'endDateTime': '2023-05-05T07:50:00Z',
            'title': 'MATHS',
            'location': '00000',
            'locationComplement': null,
            'canceled': false
          },
          'relationships': {
            'teachers': {
              'data': [
                {
                  'id': 'PSKO-P-X',
                  'type': 'teacher'
                }
              ]
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
          'id': '00000',
          'type': 'lesson',
          'attributes': {
            'startDateTime': '2023-05-12T06:55:00Z',
            'endDateTime': '2023-05-12T07:50:00Z',
            'title': 'MATHS',
            'location': '00000',
            'locationComplement': null,
            'canceled': false
          },
          'relationships': {
            'teachers': {
              'data': [
                {
                  'id': 'PSKO-P-X',
                  'type': 'teacher'
                }
              ]
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
          'id': '1a9ba457a93543d0a5cdf1b81bc53123',
          'type': 'subject',
          'attributes': {
            'label': 'VIE DE CLASSE',
            'color': '#008080'
          }
        },
        {
          'id': '22d26d6bbdb14361818e1f8eab025f1a',
          'type': 'subject',
          'attributes': {
            'label': 'ED.PHYSIQUE & SPORT',
            'color': '#ccd037'
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
          'id': 'a7d337bbde6e4e6a85cd3c4d6d012ee6',
          'type': 'subject',
          'attributes': {
            'label': 'ANGLAIS LV1',
            'color': '#00ffff'
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
          'id': 'cee533e860a14edca78c63c61dbc8d3a',
          'type': 'subject',
          'attributes': {
            'label': 'EDUCATION MUSICALE',
            'color': '#dfb6f8'
          }
        },
        {
          'id': 'd4db253a6cd04a0fb82244aa0ec31988',
          'type': 'subject',
          'attributes': {
            'label': 'TECHNO',
            'color': '#ffc4aa'
          }
        },
        {
          'id': 'fcd026e0b2f74ac49781cbdae56dcc33',
          'type': 'subject',
          'attributes': {
            'label': 'LATIN',
            'color': '#d7ffff'
          }
        },
        {
          'id': 'PSKO-P-X',
          'type': 'teacher',
          'attributes': {
            'title': 'M.',
            'firstName': 'X',
            'lastName': 'X',
            'photoUrl': null
          }
        },
        {
          'id': 'PSKO-P-X',
          'type': 'teacher',
          'attributes': {
            'title': 'Mme',
            'firstName': 'X',
            'lastName': 'X',
            'photoUrl': null
          }
        },
        {
          'id': 'PSKO-P-X',
          'type': 'teacher',
          'attributes': {
            'title': 'M.',
            'firstName': 'X',
            'lastName': 'X',
            'photoUrl': null
          }
        },
        {
          'id': 'PSKO-P-X',
          'type': 'teacher',
          'attributes': {
            'title': 'Mme',
            'firstName': 'X',
            'lastName': 'X',
            'photoUrl': null
          }
        },
        {
          'id': 'PSKO-P-X',
          'type': 'teacher',
          'attributes': {
            'title': 'M.',
            'firstName': 'X',
            'lastName': 'X',
            'photoUrl': null
          }
        },
        {
          'id': 'PSKO-P-X',
          'type': 'teacher',
          'attributes': {
            'title': 'Mme',
            'firstName': 'X',
            'lastName': 'X',
            'photoUrl': null
          }
        },
        {
          'id': 'PSKO-P-X',
          'type': 'teacher',
          'attributes': {
            'title': 'M.',
            'firstName': 'X',
            'lastName': 'X',
            'photoUrl': null
          }
        },
        {
          'id': 'PSKO-P-X',
          'type': 'teacher',
          'attributes': {
            'title': 'M.',
            'firstName': 'X',
            'lastName': 'X',
            'photoUrl': null
          }
        },
        {
          'id': 'PSKO-P-X',
          'type': 'teacher',
          'attributes': {
            'title': 'M.',
            'firstName': 'X',
            'lastName': 'X',
            'photoUrl': null
          }
        },
        {
          'id': 'PSKO-P-X',
          'type': 'teacher',
          'attributes': {
            'title': 'Mme',
            'firstName': 'X',
            'lastName': 'X',
            'photoUrl': null
          }
        },
        {
          'id': 'PSKO-P-X',
          'type': 'teacher',
          'attributes': {
            'title': 'Mme',
            'firstName': 'X',
            'lastName': 'X',
            'photoUrl': null
          }
        },
        {
          'id': 'PSKO-P-X',
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
        'first': 'http://bff-prod-ha/api/v1/bff-sko-app/agendas?page[limit]=20&include=lessons%2Clessons.subject%2Clessons.teachers%2ChomeworkAssignments%2ChomeworkAssignments.subject',
        'last': 'http://bff-prod-ha/api/v1/bff-sko-app/agendas?page[limit]=20&include=lessons%2Clessons.subject%2Clessons.teachers%2ChomeworkAssignments%2ChomeworkAssignments.subject'
      },
      'meta': {
        'totalResourceCount': 15
      }
    }
    expect<ExpectedType>(data).toBeDefined()
  })
})

