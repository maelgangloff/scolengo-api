import { SimpleUser } from '../App/User'
import { BaseResponse, BaseObject } from '../Globals'
import { Homework } from './HomeworkAssignment'

export type HomeworkAssignmentList = BaseResponse<Homework, {
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
