export interface InputFieldProps{
    placeholder:string,
    type:string,
    value:string,
    onChange:(value:string)=>void,
    disabled:boolean
}