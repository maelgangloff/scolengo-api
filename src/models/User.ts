export interface User {
    id: string;
    type: string;
    attributes: {
        addressLines?: string[];
        postalCode?: string;
        city?: string;
        country?: string;
        lastName: string;
        firstName: string;
        photoUrl: string|null;
        externalMail: string;
        mobilePhone: string;
        permissions: {
            schoolId: string;
            service: string;
            permittedOperations: string[];
        }[];
        className?: string;
        dateOfBirth?: string;
        regime?: string;
    };
    relationships: {
        students?: {
            data: {
                id: string;
                type: string;
        }[]};
        school?: {
            data: {
                id: string;
                type: string;
        }};
    }
}

export interface Included {
    id: string;
    type: string;
    attributes: {
        name?: string;
        timeZone?: string;
        subscribedServices?: string[];
        lastName?: string;
        firstName?: string;
        photoUrl?: string| null;
        className?: string;
        dateOfBirth?: string;
        regime?: string;
    };
    relationships?: {
        school: {
            data: {
                id: string;
                type: string;
        }
        };
    }
}
