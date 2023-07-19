export interface statusProp{
    status:string,
    handleChangeStatus:(status:Status, val:string | number)=>void,
    val:string | number
    }