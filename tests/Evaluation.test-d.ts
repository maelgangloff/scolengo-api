import { expectAssignable } from 'tsd'
import { Evaluation, EvaluationIncluded } from '../src/models/Evaluation/Evaluation'
import { SkolengoResponse } from '../src/models/Globals'

expectAssignable<SkolengoResponse<Evaluation[], EvaluationIncluded>>({
  'data': [
    {
      'id': '0000',
      'type': 'evaluationService',
      'attributes': {
        'coefficient': 1,
        'average': null,
        'scale': 20,
        'studentAverage': null
      },
      'relationships': {
        'evaluations': {
          'data': []
        },
        'subject': {
          'data': {
            'id': '1a9ba457a93543d0a5cdf1b81bc53123',
            'type': 'subject'
          }
        },
        'teachers': {
          'data': [
            {
              'id': 'PSKO-P-8f5858ee-2aef-4282-aa5e-X',
              'type': 'teacher'
            }
          ]
        }
      }
    },
    {
      'id': '4776',
      'type': 'evaluationService',
      'attributes': {
        'coefficient': 1,
        'average': null,
        'scale': 20,
        'studentAverage': null
      },
      'relationships': {
        'evaluations': {
          'data': []
        },
        'subject': {
          'data': {
            'id': 'a7d337bbde6e4e6a85cd3c4d6d012ee6',
            'type': 'subject'
          }
        },
        'teachers': {
          'data': [
            {
              'id': 'PSKO-P-6eaad9d4-c40a-47bf-99c4-X',
              'type': 'teacher'
            },
            {
              'id': 'PSKO-P-21fafffe-e61a-421c-a2cc-X',
              'type': 'teacher'
            }
          ]
        }
      }
    },
    {
      'id': '4783',
      'type': 'evaluationService',
      'attributes': {
        'coefficient': 1,
        'average': null,
        'scale': 20,
        'studentAverage': null
      },
      'relationships': {
        'evaluations': {
          'data': []
        },
        'subject': {
          'data': {
            'id': '0c45bb6d0a724a6da01ac062428f1e43',
            'type': 'subject'
          }
        },
        'teachers': {
          'data': [
            {
              'id': 'PSKO-P-500164c1-8cf1-45bf-b3de-X',
              'type': 'teacher'
            },
            {
              'id': 'PSKO-P-556a6c0d-659a-458b-81f2-X',
              'type': 'teacher'
            }
          ]
        }
      }
    },
    {
      'id': '4862',
      'type': 'evaluationService',
      'attributes': {
        'coefficient': 1,
        'average': null,
        'scale': 20,
        'studentAverage': 15.5
      },
      'relationships': {
        'evaluations': {
          'data': [
            {
              'id': '25366',
              'type': 'evaluation'
            },
            {
              'id': '25513',
              'type': 'evaluation'
            }
          ]
        },
        'subject': {
          'data': {
            'id': 'aaef3f1b75d04d179544230f53849f35',
            'type': 'subject'
          }
        },
        'teachers': {
          'data': [
            {
              'id': 'PSKO-P-398b9ef2-5b41-45d7-8f38-X',
              'type': 'teacher'
            }
          ]
        }
      }
    },
    {
      'id': '4994',
      'type': 'evaluationService',
      'attributes': {
        'coefficient': 1,
        'average': null,
        'scale': 20,
        'studentAverage': 16.666666666666664
      },
      'relationships': {
        'evaluations': {
          'data': [
            {
              'id': '25447',
              'type': 'evaluation'
            },
            {
              'id': '25228',
              'type': 'evaluation'
            }
          ]
        },
        'subject': {
          'data': {
            'id': '3ce9205e72b448aaa4bfe1cc51e73593',
            'type': 'subject'
          }
        },
        'teachers': {
          'data': [
            {
              'id': 'PSKO-P-6ccf349e-8885-42d5-b5db-X',
              'type': 'teacher'
            }
          ]
        }
      }
    },
    {
      'id': '5008',
      'type': 'evaluationService',
      'attributes': {
        'coefficient': 1,
        'average': null,
        'scale': 20,
        'studentAverage': null
      },
      'relationships': {
        'evaluations': {
          'data': []
        },
        'subject': {
          'data': {
            'id': 'fcd026e0b2f74ac49781cbdae56dcc33',
            'type': 'subject'
          }
        },
        'teachers': {
          'data': [
            {
              'id': 'PSKO-P-21418f26-e1e1-4cf8-a0aa-X',
              'type': 'teacher'
            }
          ]
        }
      }
    },
    {
      'id': '5051',
      'type': 'evaluationService',
      'attributes': {
        'coefficient': 1,
        'average': null,
        'scale': 20,
        'studentAverage': 18.5
      },
      'relationships': {
        'evaluations': {
          'data': [
            {
              'id': '25643',
              'type': 'evaluation'
            },
            {
              'id': '25508',
              'type': 'evaluation'
            }
          ]
        },
        'subject': {
          'data': {
            'id': '0c45bb6d0a724a6da01ac062428f1e43',
            'type': 'subject'
          }
        },
        'teachers': {
          'data': [
            {
              'id': 'PSKO-P-500164c1-8cf1-45bf-b3de-X',
              'type': 'teacher'
            },
            {
              'id': 'PSKO-P-556a6c0d-659a-458b-81f2-X',
              'type': 'teacher'
            }
          ]
        }
      }
    },
    {
      'id': '5059',
      'type': 'evaluationService',
      'attributes': {
        'coefficient': 1,
        'average': null,
        'scale': 20,
        'studentAverage': null
      },
      'relationships': {
        'evaluations': {
          'data': []
        },
        'subject': {
          'data': {
            'id': 'c68e12a417b44fcf9fa30e6eabf3426b',
            'type': 'subject'
          }
        },
        'teachers': {
          'data': [
            {
              'id': 'PSKO-P-8653a2db-6c01-467c-b89b-X',
              'type': 'teacher'
            }
          ]
        }
      }
    },
    {
      'id': '5069',
      'type': 'evaluationService',
      'attributes': {
        'coefficient': 1,
        'average': null,
        'scale': 20,
        'studentAverage': null
      },
      'relationships': {
        'evaluations': {
          'data': []
        },
        'subject': {
          'data': {
            'id': '842fba9eabfb4ea29b89540af794e465',
            'type': 'subject'
          }
        },
        'teachers': {
          'data': [
            {
              'id': 'PSKO-P-347000ca-36db-4770-9a72-X',
              'type': 'teacher'
            }
          ]
        }
      }
    },
    {
      'id': '5074',
      'type': 'evaluationService',
      'attributes': {
        'coefficient': 1,
        'average': null,
        'scale': 20,
        'studentAverage': 17.333333333333336
      },
      'relationships': {
        'evaluations': {
          'data': [
            {
              'id': '25472',
              'type': 'evaluation'
            },
            {
              'id': '25518',
              'type': 'evaluation'
            }
          ]
        },
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
      'id': '5121',
      'type': 'evaluationService',
      'attributes': {
        'coefficient': 1,
        'average': null,
        'scale': 20,
        'studentAverage': 13.375
      },
      'relationships': {
        'evaluations': {
          'data': [
            {
              'id': '25531',
              'type': 'evaluation'
            },
            {
              'id': '25530',
              'type': 'evaluation'
            }
          ]
        },
        'subject': {
          'data': {
            'id': '15976bb5e3574543ab0333e41ab9b8d1',
            'type': 'subject'
          }
        },
        'teachers': {
          'data': [
            {
              'id': 'PSKO-P-8f5858ee-2aef-4282-aa5e-X',
              'type': 'teacher'
            }
          ]
        }
      }
    },
    {
      'id': '5123',
      'type': 'evaluationService',
      'attributes': {
        'coefficient': 1,
        'average': null,
        'scale': 20,
        'studentAverage': null
      },
      'relationships': {
        'evaluations': {
          'data': []
        },
        'subject': {
          'data': {
            'id': '22d26d6bbdb14361818e1f8eab025f1a',
            'type': 'subject'
          }
        },
        'teachers': {
          'data': [
            {
              'id': 'PSKO-P-6acf9f34-3d57-4e88-bcca-X',
              'type': 'teacher'
            }
          ]
        }
      }
    },
    {
      'id': '5154',
      'type': 'evaluationService',
      'attributes': {
        'coefficient': 1,
        'average': null,
        'scale': 20,
        'studentAverage': null
      },
      'relationships': {
        'evaluations': {
          'data': []
        },
        'subject': {
          'data': {
            'id': '15976bb5e3574543ab0333e41ab9b8d1',
            'type': 'subject'
          }
        },
        'teachers': {
          'data': [
            {
              'id': 'PSKO-P-8f5858ee-2aef-4282-aa5e-X',
              'type': 'teacher'
            }
          ]
        }
      }
    },
    {
      'id': '5208',
      'type': 'evaluationService',
      'attributes': {
        'coefficient': 1,
        'average': null,
        'scale': 20,
        'studentAverage': null
      },
      'relationships': {
        'evaluations': {
          'data': []
        },
        'subject': {
          'data': {
            'id': 'd4db253a6cd04a0fb82244aa0ec31988',
            'type': 'subject'
          }
        },
        'teachers': {
          'data': [
            {
              'id': 'PSKO-P-33aec52a-231f-4a17-b21c-X',
              'type': 'teacher'
            }
          ]
        }
      }
    },
    {
      'id': '5217',
      'type': 'evaluationService',
      'attributes': {
        'coefficient': 1,
        'average': null,
        'scale': 20,
        'studentAverage': null
      },
      'relationships': {
        'evaluations': {
          'data': []
        },
        'subject': {
          'data': {
            'id': '0c45bb6d0a724a6da01ac062428f1e43',
            'type': 'subject'
          }
        },
        'teachers': {
          'data': [
            {
              'id': 'PSKO-P-556a6c0d-659a-458b-81f2-X',
              'type': 'teacher'
            },
            {
              'id': 'PSKO-P-500164c1-8cf1-45bf-b3de-X',
              'type': 'teacher'
            }
          ]
        }
      }
    },
    {
      'id': '5385',
      'type': 'evaluationService',
      'attributes': {
        'coefficient': 1,
        'average': null,
        'scale': 20,
        'studentAverage': 16.333333333333336
      },
      'relationships': {
        'evaluations': {
          'data': [
            {
              'id': '25658',
              'type': 'evaluation'
            },
            {
              'id': '25659',
              'type': 'evaluation'
            }
          ]
        },
        'subject': {
          'data': {
            'id': 'cee533e860a14edca78c63c61dbc8d3a',
            'type': 'subject'
          }
        },
        'teachers': {
          'data': [
            {
              'id': 'PSKO-P-cb51337c-9f9f-478b-bbb6-X',
              'type': 'teacher'
            }
          ]
        }
      }
    }
  ],
  'included': [
    {
      'id': '25228',
      'type': 'evaluation',
      'attributes': {
        'title': null,
        'topic': null,
        'dateTime': '2023-03-20T23:00:00Z',
        'coefficient': 0.5,
        'min': null,
        'max': null,
        'average': null,
        'scale': 20
      },
      'relationships': {
        'subSkills': {
          'data': []
        },
        'evaluationResult': {
          'data': {
            'id': '428350',
            'type': 'evaluationResult'
          }
        }
      }
    },
    {
      'id': '25366',
      'type': 'evaluation',
      'attributes': {
        'title': null,
        'topic': null,
        'dateTime': '2023-03-27T22:00:00Z',
        'coefficient': 1,
        'min': null,
        'max': null,
        'average': null,
        'scale': 20
      },
      'relationships': {
        'subSkills': {
          'data': []
        },
        'evaluationResult': {
          'data': {
            'id': '430787',
            'type': 'evaluationResult'
          }
        }
      }
    },
    {
      'id': '25447',
      'type': 'evaluation',
      'attributes': {
        'title': null,
        'topic': null,
        'dateTime': '2023-03-31T22:00:00Z',
        'coefficient': 0.10000000149011612,
        'min': null,
        'max': null,
        'average': null,
        'scale': 10
      },
      'relationships': {
        'subSkills': {
          'data': []
        },
        'evaluationResult': {
          'data': {
            'id': '432106',
            'type': 'evaluationResult'
          }
        }
      }
    },
    {
      'id': '25472',
      'type': 'evaluation',
      'attributes': {
        'title': null,
        'topic': null,
        'dateTime': '2023-03-31T08:10:00Z',
        'coefficient': 0.5,
        'min': null,
        'max': null,
        'average': null,
        'scale': 20
      },
      'relationships': {
        'subSkills': {
          'data': []
        },
        'evaluationResult': {
          'data': {
            'id': '432528',
            'type': 'evaluationResult'
          }
        }
      }
    },
    {
      'id': '25508',
      'type': 'evaluation',
      'attributes': {
        'title': null,
        'topic': null,
        'dateTime': '2023-04-03T22:00:00Z',
        'coefficient': 2,
        'min': null,
        'max': null,
        'average': null,
        'scale': 20
      },
      'relationships': {
        'subSkills': {
          'data': []
        },
        'evaluationResult': {
          'data': {
            'id': '433105',
            'type': 'evaluationResult'
          }
        }
      }
    },
    {
      'id': '25513',
      'type': 'evaluation',
      'attributes': {
        'title': null,
        'topic': null,
        'dateTime': '2023-04-13T14:00:00Z',
        'coefficient': 1,
        'min': null,
        'max': null,
        'average': null,
        'scale': 20
      },
      'relationships': {
        'subSkills': {
          'data': []
        },
        'evaluationResult': {
          'data': {
            'id': '433212',
            'type': 'evaluationResult'
          }
        }
      }
    },
    {
      'id': '25518',
      'type': 'evaluation',
      'attributes': {
        'title': null,
        'topic': null,
        'dateTime': '2023-03-27T06:00:00Z',
        'coefficient': 1,
        'min': null,
        'max': null,
        'average': null,
        'scale': 20
      },
      'relationships': {
        'subSkills': {
          'data': []
        },
        'evaluationResult': {
          'data': {
            'id': '433302',
            'type': 'evaluationResult'
          }
        }
      }
    },
    {
      'id': '25530',
      'type': 'evaluation',
      'attributes': {
        'title': null,
        'topic': null,
        'dateTime': '2023-04-05T22:00:00Z',
        'coefficient': 2,
        'min': null,
        'max': null,
        'average': null,
        'scale': 60
      },
      'relationships': {
        'subSkills': {
          'data': []
        },
        'evaluationResult': {
          'data': {
            'id': '433540',
            'type': 'evaluationResult'
          }
        }
      }
    },
    {
      'id': '25531',
      'type': 'evaluation',
      'attributes': {
        'title': null,
        'topic': null,
        'dateTime': '2023-04-05T22:00:00Z',
        'coefficient': 2,
        'min': null,
        'max': null,
        'average': null,
        'scale': 40
      },
      'relationships': {
        'subSkills': {
          'data': []
        },
        'evaluationResult': {
          'data': {
            'id': '433562',
            'type': 'evaluationResult'
          }
        }
      }
    },
    {
      'id': '25643',
      'type': 'evaluation',
      'attributes': {
        'title': null,
        'topic': null,
        'dateTime': '2023-04-13T22:00:00Z',
        'coefficient': 2,
        'min': null,
        'max': null,
        'average': null,
        'scale': 20
      },
      'relationships': {
        'subSkills': {
          'data': []
        },
        'evaluationResult': {
          'data': {
            'id': '435528',
            'type': 'evaluationResult'
          }
        }
      }
    },
    {
      'id': '25658',
      'type': 'evaluation',
      'attributes': {
        'title': null,
        'topic': null,
        'dateTime': '2023-04-03T12:50:00Z',
        'coefficient': 1,
        'min': null,
        'max': null,
        'average': null,
        'scale': 20
      },
      'relationships': {
        'subSkills': {
          'data': []
        },
        'evaluationResult': {
          'data': {
            'id': '435837',
            'type': 'evaluationResult'
          }
        }
      }
    },
    {
      'id': '25659',
      'type': 'evaluation',
      'attributes': {
        'title': null,
        'topic': null,
        'dateTime': '2023-04-03T12:50:00Z',
        'coefficient': 1,
        'min': null,
        'max': null,
        'average': null,
        'scale': 10
      },
      'relationships': {
        'subSkills': {
          'data': []
        },
        'evaluationResult': {
          'data': {
            'id': '435859',
            'type': 'evaluationResult'
          }
        }
      }
    },
    {
      'id': '428350',
      'type': 'evaluationResult',
      'attributes': {
        'mark': 16,
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
      'id': '430787',
      'type': 'evaluationResult',
      'attributes': {
        'mark': 15.5,
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
      'id': '432106',
      'type': 'evaluationResult',
      'attributes': {
        'mark': 10,
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
      'id': '432528',
      'type': 'evaluationResult',
      'attributes': {
        'mark': 18,
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
      'id': '433105',
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
      'id': '433212',
      'type': 'evaluationResult',
      'attributes': {
        'mark': null,
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
      'id': '433540',
      'type': 'evaluationResult',
      'attributes': {
        'mark': 37.5,
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
      'id': '433562',
      'type': 'evaluationResult',
      'attributes': {
        'mark': 28.5,
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
      'id': '435528',
      'type': 'evaluationResult',
      'attributes': {
        'mark': 20,
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
      'id': '435837',
      'type': 'evaluationResult',
      'attributes': {
        'mark': 16.5,
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
      'id': '435859',
      'type': 'evaluationResult',
      'attributes': {
        'mark': 8,
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
      'id': '0c45bb6d0a724a6da01ac062428f1e43',
      'type': 'subject',
      'attributes': {
        'label': 'MATHS',
        'color': '4a87ca'
      }
    },
    {
      'id': '15976bb5e3574543ab0333e41ab9b8d1',
      'type': 'subject',
      'attributes': {
        'label': 'FRANCAIS',
        'color': 'ffff00'
      }
    },
    {
      'id': '1a9ba457a93543d0a5cdf1b81bc53123',
      'type': 'subject',
      'attributes': {
        'label': 'VIE DE CLASSE',
        'color': '008080'
      }
    },
    {
      'id': '22d26d6bbdb14361818e1f8eab025f1a',
      'type': 'subject',
      'attributes': {
        'label': 'ED.PHYSIQUE & SPORT',
        'color': 'ccd037'
      }
    },
    {
      'id': '3ce9205e72b448aaa4bfe1cc51e73593',
      'type': 'subject',
      'attributes': {
        'label': 'PHYSIQUE-CHIMIE',
        'color': '008000'
      }
    },
    {
      'id': '842fba9eabfb4ea29b89540af794e465',
      'type': 'subject',
      'attributes': {
        'label': 'ARTS PLASTIQUES',
        'color': 'd9dbc6'
      }
    },
    {
      'id': 'a7d337bbde6e4e6a85cd3c4d6d012ee6',
      'type': 'subject',
      'attributes': {
        'label': 'ANGLAIS LV1',
        'color': '00ffff'
      }
    },
    {
      'id': 'aaef3f1b75d04d179544230f53849f35',
      'type': 'subject',
      'attributes': {
        'label': 'HISTOIRE-GEOGRAPHIE',
        'color': '874b94'
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
      'id': 'c68e12a417b44fcf9fa30e6eabf3426b',
      'type': 'subject',
      'attributes': {
        'label': 'SCIENCES VIE & TERRE',
        'color': 'ff00ff'
      }
    },
    {
      'id': 'cee533e860a14edca78c63c61dbc8d3a',
      'type': 'subject',
      'attributes': {
        'label': 'EDUCATION MUSICALE',
        'color': 'dfb6f8'
      }
    },
    {
      'id': 'd4db253a6cd04a0fb82244aa0ec31988',
      'type': 'subject',
      'attributes': {
        'label': 'TECHNO',
        'color': 'ffc4aa'
      }
    },
    {
      'id': 'fcd026e0b2f74ac49781cbdae56dcc33',
      'type': 'subject',
      'attributes': {
        'label': 'LATIN',
        'color': 'd7ffff'
      }
    },
    {
      'id': 'PSKO-P-21418f26-e1e1-4cf8-a0aa-927d11c9c659',
      'type': 'teacher',
      'attributes': {
        'title': 'M.',
        'firstName': 'X',
        'lastName': 'X',
        'photoUrl': null
      }
    },
    {
      'id': 'PSKO-P-21fafffe-e61a-421c-a2cc-X',
      'type': 'teacher',
      'attributes': {
        'title': 'Mme',
        'firstName': 'X',
        'lastName': 'X-X',
        'photoUrl': null
      }
    },
    {
      'id': 'PSKO-P-33aec52a-231f-4a17-b21c-X',
      'type': 'teacher',
      'attributes': {
        'title': 'M.',
        'firstName': 'X',
        'lastName': 'X',
        'photoUrl': null
      }
    },
    {
      'id': 'PSKO-P-347000ca-36db-4770-9a72-X',
      'type': 'teacher',
      'attributes': {
        'title': 'Mme',
        'firstName': 'X X',
        'lastName': 'X X',
        'photoUrl': null
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
    },
    {
      'id': 'PSKO-P-500164c1-8cf1-45bf-b3de-X',
      'type': 'teacher',
      'attributes': {
        'title': 'Mme',
        'firstName': 'X',
        'lastName': 'X X',
        'photoUrl': null
      }
    },
    {
      'id': 'PSKO-P-556a6c0d-659a-458b-81f2-X',
      'type': 'teacher',
      'attributes': {
        'title': 'M.',
        'firstName': 'X',
        'lastName': 'X',
        'photoUrl': null
      }
    },
    {
      'id': 'PSKO-P-6acf9f34-3d57-4e88-bcca-X',
      'type': 'teacher',
      'attributes': {
        'title': 'M.',
        'firstName': 'X',
        'lastName': 'X',
        'photoUrl': null
      }
    },
    {
      'id': 'PSKO-P-6ccf349e-8885-42d5-b5db-X',
      'type': 'teacher',
      'attributes': {
        'title': 'M.',
        'firstName': 'X',
        'lastName': 'X',
        'photoUrl': null
      }
    },
    {
      'id': 'PSKO-P-6eaad9d4-c40a-47bf-99c4-X',
      'type': 'teacher',
      'attributes': {
        'title': 'Mme',
        'firstName': 'X',
        'lastName': 'X X',
        'photoUrl': null
      }
    },
    {
      'id': 'PSKO-P-8653a2db-6c01-467c-b89b-X',
      'type': 'teacher',
      'attributes': {
        'title': 'M.',
        'firstName': 'X',
        'lastName': 'X',
        'photoUrl': null
      }
    },
    {
      'id': 'PSKO-P-8f5858ee-2aef-4282-aa5e-X',
      'type': 'teacher',
      'attributes': {
        'title': 'Mme',
        'firstName': 'X',
        'lastName': 'X',
        'photoUrl': null
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
    },
    {
      'id': 'PSKO-P-cb51337c-9f9f-478b-bbb6-X',
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
    'first': 'http://bff-prod-ha/api/v1/bff-sko-app/evaluation-services?page[limit]=20&include=subject%2Cevaluations%2Cevaluations.evaluationResult%2Cevaluations.evaluationResult.subSkillsEvaluationResults%2Cevaluations.evaluationResult.subSkillsEvaluationResults.subSkill%2Cevaluations.subSkills%2Cteachers&filter[student.id]=ESKO-P-b2c86113-1062-427e-bc7f-X&filter[period.id]=47',
    'last': 'http://bff-prod-ha/api/v1/bff-sko-app/evaluation-services?page[limit]=20&include=subject%2Cevaluations%2Cevaluations.evaluationResult%2Cevaluations.evaluationResult.subSkillsEvaluationResults%2Cevaluations.evaluationResult.subSkillsEvaluationResults.subSkill%2Cevaluations.subSkills%2Cteachers&filter[student.id]=ESKO-P-b2c86113-1062-427e-bc7f-X&filter[period.id]=47'
  },
  'meta': {
    'totalResourceCount': 16
  }
})
