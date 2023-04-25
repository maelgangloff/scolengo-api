import { describe } from 'node:test'
import { SkolengoResponseData } from '../../src/models/Global'
import { School } from '../../src/models/School/School'
import { Skolengo } from '../../src'
import axios from 'axios'

type ExpectedType = SkolengoResponseData<School[]>

jest.mock('axios')

const mockedAxios = axios as jest.Mocked<typeof axios> & jest.Mock<typeof axios>
mockedAxios.request.mockResolvedValue({
  data: {}
})

describe('Test Schools', () => {
  it('should be correct type', () => {
    const data: ExpectedType =
      {
        'data': [
          {
            'id': 'SKO-E-c8820154-e9a6-4de6-95c1-23e9e0178ad9',
            'type': 'school',
            'attributes': {
              'name': 'Collège',
              'addressLine1': '5 rue du Lycée',
              'addressLine2': null,
              'addressLine3': null,
              'zipCode': '67142',
              'city': 'BARR CEDEX',
              'country': 'France',
              'homePageUrl': 'https://cas.monbureaunumerique.fr/login?service=https%3A%2F%2Fclg-barr.monbureaunumerique.fr%2Fsg.do%3FPROC%3DPAGE_ACCUEIL',
              'emsCode': 'gdest',
              'emsOIDCWellKnownUrl': 'https://sso.monbureaunumerique.fr/oidc/.well-known'
            }
          },
          {
            'id': 'SKO-E-c4b08331-c9b9-4958-885c-8dca52f4b9f6',
            'type': 'school',
            'attributes': {
              'name': 'Collège André Maurois',
              'addressLine1': '1 rue du Lycée',
              'addressLine2': null,
              'addressLine3': null,
              'zipCode': '67242',
              'city': 'BISCHWILLER CEDEX',
              'country': 'France',
              'homePageUrl': 'https://cas.monbureaunumerique.fr/login?service=https%3A%2F%2Fcite-maurois.monbureaunumerique.fr%2Fsg.do%3FPROC%3DPAGE_ACCUEIL',
              'emsCode': 'gdest',
              'emsOIDCWellKnownUrl': 'https://sso.monbureaunumerique.fr/oidc/.well-known'
            }
          },
          {
            'id': 'SKO-E-a1b245ba-2109-4d29-975c-7861e6316d7e',
            'type': 'school',
            'attributes': {
              'name': 'Collège Christiane Perceret',
              'addressLine1': '8 rue du Lycée',
              'addressLine2': null,
              'addressLine3': null,
              'zipCode': '21140',
              'city': 'SEMUR EN AUXOIS',
              'country': 'France',
              'homePageUrl': 'https://cas.eclat-bfc.fr/login?service=https%3A%2F%2Fclg-cperceret-semur-en-auxois.eclat-bfc.fr%2Fsg.do%3FPROC%3DPAGE_ACCUEIL',
              'emsCode': 'bfc',
              'emsOIDCWellKnownUrl': 'https://sso.eclat-bfc.fr/oidc/.well-known'
            }
          },
          {
            'id': 'SKO-E-0e087c33-a55c-4fba-873c-5773ef439f3c',
            'type': 'school',
            'attributes': {
              'name': 'Etablissement régional d\'enseignement adapté Cité Scolaire René Pellet - Lycée des métiers du tertiaire et de l\'artisanat d\'art',
              'addressLine1': '32 rue DE FRANCE',
              'addressLine2': null,
              'addressLine3': null,
              'zipCode': '69602',
              'city': 'VILLEURBANNE CEDEX',
              'country': 'France',
              'homePageUrl': 'https://cas.ent.auvergnerhonealpes.fr/login?service=https%3A%2F%2Ferea-pellet.ent.auvergnerhonealpes.fr%2Fsg.do%3FPROC%3DPAGE_ACCUEIL',
              'emsCode': 'rra',
              'emsOIDCWellKnownUrl': 'https://sso.ent.auvergnerhonealpes.fr/oidc/.well-known'
            }
          },
          {
            'id': 'SKO-E-843f920a-c50b-4196-8ea4-be268ca530e9',
            'type': 'school',
            'attributes': {
              'name': 'LPO Louis Aragon - Lycée des métiers de l\'énergie et du développement durable',
              'addressLine1': 'Rue Pierre Mendès France',
              'addressLine2': null,
              'addressLine3': null,
              'zipCode': '70400',
              'city': 'HERICOURT',
              'country': 'France',
              'homePageUrl': 'https://cas.eclat-bfc.fr/login?service=https%3A%2F%2Flyc-laragon-hericourt.eclat-bfc.fr%2Fsg.do%3FPROC%3DPAGE_ACCUEIL',
              'emsCode': 'bfc',
              'emsOIDCWellKnownUrl': 'https://sso.eclat-bfc.fr/oidc/.well-known'
            }
          },
          {
            'id': 'SKO-E-494401bd-d47f-47d1-9cf5-ab330c420934',
            'type': 'school',
            'attributes': {
              'name': 'LPO Victor Bérard - Lycée des métiers de l\'optique et des microtechniques',
              'addressLine1': '35 quai Aimé Lamy',
              'addressLine2': null,
              'addressLine3': null,
              'zipCode': '39403',
              'city': 'MOREZ CEDEX',
              'country': 'France',
              'homePageUrl': 'https://cas.eclat-bfc.fr/login?service=https%3A%2F%2Flyc-vberard-morez.eclat-bfc.fr%2Fsg.do%3FPROC%3DPAGE_ACCUEIL',
              'emsCode': 'bfc',
              'emsOIDCWellKnownUrl': 'https://sso.eclat-bfc.fr/oidc/.well-known'
            }
          },
          {
            'id': 'SKO-E-9e62345b-5625-4a25-8941-0ca97351c604',
            'type': 'school',
            'attributes': {
              'name': 'Lycée  professionnel  Gustave Eiffel - Lycées des métiers du bâtiment et des travaux publics',
              'addressLine1': 'Rue Gustave Eiffel',
              'addressLine2': null,
              'addressLine3': null,
              'zipCode': '68701',
              'city': 'CERNAY CEDEX',
              'country': 'France',
              'homePageUrl': 'https://cas.monbureaunumerique.fr/login?service=https%3A%2F%2Flyc-eiffel-cernay.monbureaunumerique.fr%2Fsg.do%3FPROC%3DPAGE_ACCUEIL',
              'emsCode': 'gdest',
              'emsOIDCWellKnownUrl': 'https://sso.monbureaunumerique.fr/oidc/.well-known'
            }
          },
          {
            'id': 'SKO-E-1a08c3d4-b75f-4ea7-bf9a-fb5c25d554cd',
            'type': 'school',
            'attributes': {
              'name': 'Lycée André Citroen - Lycée des métiers de l\'automobile',
              'addressLine1': '5  RUE DU 11EME REGIMENT D\'AVIATION',
              'addressLine2': null,
              'addressLine3': null,
              'zipCode': '57155',
              'city': 'MARLY',
              'country': 'France',
              'homePageUrl': 'https://cas.monbureaunumerique.fr/login?service=https%3A%2F%2Flyc-citroen.monbureaunumerique.fr%2Fsg.do%3FPROC%3DPAGE_ACCUEIL',
              'emsCode': 'gdest',
              'emsOIDCWellKnownUrl': 'https://sso.monbureaunumerique.fr/oidc/.well-known'
            }
          },
          {
            'id': 'SKO-E-c83e275b-d61d-46d8-99bd-852c9d189cdb',
            'type': 'school',
            'attributes': {
              'name': 'Lycée André Malraux - Lycée des métiers filière bois',
              'addressLine1': '13 rue DE L\'EPINETTE',
              'addressLine2': null,
              'addressLine3': null,
              'zipCode': '88204',
              'city': 'REMIREMONT CEDEX',
              'country': 'France',
              'homePageUrl': 'https://cas.monbureaunumerique.fr/login?service=https%3A%2F%2Flyc-malraux.monbureaunumerique.fr%2Fsg.do%3FPROC%3DPAGE_ACCUEIL',
              'emsCode': 'gdest',
              'emsOIDCWellKnownUrl': 'https://sso.monbureaunumerique.fr/oidc/.well-known'
            }
          },
          {
            'id': 'SKO-E-72952dd9-fbff-4909-ae12-ea4b73c67467',
            'type': 'school',
            'attributes': {
              'name': 'Lycée Atlas',
              'addressLine1': '8 rue Kervégan',
              'addressLine2': '',
              'addressLine3': '',
              'zipCode': '44240',
              'city': 'Nantes',
              'country': 'France',
              'homePageUrl': 'https://cas1.kosmoseducation.com/login?service=https%3A%2F%2Fatlas.kosmoseducation.com%2Fsg.do%3FPROC%3DPAGE_ACCUEIL',
              'emsCode': 'metab',
              'emsOIDCWellKnownUrl': 'https://sso1.skolengo.com/oidc/.well-known'
            }
          }
        ],
        'links': {
          'first': 'http://bff-prod-ha/api/v1/bff-sko-app/schools?page[limit]=10&filter[text]=Lyc%C3%A9e&fields=addressLine1%2CaddressLine2%2CaddressLine3%2Ccity%2Ccountry%2CemsCode%2CemsOIDCWellKnownUrl%2ChomePageUrl%2Cname%2CzipCode%2Cdistance',
          'last': 'http://bff-prod-ha/api/v1/bff-sko-app/schools?page[limit]=10&page[offset]=320&filter[text]=Lyc%C3%A9e&fields=addressLine1%2CaddressLine2%2CaddressLine3%2Ccity%2Ccountry%2CemsCode%2CemsOIDCWellKnownUrl%2ChomePageUrl%2Cname%2CzipCode%2Cdistance',
          'next': 'http://bff-prod-ha/api/v1/bff-sko-app/schools?page[limit]=10&page[offset]=10&filter[text]=Lyc%C3%A9e&fields=addressLine1%2CaddressLine2%2CaddressLine3%2Ccity%2Ccountry%2CemsCode%2CemsOIDCWellKnownUrl%2ChomePageUrl%2Cname%2CzipCode%2Cdistance'
        },
        'meta': {
          'totalResourceCount': 326
        }
      }

    expect<ExpectedType>(data).toBeDefined()
  })

  it('should getSchools make the right request', async () => {
    await Skolengo.searchSchool('Lycée Louise Weiss', 10, 0)
    expect(mockedAxios.request).toBeCalledWith({
      baseURL: 'https://api.skolengo.com/api/v1/bff-sko-app',
      url: '/schools',
      method: 'get',
      params: {
        filter: {
          text: 'Lycée Louise Weiss',
        },
        page: {
          limit: 10,
          offset: 0
        }
      },
      responseType: 'json'
    })
  })
  it('should getSchools make the right request', async () => {
    await Skolengo.searchSchoolGPS(48.0, 7.0, 15, 0)
    expect(mockedAxios.request).toBeCalledWith({
      baseURL: 'https://api.skolengo.com/api/v1/bff-sko-app',
      url: '/schools',
      method: 'get',
      params: {
        filter: {
          lat: 48,
          lon: 7
        },
        page: {
          limit: 15,
          offset: 0
        }
      },
      responseType: 'json'
    })
  })
})

