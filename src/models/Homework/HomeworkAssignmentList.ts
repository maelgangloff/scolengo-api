import { SimpleUser } from '../App/User'
import { BaseResponse, BaseObject } from '../Globals'

export type HomeworkAssignmentList = BaseResponse<{
        title: string;
        html: string;
        dueDateTime: string;
        dueDate: string|null;
        done: boolean;
        deliverWorkOnline: boolean;
        onlineDeliveryUrl: null|string;
    }, {
        teacher: {
            data: BaseObject
        };
        attachments: {
            data: BaseObject[];
        };
        subject: {
            data: BaseObject
        };
    }>

type Subject = {
    label: string;
    color: string;
}

export type HomeworkAssignmentListIncluded = BaseResponse<Subject|SimpleUser>
