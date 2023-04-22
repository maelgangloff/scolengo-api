import { expectAssignable } from 'tsd'
import { SkolengoResponse } from '../src/models/Globals'
import { UsersMailSettings, UsersMailSettingsIncluded } from '../src/models/Messagerie/UsersMailSettings'

expectAssignable<SkolengoResponse<UsersMailSettings, UsersMailSettingsIncluded>>({
  'data': {
    'id': 'RSKO-X',
    'type': 'userMailSetting',
    'attributes': {
      'maxCharsInParticipationContent': 10000,
      'maxCharsInCommunicationSubject': 255
    },
    'relationships': {
      'folders': {
        'data': [
          {
            'id': 'X',
            'type': 'folder'
          },
          {
            'id': 'X',
            'type': 'folder'
          },
          {
            'id': 'X',
            'type': 'folder'
          },
          {
            'id': 'X',
            'type': 'folder'
          },
          {
            'id': 'X',
            'type': 'folder'
          },
          {
            'id': 'X',
            'type': 'folder'
          }
        ]
      },
      'signature': {
        'data': {
          'id': 'RSKO-X',
          'type': 'signature'
        }
      },
      'contacts': {
        'data': [
          {
            'id': 'PSKO-X',
            'type': 'personContact'
          },
          {
            'id': 'NSKO-X',
            'type': 'personContact'
          },
          {
            'id': 'NSKO-X',
            'type': 'personContact'
          },
          {
            'id': 'PSKO-X',
            'type': 'personContact'
          },
          {
            'id': 'NSKO-X',
            'type': 'personContact'
          },
          {
            'id': 'PSKO-X',
            'type': 'personContact'
          },
          {
            'id': 'NSKO-X',
            'type': 'personContact'
          },
          {
            'id': 'NSKO-X',
            'type': 'personContact'
          },
          {
            'id': 'PSKO-X',
            'type': 'personContact'
          },
          {
            'id': 'PSKO-X',
            'type': 'personContact'
          },
          {
            'id': 'PSKO-X',
            'type': 'personContact'
          },
          {
            'id': 'NSKO-X',
            'type': 'personContact'
          },
          {
            'id': 'PSKO-X',
            'type': 'personContact'
          },
          {
            'id': 'NSKO-X',
            'type': 'personContact'
          },
          {
            'id': 'NSKO-X',
            'type': 'personContact'
          },
          {
            'id': 'PSKO-X',
            'type': 'personContact'
          },
          {
            'id': 'NSKO-X',
            'type': 'personContact'
          },
          {
            'id': 'PSKO-X',
            'type': 'personContact'
          },
          {
            'id': 'PSKO-X',
            'type': 'personContact'
          },
          {
            'id': 'NSKO-X',
            'type': 'personContact'
          },
          {
            'id': 'NSKO-X',
            'type': 'personContact'
          },
          {
            'id': 'PSKO-X',
            'type': 'personContact'
          },
          {
            'id': 'PSKO-X',
            'type': 'personContact'
          },
          {
            'id': 'NSKO-X',
            'type': 'personContact'
          },
          {
            'id': 'NSKO-X',
            'type': 'personContact'
          },
          {
            'id': 'NSKO-X',
            'type': 'personContact'
          },
          {
            'id': 'NSKO-X',
            'type': 'personContact'
          },
          {
            'id': 'NSKO-X',
            'type': 'personContact'
          },
          {
            'id': 'PSKO-X',
            'type': 'personContact'
          },
          {
            'id': 'NSKO-X',
            'type': 'personContact'
          },
          {
            'id': 'PSKO-X',
            'type': 'personContact'
          },
          {
            'id': 'PSKO-X',
            'type': 'personContact'
          },
          {
            'id': 'NSKO-X',
            'type': 'personContact'
          },
          {
            'id': 'NSKO-X',
            'type': 'personContact'
          },
          {
            'id': 'NSKO-X',
            'type': 'personContact'
          },
          {
            'id': 'ESKO-X',
            'type': 'personContact'
          },
          {
            'id': 'SPHERE:1-SOUS_GROUPE:SousGroupeProfessionnelDirection_CHEF_ETAB-CODE_ETABLISSEMENT:20485',
            'type': 'groupContact'
          },
          {
            'id': 'SPHERE:1-SOUS_GROUPE:SousGroupeProfessionnelAutres_CONSEILLER_ORIENTATION-CODE_ETABLISSEMENT:20485',
            'type': 'groupContact'
          },
          {
            'id': 'SPHERE:1-SOUS_GROUPE:SousGroupeProfessionnelVieScolaire_ASSISTANTS_EDUCATION-CODE_ETABLISSEMENT:20485',
            'type': 'groupContact'
          },
          {
            'id': 'SPHERE:1-SOUS_GROUPE:SousGroupeProfessionnelAutres_SECRETAIRES-CODE_ETABLISSEMENT:20485',
            'type': 'groupContact'
          },
          {
            'id': 'SPHERE:1-SOUS_GROUPE:SousGroupeProfessionnelAutres_CDT_INDUSTRIEL-CODE_ETABLISSEMENT:20485',
            'type': 'groupContact'
          },
          {
            'id': 'SPHERE:3-TYPE:ENFANTS-UID:null',
            'type': 'groupContact'
          },
          {
            'id': 'SPHERE:1-SOUS_GROUPE:SousGroupeProfessionnelVieScolaire_CPE-CODE_ETABLISSEMENT:20485',
            'type': 'groupContact'
          },
          {
            'id': 'SPHERE:1-SOUS_GROUPE:SousGroupeProfessionnelDirection_CHEF_ETAB_ADJ-CODE_ETABLISSEMENT:20485',
            'type': 'groupContact'
          },
          {
            'id': 'SPHERE:1-SOUS_GROUPE:SousGroupeProfessionnelAutres_MEDICAL-CODE_ETABLISSEMENT:20485',
            'type': 'groupContact'
          },
          {
            'id': 'SPHERE:1-SOUS_GROUPE:SousGroupeProfessionnelAutres_CDT_TERTIAIRE-CODE_ETABLISSEMENT:20485',
            'type': 'groupContact'
          },
          {
            'id': 'SPHERE:1-SOUS_GROUPE:SousGroupeProfessionnelAutres_DOCUMENTALISTE-CODE_ETABLISSEMENT:20485',
            'type': 'groupContact'
          },
          {
            'id': 'SPHERE:1-SOUS_GROUPE:SousGroupeProfessionnelDirection_ADJOINT_GESTIONNAIRE-CODE_ETABLISSEMENT:20485',
            'type': 'groupContact'
          },
          {
            'id': 'SPHERE:1-SOUS_GROUPE:SousGroupeProfessionnelAutres_ASSISTANTE_SOCIALE-CODE_ETABLISSEMENT:20485',
            'type': 'groupContact'
          },
          {
            'id': 'SPHERE:1-SOUS_GROUPE:SousGroupeProfessionnelPopulation_ADMINISTRATION-CODE_ETABLISSEMENT:20485',
            'type': 'groupContact'
          },
          {
            'id': 'SPHERE:4-SOUS_GROUPE:SousGroupePedagogiqueParent_LES_ENSEIGNANTS_DE_MES_ENFANTS-CODE_PROFIL:Parent-CODE_GROUPE:20485~3eme2-CODE_PERSONNE:X',
            'type': 'groupContact'
          }
        ]
      }
    }
  },
  'included': [
    {
      'id': '7594388',
      'type': 'folder',
      'attributes': {
        'name': 'Reçus',
        'position': 1,
        'type': 'INBOX'
      },
      'relationships': {
        'parent': {
          'data': null
        }
      }
    },
    {
      'id': '7679663',
      'type': 'folder',
      'attributes': {
        'name': 'Envoyés',
        'position': 2,
        'type': 'SENT'
      },
      'relationships': {
        'parent': {
          'data': null
        }
      }
    },
    {
      'id': '7679664',
      'type': 'folder',
      'attributes': {
        'name': 'Brouillons',
        'position': 3,
        'type': 'DRAFTS'
      },
      'relationships': {
        'parent': {
          'data': null
        }
      }
    },
    {
      'id': '7679665',
      'type': 'folder',
      'attributes': {
        'name': 'Modération',
        'position': 4,
        'type': 'MODERATION'
      },
      'relationships': {
        'parent': {
          'data': null
        }
      }
    },
    {
      'id': '7679666',
      'type': 'folder',
      'attributes': {
        'name': 'Corbeille',
        'position': 6,
        'type': 'TRASH'
      },
      'relationships': {
        'parent': {
          'data': null
        }
      }
    },
    {
      'id': '7679736',
      'type': 'folder',
      'attributes': {
        'name': 'Archives',
        'position': 7,
        'type': 'PERSONAL'
      },
      'relationships': {
        'parent': {
          'data': null
        }
      }
    },
    {
      'id': 'SPHERE:1-SOUS_GROUPE:SousGroupeProfessionnelAutres_ASSISTANTE_SOCIALE-CODE_ETABLISSEMENT:20485',
      'type': 'groupContact',
      'attributes': {
        'label': 'Assistante sociale',
        'linksWithUser': [
          {
            'description': null,
            'additionalInfo': [],
            'type': 'SCHOOL',
            'schoolId': 'SKO-E-a4145cfd-5070-4ec0-b6db-ce179e4d39c7'
          }
        ]
      },
      'relationships': {
        'personContacts': {
          'data': [
            {
              'id': 'NSKO-X',
              'type': 'personContact'
            }
          ]
        }
      }
    },
    {
      'id': 'SPHERE:1-SOUS_GROUPE:SousGroupeProfessionnelAutres_CDT_INDUSTRIEL-CODE_ETABLISSEMENT:20485',
      'type': 'groupContact',
      'attributes': {
        'label': 'DDFPT industriel',
        'linksWithUser': null
      },
      'relationships': {
        'personContacts': {
          'data': []
        }
      }
    },
    {
      'id': 'SPHERE:1-SOUS_GROUPE:SousGroupeProfessionnelAutres_CDT_TERTIAIRE-CODE_ETABLISSEMENT:20485',
      'type': 'groupContact',
      'attributes': {
        'label': 'DDFPT tertiaire',
        'linksWithUser': null
      },
      'relationships': {
        'personContacts': {
          'data': []
        }
      }
    },
    {
      'id': 'SPHERE:1-SOUS_GROUPE:SousGroupeProfessionnelAutres_CONSEILLER_ORIENTATION-CODE_ETABLISSEMENT:20485',
      'type': 'groupContact',
      'attributes': {
        'label': 'Psychologue',
        'linksWithUser': [
          {
            'description': null,
            'additionalInfo': [],
            'type': 'SCHOOL',
            'schoolId': 'SKO-E-a4145cfd-5070-4ec0-b6db-ce179e4d39c7'
          }
        ]
      },
      'relationships': {
        'personContacts': {
          'data': [
            {
              'id': 'NSKO-X',
              'type': 'personContact'
            },
            {
              'id': 'NSKO-X',
              'type': 'personContact'
            },
            {
              'id': 'NSKO-X',
              'type': 'personContact'
            },
            {
              'id': 'NSKO-X',
              'type': 'personContact'
            }
          ]
        }
      }
    },
    {
      'id': 'SPHERE:1-SOUS_GROUPE:SousGroupeProfessionnelAutres_DOCUMENTALISTE-CODE_ETABLISSEMENT:20485',
      'type': 'groupContact',
      'attributes': {
        'label': 'Documentaliste',
        'linksWithUser': [
          {
            'description': null,
            'additionalInfo': [],
            'type': 'SCHOOL',
            'schoolId': 'SKO-E-a4145cfd-5070-4ec0-b6db-ce179e4d39c7'
          }
        ]
      },
      'relationships': {
        'personContacts': {
          'data': [
            {
              'id': 'PSKO-X',
              'type': 'personContact'
            }
          ]
        }
      }
    },
    {
      'id': 'SPHERE:1-SOUS_GROUPE:SousGroupeProfessionnelAutres_MEDICAL-CODE_ETABLISSEMENT:20485',
      'type': 'groupContact',
      'attributes': {
        'label': 'Personnels médicaux',
        'linksWithUser': [
          {
            'description': null,
            'additionalInfo': [],
            'type': 'SCHOOL',
            'schoolId': 'SKO-E-a4145cfd-5070-4ec0-b6db-ce179e4d39c7'
          }
        ]
      },
      'relationships': {
        'personContacts': {
          'data': [
            {
              'id': 'NSKO-X',
              'type': 'personContact'
            },
            {
              'id': 'NSKO-X',
              'type': 'personContact'
            }
          ]
        }
      }
    },
    {
      'id': 'SPHERE:1-SOUS_GROUPE:SousGroupeProfessionnelAutres_SECRETAIRES-CODE_ETABLISSEMENT:20485',
      'type': 'groupContact',
      'attributes': {
        'label': 'Secrétaires',
        'linksWithUser': [
          {
            'description': null,
            'additionalInfo': [],
            'type': 'SCHOOL',
            'schoolId': 'SKO-E-a4145cfd-5070-4ec0-b6db-ce179e4d39c7'
          }
        ]
      },
      'relationships': {
        'personContacts': {
          'data': [
            {
              'id': 'NSKO-X',
              'type': 'personContact'
            },
            {
              'id': 'NSKO-X',
              'type': 'personContact'
            }
          ]
        }
      }
    },
    {
      'id': 'SPHERE:1-SOUS_GROUPE:SousGroupeProfessionnelDirection_ADJOINT_GESTIONNAIRE-CODE_ETABLISSEMENT:20485',
      'type': 'groupContact',
      'attributes': {
        'label': 'Adjoint gestionnaire',
        'linksWithUser': [
          {
            'description': null,
            'additionalInfo': [],
            'type': 'SCHOOL',
            'schoolId': 'SKO-E-a4145cfd-5070-4ec0-b6db-ce179e4d39c7'
          }
        ]
      },
      'relationships': {
        'personContacts': {
          'data': [
            {
              'id': 'NSKO-X',
              'type': 'personContact'
            }
          ]
        }
      }
    },
    {
      'id': 'SPHERE:1-SOUS_GROUPE:SousGroupeProfessionnelDirection_CHEF_ETAB-CODE_ETABLISSEMENT:20485',
      'type': 'groupContact',
      'attributes': {
        'label': 'Chef d\'établissement',
        'linksWithUser': [
          {
            'description': null,
            'additionalInfo': [],
            'type': 'SCHOOL',
            'schoolId': 'SKO-E-a4145cfd-5070-4ec0-b6db-ce179e4d39c7'
          }
        ]
      },
      'relationships': {
        'personContacts': {
          'data': [
            {
              'id': 'NSKO-X',
              'type': 'personContact'
            }
          ]
        }
      }
    },
    {
      'id': 'SPHERE:1-SOUS_GROUPE:SousGroupeProfessionnelDirection_CHEF_ETAB_ADJ-CODE_ETABLISSEMENT:20485',
      'type': 'groupContact',
      'attributes': {
        'label': 'Chef d\'établissement adjoint',
        'linksWithUser': [
          {
            'description': null,
            'additionalInfo': [],
            'type': 'SCHOOL',
            'schoolId': 'SKO-E-a4145cfd-5070-4ec0-b6db-ce179e4d39c7'
          }
        ]
      },
      'relationships': {
        'personContacts': {
          'data': [
            {
              'id': 'NSKO-X',
              'type': 'personContact'
            },
            {
              'id': 'NSKO-X',
              'type': 'personContact'
            }
          ]
        }
      }
    },
    {
      'id': 'SPHERE:1-SOUS_GROUPE:SousGroupeProfessionnelPopulation_ADMINISTRATION-CODE_ETABLISSEMENT:20485',
      'type': 'groupContact',
      'attributes': {
        'label': 'Administration',
        'linksWithUser': [
          {
            'description': null,
            'additionalInfo': [],
            'type': 'SCHOOL',
            'schoolId': 'SKO-E-a4145cfd-5070-4ec0-b6db-ce179e4d39c7'
          }
        ]
      },
      'relationships': {
        'personContacts': {
          'data': [
            {
              'id': 'NSKO-X',
              'type': 'personContact'
            },
            {
              'id': 'NSKO-X',
              'type': 'personContact'
            },
            {
              'id': 'NSKO-X',
              'type': 'personContact'
            },
            {
              'id': 'NSKO-X',
              'type': 'personContact'
            }
          ]
        }
      }
    },
    {
      'id': 'SPHERE:1-SOUS_GROUPE:SousGroupeProfessionnelVieScolaire_ASSISTANTS_EDUCATION-CODE_ETABLISSEMENT:20485',
      'type': 'groupContact',
      'attributes': {
        'label': 'Assistants d\'éducation',
        'linksWithUser': [
          {
            'description': null,
            'additionalInfo': [],
            'type': 'SCHOOL',
            'schoolId': 'SKO-E-a4145cfd-5070-4ec0-b6db-ce179e4d39c7'
          }
        ]
      },
      'relationships': {
        'personContacts': {
          'data': [
            {
              'id': 'NSKO-X',
              'type': 'personContact'
            },
            {
              'id': 'NSKO-X',
              'type': 'personContact'
            },
            {
              'id': 'NSKO-X',
              'type': 'personContact'
            },
            {
              'id': 'NSKO-X',
              'type': 'personContact'
            },
            {
              'id': 'NSKO-X',
              'type': 'personContact'
            },
            {
              'id': 'NSKO-X',
              'type': 'personContact'
            }
          ]
        }
      }
    },
    {
      'id': 'SPHERE:1-SOUS_GROUPE:SousGroupeProfessionnelVieScolaire_CPE-CODE_ETABLISSEMENT:20485',
      'type': 'groupContact',
      'attributes': {
        'label': 'CPE',
        'linksWithUser': [
          {
            'description': null,
            'additionalInfo': [],
            'type': 'SCHOOL',
            'schoolId': 'SKO-E-a4145cfd-5070-4ec0-b6db-ce179e4d39c7'
          }
        ]
      },
      'relationships': {
        'personContacts': {
          'data': [
            {
              'id': 'NSKO-X',
              'type': 'personContact'
            }
          ]
        }
      }
    },
    {
      'id': 'SPHERE:3-TYPE:ENFANTS-UID:null',
      'type': 'groupContact',
      'attributes': {
        'label': 'Mes enfants',
        'linksWithUser': [
          {
            'description': null,
            'additionalInfo': [],
            'type': 'FAMILY'
          }
        ]
      },
      'relationships': {
        'personContacts': {
          'data': [
            {
              'id': 'ESKO-X',
              'type': 'personContact'
            }
          ]
        }
      }
    },
    {
      'id': 'SPHERE:4-SOUS_GROUPE:SousGroupePedagogiqueParent_LES_ENSEIGNANTS_DE_MES_ENFANTS-CODE_PROFIL:Parent-CODE_GROUPE:20485~3eme2-CODE_PERSONNE:X',
      'type': 'groupContact',
      'attributes': {
        'label': 'X X',
        'linksWithUser': [
          {
            'description': null,
            'additionalInfo': [],
            'type': 'STUDENT',
            'studentId': 'ESKO-X'
          }
        ]
      },
      'relationships': {
        'personContacts': {
          'data': [
            {
              'id': 'PSKO-X',
              'type': 'personContact'
            },
            {
              'id': 'PSKO-X',
              'type': 'personContact'
            },
            {
              'id': 'PSKO-X',
              'type': 'personContact'
            },
            {
              'id': 'PSKO-X',
              'type': 'personContact'
            },
            {
              'id': 'PSKO-X',
              'type': 'personContact'
            },
            {
              'id': 'PSKO-X',
              'type': 'personContact'
            },
            {
              'id': 'PSKO-X',
              'type': 'personContact'
            },
            {
              'id': 'PSKO-X',
              'type': 'personContact'
            },
            {
              'id': 'PSKO-X',
              'type': 'personContact'
            },
            {
              'id': 'PSKO-X',
              'type': 'personContact'
            },
            {
              'id': 'PSKO-X',
              'type': 'personContact'
            },
            {
              'id': 'PSKO-X',
              'type': 'personContact'
            },
            {
              'id': 'PSKO-X',
              'type': 'personContact'
            },
            {
              'id': 'PSKO-X',
              'type': 'personContact'
            }
          ]
        }
      }
    },
    {
      'id': 'NSKO-X',
      'type': 'nonTeachingStaff',
      'attributes': {
        'title': 'Mme',
        'firstName': 'X',
        'lastName': 'X',
        'photoUrl': null
      }
    },
    {
      'id': 'NSKO-X',
      'type': 'nonTeachingStaff',
      'attributes': {
        'title': 'M.',
        'firstName': 'X',
        'lastName': 'X',
        'photoUrl': null
      }
    },
    {
      'id': 'NSKO-X',
      'type': 'nonTeachingStaff',
      'attributes': {
        'title': 'Mme',
        'firstName': 'X',
        'lastName': 'X',
        'photoUrl': null
      }
    },
    {
      'id': 'NSKO-X',
      'type': 'nonTeachingStaff',
      'attributes': {
        'title': 'Mme',
        'firstName': 'X',
        'lastName': 'X',
        'photoUrl': null
      }
    },
    {
      'id': 'NSKO-X',
      'type': 'nonTeachingStaff',
      'attributes': {
        'title': 'Mme',
        'firstName': 'X',
        'lastName': 'X',
        'photoUrl': null
      }
    },
    {
      'id': 'NSKO-X',
      'type': 'nonTeachingStaff',
      'attributes': {
        'title': 'Mme',
        'firstName': 'X',
        'lastName': 'X',
        'photoUrl': null
      }
    },
    {
      'id': 'NSKO-X',
      'type': 'nonTeachingStaff',
      'attributes': {
        'title': 'Mme',
        'firstName': 'X',
        'lastName': 'X',
        'photoUrl': null
      }
    },
    {
      'id': 'NSKO-X',
      'type': 'nonTeachingStaff',
      'attributes': {
        'title': 'M.',
        'firstName': 'X',
        'lastName': 'X',
        'photoUrl': null
      }
    },
    {
      'id': 'NSKO-X',
      'type': 'nonTeachingStaff',
      'attributes': {
        'title': 'Mme',
        'firstName': 'X',
        'lastName': 'X',
        'photoUrl': null
      }
    },
    {
      'id': 'NSKO-X',
      'type': 'nonTeachingStaff',
      'attributes': {
        'title': 'Mme',
        'firstName': 'X',
        'lastName': 'X',
        'photoUrl': null
      }
    },
    {
      'id': 'NSKO-X',
      'type': 'nonTeachingStaff',
      'attributes': {
        'title': 'Mme',
        'firstName': 'X',
        'lastName': 'X',
        'photoUrl': null
      }
    },
    {
      'id': 'NSKO-X',
      'type': 'nonTeachingStaff',
      'attributes': {
        'title': 'Mme',
        'firstName': 'X',
        'lastName': 'X',
        'photoUrl': null
      }
    },
    {
      'id': 'NSKO-X',
      'type': 'nonTeachingStaff',
      'attributes': {
        'title': 'M.',
        'firstName': 'X',
        'lastName': 'X',
        'photoUrl': null
      }
    },
    {
      'id': 'NSKO-X',
      'type': 'nonTeachingStaff',
      'attributes': {
        'title': 'Mme',
        'firstName': 'X',
        'lastName': 'X',
        'photoUrl': null
      }
    },
    {
      'id': 'NSKO-X',
      'type': 'nonTeachingStaff',
      'attributes': {
        'title': 'M.',
        'firstName': 'X',
        'lastName': 'X',
        'photoUrl': null
      }
    },
    {
      'id': 'NSKO-X',
      'type': 'nonTeachingStaff',
      'attributes': {
        'title': 'Mme',
        'firstName': 'X',
        'lastName': 'X',
        'photoUrl': null
      }
    },
    {
      'id': 'NSKO-X',
      'type': 'nonTeachingStaff',
      'attributes': {
        'title': 'Mme',
        'firstName': 'X',
        'lastName': 'X',
        'photoUrl': null
      }
    },
    {
      'id': 'NSKO-X',
      'type': 'nonTeachingStaff',
      'attributes': {
        'title': 'Mme',
        'firstName': 'X',
        'lastName': 'X',
        'photoUrl': null
      }
    },
    {
      'id': 'NSKO-X',
      'type': 'nonTeachingStaff',
      'attributes': {
        'title': 'Mme',
        'firstName': 'X',
        'lastName': 'X',
        'photoUrl': null
      }
    },
    {
      'id': 'NSKO-X',
      'type': 'nonTeachingStaff',
      'attributes': {
        'title': 'Mme',
        'firstName': 'X',
        'lastName': 'X',
        'photoUrl': null
      }
    },
    {
      'id': 'ESKO-X',
      'type': 'personContact',
      'attributes': {
        'linksWithUser': [
          {
            'description': null,
            'additionalInfo': [],
            'type': 'FAMILY'
          }
        ]
      },
      'relationships': {
        'person': {
          'data': {
            'id': 'ESKO-X',
            'type': 'student'
          }
        }
      }
    },
    {
      'id': 'NSKO-X',
      'type': 'personContact',
      'attributes': {
        'linksWithUser': [
          {
            'description': 'Assistants d\'éducation',
            'additionalInfo': [],
            'type': 'SCHOOL',
            'schoolId': 'SKO-E-a4145cfd-5070-4ec0-b6db-ce179e4d39c7'
          }
        ]
      },
      'relationships': {
        'person': {
          'data': {
            'id': 'NSKO-X',
            'type': 'nonTeachingStaff'
          }
        }
      }
    },
    {
      'id': 'NSKO-X',
      'type': 'personContact',
      'attributes': {
        'linksWithUser': [
          {
            'description': 'Administration',
            'additionalInfo': [],
            'type': 'SCHOOL',
            'schoolId': 'SKO-E-a4145cfd-5070-4ec0-b6db-ce179e4d39c7'
          }
        ]
      },
      'relationships': {
        'person': {
          'data': {
            'id': 'NSKO-X',
            'type': 'nonTeachingStaff'
          }
        }
      }
    },
    {
      'id': 'NSKO-X',
      'type': 'personContact',
      'attributes': {
        'linksWithUser': [
          {
            'description': 'Chef d\'établissement adjoint',
            'additionalInfo': [],
            'type': 'SCHOOL',
            'schoolId': 'SKO-E-a4145cfd-5070-4ec0-b6db-ce179e4d39c7'
          }
        ]
      },
      'relationships': {
        'person': {
          'data': {
            'id': 'NSKO-X',
            'type': 'nonTeachingStaff'
          }
        }
      }
    },
    {
      'id': 'NSKO-X',
      'type': 'personContact',
      'attributes': {
        'linksWithUser': [
          {
            'description': 'Personnels médicaux',
            'additionalInfo': [],
            'type': 'SCHOOL',
            'schoolId': 'SKO-E-a4145cfd-5070-4ec0-b6db-ce179e4d39c7'
          }
        ]
      },
      'relationships': {
        'person': {
          'data': {
            'id': 'NSKO-X',
            'type': 'nonTeachingStaff'
          }
        }
      }
    },
    {
      'id': 'NSKO-X',
      'type': 'personContact',
      'attributes': {
        'linksWithUser': [
          {
            'description': 'Adjoint gestionnaire',
            'additionalInfo': [],
            'type': 'SCHOOL',
            'schoolId': 'SKO-E-a4145cfd-5070-4ec0-b6db-ce179e4d39c7'
          },
          {
            'description': 'Administration',
            'additionalInfo': [],
            'type': 'SCHOOL',
            'schoolId': 'SKO-E-a4145cfd-5070-4ec0-b6db-ce179e4d39c7'
          }
        ]
      },
      'relationships': {
        'person': {
          'data': {
            'id': 'NSKO-X',
            'type': 'nonTeachingStaff'
          }
        }
      }
    },
    {
      'id': 'NSKO-X',
      'type': 'personContact',
      'attributes': {
        'linksWithUser': [
          {
            'description': 'Psychologue',
            'additionalInfo': [],
            'type': 'SCHOOL',
            'schoolId': 'SKO-E-a4145cfd-5070-4ec0-b6db-ce179e4d39c7'
          }
        ]
      },
      'relationships': {
        'person': {
          'data': {
            'id': 'NSKO-X',
            'type': 'nonTeachingStaff'
          }
        }
      }
    },
    {
      'id': 'NSKO-X',
      'type': 'personContact',
      'attributes': {
        'linksWithUser': [
          {
            'description': 'Assistants d\'éducation',
            'additionalInfo': [],
            'type': 'SCHOOL',
            'schoolId': 'SKO-E-a4145cfd-5070-4ec0-b6db-ce179e4d39c7'
          }
        ]
      },
      'relationships': {
        'person': {
          'data': {
            'id': 'NSKO-X',
            'type': 'nonTeachingStaff'
          }
        }
      }
    },
    {
      'id': 'NSKO-X',
      'type': 'personContact',
      'attributes': {
        'linksWithUser': [
          {
            'description': 'Chef d\'établissement',
            'additionalInfo': [],
            'type': 'SCHOOL',
            'schoolId': 'SKO-E-a4145cfd-5070-4ec0-b6db-ce179e4d39c7'
          },
          {
            'description': 'Chef d\'établissement adjoint',
            'additionalInfo': [],
            'type': 'SCHOOL',
            'schoolId': 'SKO-E-a4145cfd-5070-4ec0-b6db-ce179e4d39c7'
          }
        ]
      },
      'relationships': {
        'person': {
          'data': {
            'id': 'NSKO-X',
            'type': 'nonTeachingStaff'
          }
        }
      }
    },
    {
      'id': 'NSKO-X',
      'type': 'personContact',
      'attributes': {
        'linksWithUser': [
          {
            'description': 'Personnels médicaux',
            'additionalInfo': [],
            'type': 'SCHOOL',
            'schoolId': 'SKO-E-a4145cfd-5070-4ec0-b6db-ce179e4d39c7'
          }
        ]
      },
      'relationships': {
        'person': {
          'data': {
            'id': 'NSKO-X',
            'type': 'nonTeachingStaff'
          }
        }
      }
    },
    {
      'id': 'NSKO-X',
      'type': 'personContact',
      'attributes': {
        'linksWithUser': [
          {
            'description': 'Psychologue',
            'additionalInfo': [],
            'type': 'SCHOOL',
            'schoolId': 'SKO-E-a4145cfd-5070-4ec0-b6db-ce179e4d39c7'
          }
        ]
      },
      'relationships': {
        'person': {
          'data': {
            'id': 'NSKO-X',
            'type': 'nonTeachingStaff'
          }
        }
      }
    },
    {
      'id': 'NSKO-X',
      'type': 'personContact',
      'attributes': {
        'linksWithUser': [
          {
            'description': 'Assistants d\'éducation',
            'additionalInfo': [],
            'type': 'SCHOOL',
            'schoolId': 'SKO-E-a4145cfd-5070-4ec0-b6db-ce179e4d39c7'
          }
        ]
      },
      'relationships': {
        'person': {
          'data': {
            'id': 'NSKO-X',
            'type': 'nonTeachingStaff'
          }
        }
      }
    },
    {
      'id': 'NSKO-X',
      'type': 'personContact',
      'attributes': {
        'linksWithUser': [
          {
            'description': 'Assistants d\'éducation',
            'additionalInfo': [],
            'type': 'SCHOOL',
            'schoolId': 'SKO-E-a4145cfd-5070-4ec0-b6db-ce179e4d39c7'
          }
        ]
      },
      'relationships': {
        'person': {
          'data': {
            'id': 'NSKO-X',
            'type': 'nonTeachingStaff'
          }
        }
      }
    },
    {
      'id': 'NSKO-X',
      'type': 'personContact',
      'attributes': {
        'linksWithUser': [
          {
            'description': 'Psychologue',
            'additionalInfo': [],
            'type': 'SCHOOL',
            'schoolId': 'SKO-E-a4145cfd-5070-4ec0-b6db-ce179e4d39c7'
          }
        ]
      },
      'relationships': {
        'person': {
          'data': {
            'id': 'NSKO-X',
            'type': 'nonTeachingStaff'
          }
        }
      }
    },
    {
      'id': 'NSKO-X',
      'type': 'personContact',
      'attributes': {
        'linksWithUser': [
          {
            'description': 'Assistante sociale',
            'additionalInfo': [],
            'type': 'SCHOOL',
            'schoolId': 'SKO-E-a4145cfd-5070-4ec0-b6db-ce179e4d39c7'
          }
        ]
      },
      'relationships': {
        'person': {
          'data': {
            'id': 'NSKO-X',
            'type': 'nonTeachingStaff'
          }
        }
      }
    },
    {
      'id': 'NSKO-X',
      'type': 'personContact',
      'attributes': {
        'linksWithUser': [
          {
            'description': 'Assistants d\'éducation',
            'additionalInfo': [],
            'type': 'SCHOOL',
            'schoolId': 'SKO-E-a4145cfd-5070-4ec0-b6db-ce179e4d39c7'
          }
        ]
      },
      'relationships': {
        'person': {
          'data': {
            'id': 'NSKO-X',
            'type': 'nonTeachingStaff'
          }
        }
      }
    },
    {
      'id': 'NSKO-X',
      'type': 'personContact',
      'attributes': {
        'linksWithUser': [
          {
            'description': 'Assistants d\'éducation',
            'additionalInfo': [],
            'type': 'SCHOOL',
            'schoolId': 'SKO-E-a4145cfd-5070-4ec0-b6db-ce179e4d39c7'
          }
        ]
      },
      'relationships': {
        'person': {
          'data': {
            'id': 'NSKO-X',
            'type': 'nonTeachingStaff'
          }
        }
      }
    },
    {
      'id': 'NSKO-X',
      'type': 'personContact',
      'attributes': {
        'linksWithUser': [
          {
            'description': 'Psychologue',
            'additionalInfo': [],
            'type': 'SCHOOL',
            'schoolId': 'SKO-E-a4145cfd-5070-4ec0-b6db-ce179e4d39c7'
          }
        ]
      },
      'relationships': {
        'person': {
          'data': {
            'id': 'NSKO-X',
            'type': 'nonTeachingStaff'
          }
        }
      }
    },
    {
      'id': 'NSKO-X',
      'type': 'personContact',
      'attributes': {
        'linksWithUser': [
          {
            'description': 'CPE',
            'additionalInfo': [],
            'type': 'SCHOOL',
            'schoolId': 'SKO-E-a4145cfd-5070-4ec0-b6db-ce179e4d39c7'
          }
        ]
      },
      'relationships': {
        'person': {
          'data': {
            'id': 'NSKO-X',
            'type': 'nonTeachingStaff'
          }
        }
      }
    },
    {
      'id': 'NSKO-X',
      'type': 'personContact',
      'attributes': {
        'linksWithUser': [
          {
            'description': 'Administration',
            'additionalInfo': [],
            'type': 'SCHOOL',
            'schoolId': 'SKO-E-a4145cfd-5070-4ec0-b6db-ce179e4d39c7'
          },
          {
            'description': 'Secrétaires',
            'additionalInfo': [],
            'type': 'SCHOOL',
            'schoolId': 'SKO-E-a4145cfd-5070-4ec0-b6db-ce179e4d39c7'
          }
        ]
      },
      'relationships': {
        'person': {
          'data': {
            'id': 'NSKO-X',
            'type': 'nonTeachingStaff'
          }
        }
      }
    },
    {
      'id': 'NSKO-X',
      'type': 'personContact',
      'attributes': {
        'linksWithUser': [
          {
            'description': 'Administration',
            'additionalInfo': [],
            'type': 'SCHOOL',
            'schoolId': 'SKO-E-a4145cfd-5070-4ec0-b6db-ce179e4d39c7'
          },
          {
            'description': 'Secrétaires',
            'additionalInfo': [],
            'type': 'SCHOOL',
            'schoolId': 'SKO-E-a4145cfd-5070-4ec0-b6db-ce179e4d39c7'
          }
        ]
      },
      'relationships': {
        'person': {
          'data': {
            'id': 'NSKO-X',
            'type': 'nonTeachingStaff'
          }
        }
      }
    },
    {
      'id': 'PSKO-X',
      'type': 'personContact',
      'attributes': {
        'linksWithUser': [
          {
            'description': 'LATIN',
            'additionalInfo': [],
            'type': 'STUDENT',
            'studentId': 'ESKO-X'
          }
        ]
      },
      'relationships': {
        'person': {
          'data': {
            'id': 'PSKO-X',
            'type': 'teacher'
          }
        }
      }
    },
    {
      'id': 'PSKO-X',
      'type': 'personContact',
      'attributes': {
        'linksWithUser': [
          {
            'description': 'ANGLAIS LV1',
            'additionalInfo': [],
            'type': 'STUDENT',
            'studentId': 'ESKO-X'
          }
        ]
      },
      'relationships': {
        'person': {
          'data': {
            'id': 'PSKO-X',
            'type': 'teacher'
          }
        }
      }
    },
    {
      'id': 'PSKO-X',
      'type': 'personContact',
      'attributes': {
        'linksWithUser': [
          {
            'description': 'ANGLAIS LV2',
            'additionalInfo': [],
            'type': 'STUDENT',
            'studentId': 'ESKO-X'
          }
        ]
      },
      'relationships': {
        'person': {
          'data': {
            'id': 'PSKO-X',
            'type': 'teacher'
          }
        }
      }
    },
    {
      'id': 'PSKO-X',
      'type': 'personContact',
      'attributes': {
        'linksWithUser': [
          {
            'description': 'TECHNO',
            'additionalInfo': [],
            'type': 'STUDENT',
            'studentId': 'ESKO-X'
          }
        ]
      },
      'relationships': {
        'person': {
          'data': {
            'id': 'PSKO-X',
            'type': 'teacher'
          }
        }
      }
    },
    {
      'id': 'PSKO-X',
      'type': 'personContact',
      'attributes': {
        'linksWithUser': [
          {
            'description': 'ARTS PLASTIQUES',
            'additionalInfo': [],
            'type': 'STUDENT',
            'studentId': 'ESKO-X'
          }
        ]
      },
      'relationships': {
        'person': {
          'data': {
            'id': 'PSKO-X',
            'type': 'teacher'
          }
        }
      }
    },
    {
      'id': 'PSKO-X',
      'type': 'personContact',
      'attributes': {
        'linksWithUser': [
          {
            'description': 'HISTOIRE-GEOGRAPHIE',
            'additionalInfo': [],
            'type': 'STUDENT',
            'studentId': 'ESKO-X'
          }
        ]
      },
      'relationships': {
        'person': {
          'data': {
            'id': 'PSKO-X',
            'type': 'teacher'
          }
        }
      }
    },
    {
      'id': 'PSKO-X',
      'type': 'personContact',
      'attributes': {
        'linksWithUser': [
          {
            'description': 'MATHS',
            'additionalInfo': [],
            'type': 'STUDENT',
            'studentId': 'ESKO-X'
          }
        ]
      },
      'relationships': {
        'person': {
          'data': {
            'id': 'PSKO-X',
            'type': 'teacher'
          }
        }
      }
    },
    {
      'id': 'PSKO-X',
      'type': 'personContact',
      'attributes': {
        'linksWithUser': [
          {
            'description': 'Documentaliste',
            'additionalInfo': [],
            'type': 'SCHOOL',
            'schoolId': 'SKO-E-a4145cfd-5070-4ec0-b6db-ce179e4d39c7'
          }
        ]
      },
      'relationships': {
        'person': {
          'data': {
            'id': 'PSKO-X',
            'type': 'teacher'
          }
        }
      }
    },
    {
      'id': 'PSKO-X',
      'type': 'personContact',
      'attributes': {
        'linksWithUser': [
          {
            'description': 'ED.PHYSIQUE & SPORT',
            'additionalInfo': [],
            'type': 'STUDENT',
            'studentId': 'ESKO-X'
          }
        ]
      },
      'relationships': {
        'person': {
          'data': {
            'id': 'PSKO-X',
            'type': 'teacher'
          }
        }
      }
    },
    {
      'id': 'PSKO-X',
      'type': 'personContact',
      'attributes': {
        'linksWithUser': [
          {
            'description': 'PHYSIQUE-CHIMIE',
            'additionalInfo': [],
            'type': 'STUDENT',
            'studentId': 'ESKO-X'
          }
        ]
      },
      'relationships': {
        'person': {
          'data': {
            'id': 'PSKO-X',
            'type': 'teacher'
          }
        }
      }
    },
    {
      'id': 'PSKO-X',
      'type': 'personContact',
      'attributes': {
        'linksWithUser': [
          {
            'description': null,
            'additionalInfo': [],
            'type': 'STUDENT',
            'studentId': 'ESKO-X'
          }
        ]
      },
      'relationships': {
        'person': {
          'data': {
            'id': 'PSKO-X',
            'type': 'teacher'
          }
        }
      }
    },
    {
      'id': 'PSKO-X',
      'type': 'personContact',
      'attributes': {
        'linksWithUser': [
          {
            'description': 'SCIENCES VIE & TERRE',
            'additionalInfo': [],
            'type': 'STUDENT',
            'studentId': 'ESKO-X'
          }
        ]
      },
      'relationships': {
        'person': {
          'data': {
            'id': 'PSKO-X',
            'type': 'teacher'
          }
        }
      }
    },
    {
      'id': 'PSKO-X',
      'type': 'personContact',
      'attributes': {
        'linksWithUser': [
          {
            'description': 'FRANCAIS, VIE DE CLASSE',
            'additionalInfo': [
              'Professeur principal'
            ],
            'type': 'STUDENT',
            'studentId': 'ESKO-X'
          }
        ]
      },
      'relationships': {
        'person': {
          'data': {
            'id': 'PSKO-X',
            'type': 'teacher'
          }
        }
      }
    },
    {
      'id': 'PSKO-X',
      'type': 'personContact',
      'attributes': {
        'linksWithUser': [
          {
            'description': 'ALLEMAND LV1, ALLEMAND LV2',
            'additionalInfo': [],
            'type': 'STUDENT',
            'studentId': 'ESKO-X'
          }
        ]
      },
      'relationships': {
        'person': {
          'data': {
            'id': 'PSKO-X',
            'type': 'teacher'
          }
        }
      }
    },
    {
      'id': 'PSKO-X',
      'type': 'personContact',
      'attributes': {
        'linksWithUser': [
          {
            'description': 'CHANT CHORAL COLLECT, EDUCATION MUSICALE',
            'additionalInfo': [],
            'type': 'STUDENT',
            'studentId': 'ESKO-X'
          }
        ]
      },
      'relationships': {
        'person': {
          'data': {
            'id': 'PSKO-X',
            'type': 'teacher'
          }
        }
      }
    },
    {
      'id': 'RSKO-X',
      'type': 'signature',
      'attributes': {
        'content': '--<br/>X X<br/>Parent'
      }
    },
    {
      'id': 'ESKO-X',
      'type': 'student',
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
  ]
})
