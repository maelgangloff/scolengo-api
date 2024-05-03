import { describe, expect } from '@jest/globals'
import type { AuthConfig } from '../src/models/Common/Auth'
import type { Evaluation, EvaluationSettings } from '../src/models/Results'
import type { Agenda, HomeworkAssignment } from '../src/models/Calendar'
import type { AbsenceFile } from '../src/models/SchoolLife'
import type { SchoolInfo } from '../src/models/School'
import { Skolengo } from '../src/index'
import './common'

const SKOLENGO_TOKENSET = process.env.SKOLENGO_TOKENSET
const describeAuthenticated = SKOLENGO_TOKENSET !== undefined ? describe : describe.skip

/**
 * Tests d'intégration des endpoints qui nécessitent une authentification
 */
describeAuthenticated('Test of the Skolengo API types - Authenticated user', () => {
  let user: Skolengo

  beforeAll(async () => {
    user = await Skolengo.fromConfigObject((JSON.parse(SKOLENGO_TOKENSET as string) as AuthConfig), { handlePronoteError: true })
  })

  it('should match type User', async () => {
    const response = await user.getUserInfo()
    expect(response).toMatchSchema('User')
  })

  it('should match type AbsenceReason[]', async () => {
    const reasons = await user.getAbsenceReasons()
    for (const reason of reasons) expect(reason).toMatchSchema('AbsenceReason')
  })

  /**
   * Tests d'intégration des news de l'établissement
   */
  describe('Test of the SchoolInfo module', () => {
    let schoolInfoList: SchoolInfo[]

    beforeAll(async () => {
      schoolInfoList = await user.getSchoolInfos()
    })

    it('should match type SchoolInfo[]', () => {
      for (const info of schoolInfoList) expect(info).toMatchSchema('SchoolInfo')
    })

    it('should match the SchoolInfo', async () => {
      for (const info of schoolInfoList.slice(0, 2)) {
        const infoDetail = await user.getSchoolInfo(info.id)
        expect(infoDetail).toMatchSchema('SchoolInfo')
      }
    })
  })

  /**
   * Tests d'intégration du module d'évaluation
   */
  describe('Test of the EVAL module', () => {
    let evaluationSettingsList: EvaluationSettings[]
    let evaluationList: Evaluation[]

    beforeAll(async () => {
      evaluationSettingsList = await user.getEvaluationSettings()
      if (evaluationSettingsList.length === 0 || evaluationSettingsList[0].periods.length === 0) return
      evaluationList = await user.getEvaluation(undefined, evaluationSettingsList[0].periods[0].id, 2)
    })

    it('should match type EvaluationSettings', () => {
      for (const evaluationSettings of evaluationSettingsList) expect(evaluationSettings).toMatchSchema('EvaluationSettings')
    })

    it('should match type Evaluation[]', () => {
      for (const evaluation of evaluationList) expect(evaluation).toMatchSchema('Evaluation')
    })

    it('should match type EvaluationDetail[]', async () => {
      for (const evaluation of evaluationList) {
        const evaluationDetail = await user.getEvaluationDetail(undefined, evaluation.evaluations[0].id)
        expect(evaluationDetail).toMatchSchema('EvaluationDetail')
      }
    })

    it('should match type Attachment[]', async () => {
      const response = await user.getPeriodicReportsFiles(undefined, 2)
      for (const attachment of response) expect(attachment).toMatchSchema('Attachment')
    })
  })

  /**
   * Tests d'intégration du module de messagerie
   */
  describe('Test of the MSG module', () => {
    it('should match type UsersMailSettings', async () => {
      const response = await user.getUsersMailSettings()
      expect(response).toMatchSchema('UsersMailSettings')
    })
  })

  /**
   * Tests d'intégration du module de cahier de texte
   */
  describe('Test of the CDT module', () => {
    let agendaList: Agenda[]
    let homeworkList: HomeworkAssignment[]

    const dateToString = (date = new Date()): string => date.toISOString().split('T')[0]

    beforeAll(async () => {
      agendaList = await user.getAgenda(undefined, dateToString(new Date(new Date().getTime() - 7 * 24 * 60 * 60 * 1e3)), dateToString(), 2)
      homeworkList = await user.getHomeworkAssignments(undefined, dateToString(new Date(new Date().getTime() - 7 * 24 * 60 * 60 * 1e3)), dateToString(), 2)
    })

    it('should match type Agenda[]', () => {
      for (const agenda of agendaList) expect(agenda).toMatchSchema('Agenda')
    })

    it('should match type Lesson[]', () => {
      for (const lesson of agendaList[0].lessons) {
        expect(lesson).toMatchSchema('Lesson')
      }
    })

    it('should match type Lesson', async () => {
      for (const lesson of agendaList[0].lessons) {
        const lessonDetail = await user.getLesson(undefined, lesson.id)
        expect(lessonDetail).toMatchSchema('Lesson')
      }
    })

    it('should match type HomeWorkAssignment[]', () => {
      for (const homework of homeworkList) expect(homework).toMatchSchema('HomeworkAssignment')
    })

    it('should match type HomeWorkAssignment', async () => {
      for (const homework of homeworkList) {
        const homeworkDetail = await user.getHomeworkAssignment(undefined, homework.id)
        expect(homeworkDetail).toMatchSchema('HomeworkAssignment')
      }
    })
  })

  /**
   * Tests d'intégration du module d'absences
   */
  describe('Test of the ABS module', () => {
    let absenceFiles: AbsenceFile[]

    beforeAll(async () => {
      absenceFiles = await user.getAbsenceFiles()
    })

    it('should match type AbsenceFile[]', () => {
      for (const file of absenceFiles) expect(file).toMatchSchema('AbsenceFile')
    })

    it('should match type AbsenceFile', async () => {
      for (const file of absenceFiles) {
        const fileDetail = await user.getAbsenceFile(file.id)
        expect(fileDetail).toMatchSchema('AbsenceFile')
      }
    })
  })
})
