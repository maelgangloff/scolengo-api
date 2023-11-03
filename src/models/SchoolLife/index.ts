import type { AbsenceFile, AbsenceState } from './AbsenceFile'
import type { AbsenceReason } from './AbsenceReason'

export class AbsenceFilesResponse extends Array<AbsenceFile> {
  public constructor (absenceFiles: AbsenceFile[]) {
    super(absenceFiles.length)
    for (let i = 0; i < absenceFiles.length; i++) {
      this[i] = absenceFiles[i]
    }
  }

  public toCSV (): string {
    return 'created,type,status,start,end,reason,reason_label\n' +
    [...this].map(file => {
      const {
        creationDateTime,
        absenceType,
        absenceFileStatus,
        absenceStartDateTime,
        absenceEndDateTime,
        absenceReason
      } = file.currentState
      return `${creationDateTime},${absenceType},${absenceFileStatus},${absenceStartDateTime},${absenceEndDateTime},"${absenceReason?.code ?? ''}","${absenceReason?.longLabel ?? ''}"`
    }).join('\n')
  }
}

export type { AbsenceFile, AbsenceState, AbsenceReason }
