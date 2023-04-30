import { AbsenceFile, AbsenceState } from './AbsenceFile'

export class AbsenceFilesResponse extends Array<AbsenceFile> {
  public constructor (absenceFiles: AbsenceFile[]) {
    super(absenceFiles.length)
    for (let i = 0; i < absenceFiles.length; i++) {
      this[i] = absenceFiles[i]
    }
  }

  public toCSV (): string {
    return `created,type,status,start,end,reason,reason_label
${this.map(file => {
      const {
        creationDateTime,
        absenceType,
        absenceFileStatus,
        absenceStartDateTime,
        absenceEndDateTime,
        absenceReason
      } = file.currentState
      return `${creationDateTime},${absenceType},${absenceFileStatus},${absenceStartDateTime},${absenceEndDateTime},"${absenceReason?.code ?? ''}","${absenceReason?.longLabel ?? ''}"\n`
    }).join('')}`
  }
}

export { AbsenceFile, AbsenceState }
