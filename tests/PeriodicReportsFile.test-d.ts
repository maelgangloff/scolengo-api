import { expectAssignable } from 'tsd'
import { SkolengoResponse } from '../src/models/Globals'
import { PeriodicReportsFile } from '../src/models/Evaluation/PeriodicReportsFile'

expectAssignable<SkolengoResponse<PeriodicReportsFile[]>>({
  'data': [
    {
      'id': '0000',
      'type': 'periodicSchoolReportFile',
      'attributes': {
        'name': 'bulletin_periodique__doe_john__premier_trimestre.pdf',
        'mimeType': 'application/pdf',
        'mimeTypeLabel': 'Document PDF',
        'size': 39683,
        'url': 'https://cite-val-argent.monbureaunumerique.fr/dl.do?TYPE_RESSOURCE=PUBLIPOSTAGE&ARCHIVE_NAME=bulletin_periodique__doe_john__premier_trimestre&RESSOURCES=33289&student.id=X',
        'alternativeText': null
      },
      'relationships': {
        'period': {
          'data': null
        }
      }
    },
    {
      'id': '0000',
      'type': 'periodicSchoolReportFile',
      'attributes': {
        'name': 'bulletin_periodique__doe_john__deuxieme_trimestre.pdf',
        'mimeType': 'application/pdf',
        'mimeTypeLabel': 'Document PDF',
        'size': 46255,
        'url': 'https://cite-val-argent.monbureaunumerique.fr/dl.do?TYPE_RESSOURCE=PUBLIPOSTAGE&ARCHIVE_NAME=bulletin_periodique__doe_john__premier_trimestre&RESSOURCES=36339&student.id=X',
        'alternativeText': null
      },
      'relationships': {
        'period': {
          'data': null
        }
      }
    }
  ],
  'links': {
    'first': 'http://bff-prod-ha/api/v1/bff-sko-app/periodic-reports-files?page[limit]=20&include=period&filter[student.id]=ESKO-P-b2c86113-1062-427e-bc7f-X',
    'last': 'http://bff-prod-ha/api/v1/bff-sko-app/periodic-reports-files?page[limit]=20&include=period&filter[student.id]=ESKO-P-b2c86113-1062-427e-bc7f-X'
  },
  'meta': {
    'totalResourceCount': 2
  }
})


