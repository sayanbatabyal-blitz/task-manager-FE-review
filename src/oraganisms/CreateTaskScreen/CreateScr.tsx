import { toast } from "react-toastify";
import { Task, URL } from "../../helper/utils";
import TaskForm from "../TaskForm/TaskForm";
import { ITaskType, formType } from "../../typings/common";
import { useNavigate } from "react-router-dom";
import { createTask } from "../../services/task.service";
import React from "react";
const CreateScr = () => {
  const nav = useNavigate();
  const handleSubmit = React.useCallback(
    async (taskData: ITaskType):Promise<void> => {
      try {
        await createTask(`${URL}/task`, taskData);
        toast.success("Task Created");
        nav("/tasks");
      } catch (err) {
        toast.error("Creation Error");
      }
    },
    [nav]
  );

  return (
    <TaskForm
      taskData={[new Task()]}
      handleSubmit={handleSubmit}
      type={formType.create}
    />
  );
};

export default CreateScr;
