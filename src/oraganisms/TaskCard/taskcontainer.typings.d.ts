export interface TaskContainerProp{
    taskId:string,
    name:string,
    status:Status
    description:string,
    startDate:string,
    completionDate:string,
    handleModify:Function,
}

export enum statusEnum {
    Started = 'Started',
    Created= 'Created',
    Completed = 'Completed',
    }
    export type Status = statusEnum.Started | statusEnum.Created | statusEnum.Completed;
    