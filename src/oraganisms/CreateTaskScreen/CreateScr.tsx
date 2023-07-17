import { toast } from "react-toastify";
import { Task, URL } from "../../helper/utils";
import TaskForm from "../TaskForm/TaskForm"
import { formType } from "../../typings/common"
import { useNavigate } from "react-router-dom";
import { createTask } from "../../services/task.service";
const CreateScr = () => {
    const nav=useNavigate()
    const handleSubmit= async(taskData:Task):Promise<void> => {
        try{
            await createTask(`${URL}/task`, taskData);
            toast.success("Task Created");
            nav("/tasks")
        }
        catch(error:any){            
            toast.error(error.response.data.error)
        }
    }

  return (
        <TaskForm taskData={[new Task()]} handleSubmit={handleSubmit} type={formType.create}/>
  )
}

export default CreateScr