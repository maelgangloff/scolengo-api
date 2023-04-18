import { BaseResponse } from '../Globals'

export type SchoolAttributes = {
    name: string;
    addressLine1: string;
    addressLine2: null | string;
    addressLine3: null | string;
    zipCode: string;
    city: string;
    country: string;
    homePageUrl: string;
    emsCode: string;
    emsOIDCWellKnownUrl: string;
}

export type School = BaseResponse<SchoolAttributes>
