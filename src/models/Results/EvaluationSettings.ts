export interface Period {
  id: string
  endDate: string
  startDate: string
  label: string
}

export interface EvaluationSettings {
  id: string
  periodicReportsEnabled: boolean
  skillsEnabled: boolean
  evaluationsDetailsAvailable: boolean
  periods: Period[]
  skillsSettings: {
    id: string
    skillAcquisitionLevels: Array<{
      label: string
      shortLabel: string
      level: string
    }>
    skillAcquisitionColors: {
      id: string
      colorLevelMappings: Array<{
        level: string
        color: string
      }>
    }
  }
}
