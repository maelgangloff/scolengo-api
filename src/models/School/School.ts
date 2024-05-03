export type SchoolFilter = { text: string } | { lat: number, lon: number }

export interface School {
  id: string
  name?: string
  addressLine1: string | null
  addressLine2: string | null
  addressLine3: string | null
  zipCode: string | null
  city: string | null
  country: string | null
  homePageUrl: string | null
  timeZone?: string | null
  emsCode?: string | null
  emsOIDCWellKnownUrl?: string | null
  distance?: number | null
}
