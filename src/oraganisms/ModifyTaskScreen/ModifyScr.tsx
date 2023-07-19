import { Params, useNavigate, useParams } from "react-router-dom";
import { Task, URL } from "../../helper/utils";
import React from "react";
import TaskForm from "../TaskForm/TaskForm";
import { ITaskType, formType } from "../../typings/common";
import { AxiosError } from "axios";
import { toast } from "react-toastify";
import { useQuery } from "@tanstack/react-query";
import { getTask, updateTask } from "../../services/task.service";
import Load from "../../atoms/Loader";
const ModifyScr = () => {
  const nav = useNavigate();
  const params: Params = useParams();
  const { data, isLoading } = useQuery({
    queryKey: ["task"],
    queryFn: () => getTask(`${params.id as string}`),
  });

  const handleSubmit = React.useCallback(
    async (task: ITaskType): Promise<void> => {
      const taskUpdated = {
        description: task.description,
        startDate: task.startDate,
        completionDate: task.completionDate,
      };

      if (taskUpdated.completionDate === null) taskUpdated.completionDate = "";

      try {
        await updateTask(`${URL}/task/${params.id as string}`, taskUpdated);
        toast.success("Task Updated");
        nav("/tasks");
      } catch (err) {
        err as AxiosError;
        console.log(err);
      }
    },
    [nav, params.id]
  );
  return (
    <>
      {isLoading ? (
        <Load content="Data Loading" />
      ) : (
        <TaskForm
          handleSubmit={handleSubmit}
          taskData={data ? data : [new Task()]}
          type={formType.modify}
        />
      )}
    </>
  );
};

export default ModifyScr;
