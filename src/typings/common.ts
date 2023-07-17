import { Task } from "../helper/utils";

export interface TaskType{
    _id: string;
    taskId: string | number;
    name: string;
    description: string;
    startDate: Date;
    completionDate: Date;
    status: Status;
}

export interface PagerType{
    tasks:Task[],
    meta:MetaPage
}

export interface MetaPage{
    page_no:string,
    page_size:string,
    total:string
}

export enum statusEnum {
Started = 'Started',
Created= 'Created',
Completed = 'Completed',
}
export type Status = statusEnum.Started | statusEnum.Created | statusEnum.Completed;

export enum formType {
    create = 'Create',
    modify= 'Modify',
    }


export interface statusProp{
status:string,
handleChangeStatus:Function,
val:string | number
}

export interface ButtonProp{
    title:string,
    handleClick:Function,
    scssClass:string
}

export interface ModBtn{
    taskId:string
}

export interface TaskFormProps{
    type:formType,
    handleSubmit:Function,
    taskData:Task[],
}

export interface PagerProps{
    total:number,
    page_size:number,
    activePage:number,
    setActivePage:Function  

}

export const pageSizes=['2','3','5','10']

export interface SizeProp{
    size:string,
    changePageSize:Function
}
export interface CheckProps{
    data:Status[]
    setData:Function
}

export interface DateType{
    date:[Date,Date]
}