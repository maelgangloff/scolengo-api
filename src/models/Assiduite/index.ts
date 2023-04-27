import { AbsenceFile } from './AbsenceFile'

export class AbsenceFilesResponse {
  public absenceFiles: AbsenceFile[]

  public constructor (absenceFiles: AbsenceFile[]) {
    this.absenceFiles = absenceFiles
  }

  public toCSV (): string {
    return `created,type,status,start,end,reason,reason_label
${this.absenceFiles.map(file => {
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

export { AbsenceFile }
