import type { Agenda } from './Agenda'
import type { Lesson } from './Lesson'
import type { HomeworkAssignment } from './HomeworkAssignment'

export class AgendaResponse extends Array<Agenda> {
  public constructor (response: Agenda[]) {
    super(response.length)
    for (let i = 0; i < response.length; i++) {
      this[i] = response[i]
    }
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
SUMMARY:${title} ${location !== null ? `(${location})` : ''}
DESCRIPTION:${subject.label} avec ${teachers.map(t => `${t.title ?? ''} ${t.firstName} ${t.lastName}`).join('; ')}
LOCATION:${location ?? ''}
END:VEVENT`
  }

  public toICalendar (dtstamp: Date = new Date(), name = 'Agenda Skolengo'): string {
    const lessons = [...this].map(j => j.lessons).flat()
    const calendarName = name ?? 'Agenda Skolengo'
    return `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//scolengo-api//ical//EN
METHOD:PUBLISH
TZID:Europe/Paris
NAME:${calendarName}
X-WR-CALNAME:${calendarName}\n` +
lessons.map(lesson => AgendaResponse.lessonToVEVENT(lesson, dtstamp)).join('\n') +
'\nEND:VCALENDAR\n'
  }
}

export type { Agenda, Lesson, HomeworkAssignment }
