import axios from "axios";

const baseUrl = 'http://localhost:3000'

interface IToDo {
    id?: number,
    text: string,
    is_done?: boolean
}

async function getToDos(): Promise<Array<IToDo>> {
    const res = await axios.get(`${baseUrl}/todo`)
    return res.data;
}

async function createToDo(dto: IToDo) {
    return await axios.post(`${baseUrl}/todo`, dto)
}

async function removeToDo(id: number) {
    return await axios.delete(`${baseUrl}/todo/${id}`)
}

async function changeStatus(id: number) {
    return await axios.patch(`${baseUrl}/todo/${id}`)
}

export const todoApiModule = {
    getToDos,
    createToDo,
    removeToDo,
    changeStatus
}
// 