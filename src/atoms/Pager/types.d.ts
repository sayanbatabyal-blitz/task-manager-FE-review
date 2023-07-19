export type PagerProps={
    total:number,
    page_size:number,
    activePage:number,
    setActivePage:(value:number)=>void  
}

export interface SizeProp{
    size:string,
    changePageSize:(value:string)=>void
}