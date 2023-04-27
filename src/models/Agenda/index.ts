import { Agenda } from './Agenda'
import { Lesson } from './Lesson'
import { HomeworkAssignment } from '../Homework/HomeworkAssignment'

export class AgendaResponse {
  public lessons: Lesson[]
  public homeworkAssignments: HomeworkAssignment[]

  public constructor (response: Agenda[]) {
    this.lessons = response.map(j => j.lessons).flat()
    this.homeworkAssignments = response.map(j => j.homeworkAssignments).flat()
  }

  public static lessonToVEVENT (lesson: Lesson, dtstamp: Date = new Date()): string {
    const convertDT = (d: string): string => new Date(d).toISOString().replace(/[-:.]/g, '').slice(0, -4) + 'Z'
    const {
      id,
      canceled,
      title,
      endDateTime,
      startDateTime,
      location,
      subject,
      teachers
    } = lesson
    return `BEGIN:VEVENT
DTSTAMP:${convertDT(new Date(dtstamp).toISOString())}
STATUS:${canceled ? 'CANCELLED' : 'CONFIRMED'}
UID:${id}@kdecoleapi
DTSTART:${convertDT(startDateTime)}
DTEND:${convertDT(endDateTime)}
SUMMARY:${title} (${location})
DESCRIPTION:${subject.label} avec ${teachers.map(t => `${t.title ?? ''} ${t.firstName} ${t.lastName}`).join('; ')}
LOCATION:${location}
END:VEVENT`
  }

  public toICalendar (dtstamp: Date = new Date()): string {
    return `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//scolengo-api//ical//EN
METHOD:PUBLISH
TZID:Europe/Paris
NAME:Agenda Skolengo
X-WR-CALNAME:Agenda Skolengo
  ${this.lessons.map(lesson => AgendaResponse.lessonToVEVENT(lesson, dtstamp)).join('\n')}
` + 'END:VCALENDAR'
  }
}

export { Agenda, Lesson }
