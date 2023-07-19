import { ValueType } from "rsuite/esm/Checkbox";
import { Task } from "../helper/utils";

export interface TaskType {
  _id: string;
  taskId: string | number;
  name: string;
  description: string;
  startDate: string;
  completionDate: string;
  status: Status;
}

export type ITaskType = {
  taskId?: string;
  name?: string;
  status?: Status;
  description: string;
  startDate: string;
  completionDate: string;
};

export interface PagerType {
  tasks: Task[];
  meta: MetaPage;
}

export interface MetaPage {
  page_no: string;
  page_size: string;
  total: string;
}

export enum statusEnum {
  Started = "Started",
  Created = "Created",
  Completed = "Completed",
}
export type Status =
  | statusEnum.Started
  | statusEnum.Created
  | statusEnum.Completed;

export enum formType {
  create = "Create",
  modify = "Modify",
}

export interface statusProp {
  status: string;
  handleChangeStatus: (status: Status, val: string | number) => void;
  val: string | number;
}

export interface ButtonProp {
  title: string;
  handleClick: () => void;
  scssClass: string;
}

export interface ModBtn {
  taskId: string;
}

export interface TaskFormProps {
  type: formType;
  handleSubmit: (taskData: ITaskType) => Promise<void>;
  taskData: Task[];
}

export type PagerProps = {
  total: number;
  page_size: number;
  activePage: number;
  setActivePage: (value: number) => void;
};

export const pageSizes = ["2", "3", "5", "10"];

export interface SizeProp {
  size: string;
  changePageSize: (value: string) => void;
}
export interface CheckProps {
  data: Status[];
  setData: (val: string) => void;
}

export interface DateType {
  date: [Date, Date];
}

export type Filters = {
  status: ValueType[];
  startDate: { from?: string; to?: string };
  completionDate: { from?: string; to?: string };
};
