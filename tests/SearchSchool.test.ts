import axios from 'axios'
import { Skolengo } from '../src/index'

jest.mock('axios')
const mockedAxios = axios as jest.Mocked<typeof axios> & jest.Mock<typeof axios>
mockedAxios.request.mockResolvedValue({
  data: require('./fakeData/schools.json')
})

describe('Test searchSchool', () => {
  beforeEach(() => mockedAxios.mockClear())
  it('should call the right url and return schools', async () => {
    await Skolengo.searchSchool('Lycée', 25, 0)
    expect(mockedAxios.request).toBeCalledWith({
      baseURL: 'https://api.skolengo.com/api/v1/bff-sko-app',
      method: 'get',
      responseType: 'json',
      url: '/schools',
      params: {
        page: { limit: 25, offset: 0 },
        filter: { text: 'Lycée' }
      }
    })
  })
})
