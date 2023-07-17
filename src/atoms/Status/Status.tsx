import { statusEnum, statusProp } from "../../typings/common"

const Status = ({status, val ,handleChangeStatus}:statusProp)=>{
return(
    <div className="status ">
    {(status===statusEnum.Created)?<div className="active created">Created</div>:<div className="inactive" onClick={()=>handleChangeStatus(statusEnum.Created,val)} >Created</div>}
    {(status===statusEnum.Started)?<div className="active started">Started</div>:<div className="inactive" onClick={()=>handleChangeStatus(statusEnum.Started,val)}>Started</div>}    
    {(status===statusEnum.Completed)?<div className="active completed">Completed</div>:<div className="inactive" onClick={()=>handleChangeStatus(statusEnum.Completed,val)} >Completed</div>}    
    </div>
)

}

export default Status