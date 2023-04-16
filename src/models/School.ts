export interface SchoolAttributes {
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

export interface School {
    id: string;
    type: string;
    attributes: SchoolAttributes;
}
