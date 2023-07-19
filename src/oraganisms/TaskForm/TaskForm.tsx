import { Form } from "rsuite";
import ButtonSubmit from "../../atoms/Button/ButtonSubmit";
import "./taskForm.scss";
import { TaskFormProps, formType } from "../../typings/common";
import { useState, useEffect } from "react";
import FormGroup from "../../molecules/FormGroup";
import React from "react";
const TaskForm = ({ type, handleSubmit, taskData }: TaskFormProps) => {
  const [name, setName] = useState<string>("");
  const [taskId, setTaskId] = useState<string>("");
  const [startDate, setStartDate] = useState<string>(
    new Date().toISOString().substring(0, 10)
  );
  const [completionDate, setCompletionDate] = useState<string>(
    new Date().toISOString().substring(0, 10)
  );
  const [description, setDescription] = useState<string>("");

  useEffect(() => {
    setName(taskData[0].name);
    setDescription(taskData[0].description);
    setCompletionDate(
      taskData[0].completionDate
        ? taskData[0].completionDate.substring(0, 10)
        : ""
    );
    setStartDate(taskData[0].startDate.substring(0, 10));
    setTaskId(taskData[0].taskId);
  }, [taskData]);

  const updateFields = React.useCallback((value: string, type: string) => {
    if (type == "taskId") setTaskId(value);
    else if (type == "name") setName(value);
    else if (type == "description") setDescription(value);
    else if (type == "startDate") setStartDate(value);
    else if (type == "completionDate") setCompletionDate(value);
  }, []);
  return (
    <Form className="form">
      <FormGroup
        disabled={type == formType.modify}
        label="Task ID"
        value={taskId}
        setValue={(val) => updateFields(val, "taskId")}
        type="number"
        placeholder="Task ID"
      />
      <FormGroup
        disabled={type == formType.modify}
        label="Task Name"
        value={name}
        setValue={(val) => updateFields(val, "name")}
        type="text"
        placeholder="Task Name"
      />

      <FormGroup
        disabled={false}
        label="Description"
        value={description}
        setValue={(val) => updateFields(val, "description")}
        type="text"
        placeholder="Description"
      />
      <FormGroup
        disabled={false}
        label="Start Date"
        value={startDate}
        setValue={(val) => updateFields(val, "startDate")}
        type="date"
        placeholder=""
      />
      <FormGroup
        disabled={false}
        label="Completion Date"
        value={completionDate}
        setValue={(val) => updateFields(val, "completionDate")}
        type="date"
        placeholder=""
      />
      <ButtonSubmit
        title={type}
        onClick={() =>
          handleSubmit({
            taskId,
            name,
            description,
            startDate,
            completionDate,
          })
        }
        scssClass="buttonSubmit"
      />
    </Form>
  );
};

export default TaskForm;
