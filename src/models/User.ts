import { Included } from './Globals'

export interface User {
    id: string;
    type: string;
    attributes: {
        className?: string;
        dateOfBirth?: string;
        regime?: string;
        lastName: string;
        firstName: string;
        photoUrl: string|null;
        externalMail?: string;
        mobilePhone?: string;
        permissions: {
            schoolId: string;
            service: string;
            permittedOperations: string[];
        }[];
        addressLines?: string[];
        postalCode?: string;
        city?: string;
        country?: string;
    };
    relationships: {
        school?: {
            data: {
                id: string;
                type: string;
            };
        };
        students?: {
            data: {
                id: string;
                type: string;
            }[];
        };
    };
}

export type UserIncluded = Included<{
    name: string;
    timeZone: string;
    subscribedServices: string[];
} | {
    lastName: string;
    firstName: string;
    photoUrl: string|null;
    className: string;
    dateOfBirth: string;
    regime: string;
}, {
    school: {
        data: {
            id: string;
            type: string;
        };
    };
}>
