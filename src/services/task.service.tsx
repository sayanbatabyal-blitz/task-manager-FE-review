import { Page, Task, URL } from "../helper/utils"
import axios from 'axios'
import { PagerType, Status } from "../typings/common";
export const getTasks = async (): Promise<Task[]> => {
    try {
        const res = await axios.get(`${URL}/task`)
        return res.data;
    }
    catch (err) {
        throw err;
    }

}

export const pageTasks = async (page: Page, setPage: Function): Promise<PagerType> => {

    try {
        const res = await axios.get(`${URL}/task/page/${page.pageQuery}`)
        setPage({ ...page, ['total']: res.data.meta.total })
        return res.data
    }
    catch (err) {
        throw err
    }

}

export const getTask = async (taskId: string): Promise<Task[]> => {
    try {
        const res = await axios.get(`${URL}/task/${taskId}`)
        return res.data;
    }
    catch (err) {
        throw err;
    }

}

export const updateTaskStatus = async (url: string, data: { status: Status }) => {
    await axios.put(url, data);
}

export const updateTask = async (url: string, data: {
    description: string
    startDate: string,
    completionDate: string
}) => {
    await axios.put(url, data);
}

export const createTask = async (url: string, data: Task) => {
    await axios.post(url, data);
}