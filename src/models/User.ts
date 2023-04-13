export interface User {
    id: string;
    type: string;
    attributes: {
        className: string;
        dateOfBirth: Date;
        regime: string;
        lastName: string;
        firstName: string;
        photoUrl: null;
        externalMail: string;
        mobilePhone: string;
        permissions: {
            schoolId: string;
            service: string;
            permittedOperations: string[];
        }[];
    };
    relationships: {
        school: {
            data: {
                id: string;
                type: string;
            };
        };
    };
}

export interface Included {
    id: string;
    type: string;
    attributes: {
        name: string;
        timeZone: string;
        subscribedServices: string[];
    };
}
