import { SimpleUser } from '../App/User'
import { BaseResponse, BaseObject } from '../Globals'
import { Homework } from './HomeworkAssignment'

export type HomeworkAssignmentList = BaseResponse<Homework, {
        teacher: {
            data: BaseObject<'teacher'>
        };
        attachments: {
            data: BaseObject<'attachment'>[];
        };
        subject: {
            data: BaseObject<'subject'>
        };
    }>

type Subject = {
    label: string;
    color: string;
}

export type HomeworkAssignmentListIncluded = BaseResponse<Subject|SimpleUser>
