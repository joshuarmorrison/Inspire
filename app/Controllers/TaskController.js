import { ProxyState } from "../AppState.js"
import { taskService } from "../Services/TaskService.js"
function _drawTask(){
    let template = ""
    ProxyState.task.forEach((t) => (template += t.Template))
    document.getElementById('task').innerHTML = template
    
    let others = ProxyState.task.filter((t) => t.completed)
    document.getElementById('counter').innerHTML = `${others.length} / ${ProxyState.task.length}`
}

debugger
export class TaskController {
    constructor(){
        ProxyState.on("task", _drawTask)
        _drawTask()
    }
    async getTask(){
        try{ 
            await taskService.getTask()
        } catch (error){
            console.error(error)
        }
    }
    async addTask(){
        
        event.preventDefault()
        /** 
        @type {HTMLFormElement}
        */
       //@ts-ignore
       const form = event.target
       const taskData = { description: form.description.value, }
       try{
           await taskService.addTask(taskData)
       } catch (error){
           console.error(error)
       }
       form.reset()
    }
    async toggleCheck(id){
        try{
            await taskService.toggleCheck(id)
        } catch(error){
            console.error(error)
        }
    }
    async deleteTask(id){
        // @ts-ignore
        Swal.fire({
            title: "Positive?",
            text: "This gun get lost furever!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, lose it!",
        }).then(async(result)=> {
            if (result.isConfirmed){
                console.log(id)
                // @ts-ignore
                await taskService.deleteTask(id)
                // @ts-ignore
                Swal.fire("Thrown out!","Task is gone","success")
            }
        })
    }
}
