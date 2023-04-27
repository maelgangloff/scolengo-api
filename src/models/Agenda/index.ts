/*
export class AgendaResponse extends SkolengoResponse<Agenda[], AgendaIncluded> {
  public constructor (response: SkolengoResponse<Agenda[], AgendaIncluded>) {
    super(response)
  }

  public lessonToVEVENT (lesson: Lesson): string {
    const {
      attributes,
      id,
      relationships
    } = lesson
    const convertDT = (d: string): string => new Date(d).toISOString().replace(/[-:.]/g, '').slice(0, -4) + 'Z'
    const teachers = relationships.teachers.data.map(t => this.included.find(i => i.type === 'teacher' && i.id === t.id)).map(t => {
      const {
        title,
        firstName,
        lastName
      } = t?.attributes as User
      return `${title ?? ''} ${firstName} ${lastName}`
    })
    const subject = this.included.find(i => i.type === 'subject' && i.id === relationships.subject.data.id)?.attributes as SubjectAttributes
    return `BEGIN:VEVENT
DTSTAMP:${convertDT(new Date().toISOString())}
STATUS:${attributes.canceled ? 'CANCELLED' : 'CONFIRMED'}
UID:${id}@kdecoleapi
DTSTART:${convertDT(attributes.startDateTime)}
DTEND:${convertDT(attributes.endDateTime)}
SUMMARY:${attributes.title} (${attributes.location})
DESCRIPTION:${subject.label} avec ${teachers.join('; ')}
LOCATION:${attributes.location}
END:VEVENT`
  }

  public toICalendar (): string {
    return `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//scolengo-api//ical//EN
METHOD:PUBLISH
TZID:Europe/Paris
NAME:Agenda Skolengo
X-WR-CALNAME:Agenda Skolengo
${this.included.filter(i => i.type === 'lesson').map((lesson: unknown) => this.lessonToVEVENT(lesson as Lesson)).join('\n')}
` + 'END:VCALENDAR'
  }
}
*/
