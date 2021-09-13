import {ProxyState} from "../AppState.js";
import { Task } from "../Models/Task.js";

// @ts-ignore
const sandBoxApi = axios.create({
    baseURL: "https://bcw-sandbox.herokuapp.com/api/josh/todos"
})
class TaskService {
    constructor(){
        console.log("hello from the Todo controller")
        this.getTask();
        
    }
    async deleteTask(id){
        try {
            await sandBoxApi.delete(id);
            ProxyState.task = ProxyState.task.filter((t) => t.id !== id)
        } catch (error){
            console.error(error)
        }
    }
    async addTask(taskData){
        try {
            let res = await sandBoxApi.post("", taskData)
            ProxyState.task = [...ProxyState.task, new Task(res.data)]
        } catch (error) {
            console.error(error)
        }
    }
    async getTask(){
        try {
            let res = await sandBoxApi.get()
            ProxyState.task = res.data.map((t) => new Task(t))
        } catch (error){
            console.error(error)
        }
    }
    async toggleCheck(id){
        try{
            const res = ProxyState.task.find((t) => t.id === id)
            res.completed = !res.completed
            await sandBoxApi.put(`${id}`, res)
        } catch (error){
            console.error(error)
        }
        this.getTask()
    }

}
export const taskService = new TaskService();