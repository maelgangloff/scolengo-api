import axios from 'axios'
import { Skolengo } from '../src/index'
import { SkolengoResponse } from '../src/models/Globals'
import { CurrentConfig } from '../src/models/CurrentConfig'

const testData: SkolengoResponse<CurrentConfig> = { data: { id: 'current', type: 'skoAppConfig', attributes: { latestDeployedSkoAppVersion: '1.1.1-1', latestSupportedSkoAppVersion: '1.1.1-1', apiCallRetryDelay: 500, apiCallMaxRetries: 5, skoAppDeploymentInfoUrl: 'https://www.skolengo-academy.org/deploiement-de-lapplication-mobile' } } }

jest.mock('axios')
const mockedAxios = axios as jest.Mocked<typeof axios> & jest.Mock<typeof axios>
mockedAxios.request.mockResolvedValue({
  data: testData
})

describe('Test getCurrentConfig', () => {
  beforeEach(() => mockedAxios.mockClear())
  it('should call the right url and return current config', async () => {
    await Skolengo.getAppCurrentConfig()
    expect(mockedAxios.request).toBeCalledWith({
      baseURL: 'https://api.skolengo.com/api/v1/bff-sko-app',
      url: '/sko-app-configs/current',
      method: 'get',
      responseType: 'json'
    })
  })
})
