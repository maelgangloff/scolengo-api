import { BaseResponse, BaseResponseAttributes, SkolengoResponse } from '../Global'
import {
  AbsenceFile,
  AbsenceFileIncluded,
  AbsenceFileIncludedAttributes,
  AbsenceFileIncludedRelationships
} from './AbsenceFile'
import { AbsenceReasonAttributes } from './AbsenceReasons'

export class AbsenceFilesResponse extends SkolengoResponse<AbsenceFile[], AbsenceFileIncluded> {
  public constructor (response: SkolengoResponse<AbsenceFile[], AbsenceFileIncluded>) {
    super(response)
  }

  public toCSV (): string {
    return `created,type,status,start,end,reason,reason_label
${this.data.map(file => {
      const currentState = this.included.find(i => i.type === 'absenceFileState' && i.id === file.relationships.currentState.data?.id) as BaseResponse<AbsenceFileIncludedAttributes, AbsenceFileIncludedRelationships, 'absenceFileState'>
      const {
        absenceFileStatus,
        absenceType,
        absenceStartDateTime,
        creationDateTime,
        absenceEndDateTime
      } = currentState.attributes
      const absenceReason = this.included.find(i => i.id === currentState.relationships.absenceReason.data?.id) as BaseResponseAttributes<AbsenceReasonAttributes, 'absenceReason'>

      return `${creationDateTime},${absenceType},${absenceFileStatus},${absenceStartDateTime},${absenceEndDateTime},"${absenceReason.attributes.code}","${absenceReason.attributes.longLabel}"\n`
    }).join('')}`
  }
}
