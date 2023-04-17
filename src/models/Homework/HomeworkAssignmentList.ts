import { Included } from '../Globals'

export interface HomeworkAssignmentList {
    id: string;
    type: string;
    attributes: {
        title: string;
        html: string;
        dueDateTime: string;
        dueDate: string|null;
        done: boolean;
        deliverWorkOnline: boolean;
        onlineDeliveryUrl: null|string;
    };
    relationships: {
        teacher: {
            data: {
                id: string;
                type: string;
            };
        };
        attachments: {
            data: {
                id: string;
                type: string;
            }[];
        };
        subject: {
            data: {
                id: string;
                type: string;
            };
        };
    }
}

type Subject = {
    label: string;
    color: string;
}

type Teacher = {
    title: string;
    firstName: string;
    lastName: string;
    photoUrl: string|null;
}

export type HomeworkAssignmentListIncluded = Included<Subject|Teacher>
