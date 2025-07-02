import {Task} from './task.js';

import removeIcon from '../../assets/remove.svg';

class BoardList{

    tasks = [];
    name;
    board;
    listDiv;
    topDiv;
    tasksContainer;
    addNewTaskDiv;
    display = document.querySelector('#display');

    constructor(name, board){
        //set its name
        this.name = name;
        this.board = board;

        //create the list div
        const listDiv = document.createElement('div');
        this.listDiv = listDiv;
        this.listDiv.classList.add('board-list');

        //create the top div, arrows and remove button
        const topDiv = document.createElement('div');
        this.topDiv = topDiv;
        topDiv.classList.add('top-of-list');

        const topText = document.createElement('p');
        topText.textContent = this.name;
        topDiv.appendChild(topText);

        const removeButton = document.createElement('img');
        removeButton.src = removeIcon;
        removeButton.classList.add('list-icon');
        removeButton.classList.add('remove-list-button');
        topDiv.appendChild(removeButton);

        removeButton.addEventListener('click', () => {
            //when the remove button is clicked, remove the list from the display and from the board
            this.display.removeChild(this.listDiv);
            const index = this.board.lists.indexOf(this);
            this.board.lists.splice(index, 1);
        });

        listDiv.appendChild(topDiv);
        

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

        addNewTaskDiv.addEventListener('click', () => {
            //when the add new task div is clicked, create a new task and add it to the list
            const taskDesc = prompt('Enter the description of the new task:');
            if (taskDesc){
                const newTask = new Task(taskDesc, this);
                this.addTask(newTask);
            }
        });


        
    }   

    displayList(){
        //display a list by appending its div to the display after adding all its tasks to itself
        for (const task of this.tasks){
            this.tasksContainer.appendChild(task.taskDiv);
        }

        this.display.appendChild(this.listDiv);
    }

    addTask(task){
        //push the task to be added to the tasks array
        this.tasks.push(task);
        this.tasksContainer.appendChild(task.taskDiv);
    }

}

export {BoardList};