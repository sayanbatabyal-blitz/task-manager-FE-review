export interface TaskFormProps {
  type: formType;
  handleSubmit: (taskData: ITaskType) => Promise<void>;
  taskData: Task[];
}

export enum formType {
  create = "Create",
  modify = "Modify",
}