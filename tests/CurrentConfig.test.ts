import axios from 'axios'
import { Skolengo } from '../src/index'

jest.mock('axios')
const mockedAxios = axios as jest.Mocked<typeof axios> & jest.Mock<typeof axios>
mockedAxios.request.mockResolvedValue({
  data: require('./fakeData/currentConfig.json')
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
