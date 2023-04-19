import { SkolengoResponse } from '../src/models/Globals'
import { PeriodicReportsFiles } from '../src/models/Evaluation/PeriodicReportsFiles'

describe('Test PeriodicReportsFiles', () => {
  it('should be correct type', () => {
    const test: SkolengoResponse<PeriodicReportsFiles[]> = { data: [{ id: '123456', type: 'periodicSchoolReportFile', attributes: { name: 'bulletin_periodique__doe_john__premier_trimestre.pdf', mimeType: 'application/pdf', mimeTypeLabel: 'Document PDF', size: 39683, url: 'https://cite-val-argent.monbureaunumerique.fr/dl.do?TYPE_RESSOURCE=PUBLIPOSTAGE&ARCHIVE_NAME=bulletin_periodique__doe_john__premier_trimestre&RESSOURCES=123456&student.id=AAP05567', alternativeText: null } }, { id: '123457', type: 'periodicSchoolReportFile', attributes: { name: 'bulletin_periodique__doe_john__deuxieme_trimestre.pdf', mimeType: 'application/pdf', mimeTypeLabel: 'Document PDF', size: 46255, url: 'https://cite-val-argent.monbureaunumerique.fr/dl.do?TYPE_RESSOURCE=PUBLIPOSTAGE&ARCHIVE_NAME=bulletin_periodique__doe_john__deuxieme_trimestre&RESSOURCES=123457&student.id=AAP05567', alternativeText: null } }], links: { first: 'http://bff-prod-ha/api/v1/bff-sko-app/periodic-reports-files?page[limit]=20&include=period%26fields%5BperiodicReportFile%5D%3Dname%2CmimeType%2Csize%2Curl%2CmimeTypeLabel&filter[student.id]=ESKO-P-b2c86113-1062-427e-bc7f-xxxxxxxxx', last: 'http://bff-prod-ha/api/v1/bff-sko-app/periodic-reports-files?page[limit]=20&include=period%26fields%5BperiodicReportFile%5D%3Dname%2CmimeType%2Csize%2Curl%2CmimeTypeLabel&filter[student.id]=ESKO-P-b2c86113-1062-427e-bc7f-xxxxxxxxxxx' }, meta: { totalResourceCount: 2 } }
    expect(test).toBeDefined()
  })
})
