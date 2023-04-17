import { Lesson, LessonIncluded } from '../src/models/Agenda/Lesson'
import { SkolengoResponse } from '../src/models/Globals'

describe('Test Lesson', () => {
  it('should be correct type', () => {
    const test: SkolengoResponse<Lesson, LessonIncluded> = { data: { id: '506137', type: 'lesson', attributes: { startDateTime: '2022-11-17T12:50:00Z', endDateTime: '2022-11-17T14:40:00Z', title: 'NUMERIQUE SC INFORMATIQUES', location: 'C101', locationComplement: null, canceled: false }, relationships: { contents: { data: [{ id: '116775', type: 'lessonContent' }] }, teachers: { data: [{ id: 'PSKO-P-xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx', type: 'teacher' }] }, subject: { data: { id: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx', type: 'subject' } }, toDoForTheLesson: { data: [{ id: '116492', type: 'homework' }] }, toDoAfterTheLesson: { data: [{ id: '116777', type: 'homework' }] } } }, included: [{ id: '31811', type: 'attachment', attributes: { name: 'Activite Algo de tri 1 - Algorithmes.pdf', mimeType: 'application/pdf', mimeTypeLabel: 'Document PDF', size: 99560, url: 'https://lyc-lavoisier.monbureaunumerique.fr/lectureFichiergw.do?ID_FICHIER=31811' } }, { id: '116492', type: 'homework', attributes: { title: 'Finir le pendu', html: '<html>\n <head></head>\n <body>   \n  <a href="sg.do?PROC=TRAVAIL_A_FAIRE&amp;ACTION=AFFICHER_ELEVES_RENDRE_DEVOIR&amp;ID_TAF=1004928&amp;URL_PROVENANCE=sg.do%3FPROC%3DPAGE_ACCUEIL" class="js-lien-taf">Consulter le travail à faire</a>  \n </body>\n</html>', dueDateTime: '2022-11-17T12:50:00Z', dueDate: null, done: false, deliverWorkOnline: true, onlineDeliveryUrl: null }, relationships: { subject: { data: { id: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx', type: 'subject' } } } }, { id: '116777', type: 'homework', attributes: { title: 'Algorithmes de tri', html: "<html>\n <head></head>\n <body>   \n  <p>Finir l'implémentation des algorithmes de tri.</p> \n  <p>Tester vos fonctions sur les exemples du cours.</p>  \n </body>\n</html>", dueDateTime: '2022-11-22T07:05:00Z', dueDate: null, done: true, deliverWorkOnline: false, onlineDeliveryUrl: null }, relationships: { subject: { data: { id: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx', type: 'subject' } } } }, { id: '116775', type: 'lessonContent', attributes: { html: "<html>\n <head></head>\n <body>   \n  <p>Création d'une méthode de tri de cartes.</p> \n  <p>Représentation visuelle des algorithmes de tri : <a onclick=\"window.open(this.href);return false;\" href=\"https://www.youtube.com/watch?v=kPRA0W1kECg\">https://www.youtube.com/watch?v=kPRA0W1kECg</a></p> \n  <p>Découverte des algorithmes de tri.<br>  - Tri par sélection<br>  - Tri par insertion</p> \n  <p>Implémentation des algorithmes de tri</p>  \n </body>\n</html>", title: 'Les algorithmes de tri', url: null }, relationships: { attachments: { data: [{ id: '31811', type: 'attachment' }] } } }, { id: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx', type: 'subject', attributes: { label: 'NUMERIQUE SC INFORMATIQUES', color: '#00cece' } }, { id: 'PSKO-P-xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx', type: 'teacher', attributes: { title: 'M.', firstName: 'DORIAN', lastName: 'DUMANGET', photoUrl: null } }] }
    expect(test).toBeDefined()
  })
})