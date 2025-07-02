class BoardList{

    tasks = []
    name;
    listDiv;
    tasksContainer;
    addNewTaskDiv;
    display = document.querySelector('#display');

    constructor(name){
        //set its name
        this.name = name;

        //create the list div
        const listDiv = document.createElement('div');
        this.listDiv = listDiv;
        this.listDiv.classList.add('board-list');
        this.listDiv.textContent = this.name;

        //create the tasks container
        const tasksContainer = document.createElement('div');
        this.tasksContainer = tasksContainer;
        this.tasksContainer.classList.add('tasks-container');
        listDiv.appendChild(tasksContainer);

        //create the add new task div
        const addNewTaskDiv = document.createElement('div');
        this.addNewTaskDiv = addNewTaskDiv;
        addNewTaskDiv.classList.add('add-new-task');
        addNewTaskDiv.textContent = `+ Add a new task to ${this.name}`;
        listDiv.appendChild(addNewTaskDiv);
    }   

    displayList(){
        //display a list by appending its div to the display
        this.display.appendChild(this.listDiv);
    }

}

export {BoardList};