import { BaseResponseAttributes } from '../Global'

export type SchoolFilter = { text: string } | { lat: number, lon: number }

export interface SchoolAttributes {
  name: string
  addressLine1: string
  addressLine2: null | string
  addressLine3: null | string
  zipCode: string
  city: string
  country: string
  homePageUrl: string
  emsCode: string
  emsOIDCWellKnownUrl: string
  distance?: number
}

export type School = BaseResponseAttributes<SchoolAttributes, 'school'>
