export class Task{
    constructor(taskData){
        this.id = taskData.id;
        this.completed = taskData.completed;
        this.description = taskData.description;
        this.name = taskData.name;
        
    }
    get Template(){
        return /*html*/`
    
 <form>
     <input type="checkbox" id= "${this.id}" name= "checkbox" 
        ${this.completed ? 'checked' : ''} onclick="app.taskController.toggleCheck('${this.id}')"/>
    <label for= "checkbox">
    ${this.description}
    <i class="fas fa-trash-alt trashPosition" onclick= "app.taskController.deleteTask('${this.id}')">
    </i>
    </label>
    </form>
    `
       
    }
}