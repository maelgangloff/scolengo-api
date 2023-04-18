import { BaseResponse, BaseObject } from '../Globals'

export type User = BaseResponse<{
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
    }, {
        school?: {
            data: BaseObject;
        };
        students?: {
            data: BaseObject[];
        };
}>

export type UserIncluded = BaseResponse<{
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
        data: BaseObject;
    };
}>

export type SimpleUser = {
    title: string;
    firstName: string;
    lastName: string;
    photoUrl: string|null;
}
