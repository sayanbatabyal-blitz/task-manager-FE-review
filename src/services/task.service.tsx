import { Page, Task, URL } from "../helper/utils";
import axios, { AxiosResponse } from "axios";
import { Filters, ITaskType, PagerType, Status } from "../typings/common";
export const getTasks = async (): Promise<Task[]> => {
  const res: AxiosResponse<Task[]> = await axios.get(`${URL}/task`);
  return res.data;
};

export const pageTasks = async (
  page: Page,
  setPage: (page: Page) => void
): Promise<PagerType> => {
  const res: AxiosResponse<PagerType> = await axios.get(
    `${URL}/task/page/${page.pageQuery}`
  );
  setPage({ ...page, ["total"]: res.data.meta.total });
  return res.data;
};

export const getTask = async (taskId: string): Promise<Task[]> => {
  const res: AxiosResponse<Task[]> = await axios.get(`${URL}/task/${taskId}`);
  return res.data;
};

export const updateTaskStatus = async (
  url: string,
  data: { status: Status }
) => {
  await axios.put(url, data);
};

export const updateTask = async (
  url: string,
  data: {
    description: string;
    startDate: string;
    completionDate: string;
  }
) => {
  await axios.put(url, data);
};

export const createTask = async (url: string, data: ITaskType) => {
  await axios.post(url, data);
};

export const getbulkDownload = async (
  url: string,
  filters: Filters
): Promise<AxiosResponse<BlobPart>> => {
  return await axios.post(url, filters);
};
export const forBulkUpload = async (url: string, data: FormData) => {
  return await axios.post(url, data);
};
