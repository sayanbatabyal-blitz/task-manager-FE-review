import { Status, statusEnum } from "../typings/common";

export class Task{
    public taskId:string;
    public name:string;
    public description:string;
    public startDate:string;
    public completionDate:string;
    public status:Status;

    constructor(){
         this.taskId=""
         this.name=""
         this.description=""
         this.startDate="2002-01-01"
         this.completionDate=""
         this.status=statusEnum.Created
    }
}

export class Page{
    public page_no:string;
    public total:string;
    public page_size:string;
    public pageQuery:string;
    constructor(){
        this.page_no='1'
        this.total='4'
        this.page_size='2'
        this.pageQuery=`?page_no=0&page_size=${this.page_size}`
    }
}


export const newQuery = (page_no:string,page_size:string):string=>{
    return `?page_no=${page_no}&page_size=${page_size}`
}



export const URL="http://localhost:4000"
export const URL2="http://localhost:5000"
