import { useState } from "react"
import { Status as StatusType } from "../../typings/common"
import "./taskcontainer.scss"
import ButtonSubmit from "../../atoms/Button"
import Status from "../../atoms/Status"
import { URL } from "../../helper/utils"
import { updateTaskStatus } from "../../services/task.service"
import { TaskContainerProp } from './taskcontainer.typings'
const TaskContainer = (itm: TaskContainerProp) => {
  const [curStatus, setCurStatus] = useState(itm.status)
  const handleChangeStatus = async (newStatus: StatusType, taskId: string) => {
    setCurStatus(newStatus)
    await updateTaskStatus(`${URL}/task/status/${taskId}`, { status: newStatus })
  }
  return (
    <div className="task" key={itm.taskId}>
      <div className="task-header">
        <span>{itm.name}</span>
        <ButtonSubmit title="Modify" scssClass="modifybtn" handleClick={() => itm.handleModify(itm.taskId)} />
      </div>
      <div className="task-desc">{itm.description}</div>
      <div className="task-date">
        <span className="startdate">{itm.startDate.substring(0, 10)}</span>
        &nbsp;to&nbsp;
        <span className="enddate">{(itm.completionDate) ? itm.completionDate.substring(0, 10) : "Not Set"}</span>
      </div>
      <div><Status val={itm.taskId} handleChangeStatus={handleChangeStatus} status={curStatus} /></div>
    </div>
  )
}

export default TaskContainer