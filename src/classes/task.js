import removeIcon from '../../assets/cross-icon.svg';

class Task {

    description;
    taskDiv;
    list;

    constructor(description, list){
        //set the content
        this.description = description;
        this.list = list;

        const taskDiv = document.createElement('div');
        taskDiv.classList.add('task');
        this.taskDiv = taskDiv;

        const descriptionP = document.createElement('p');
        descriptionP.textContent = this.description;
        taskDiv.appendChild(descriptionP);


        const removeButton = document.createElement('img');
        removeButton.src = removeIcon;
        removeButton.classList.add('remove-task-button');
        removeButton.classList.add('list-icon');
        this.taskDiv.appendChild(removeButton);

        removeButton.addEventListener('click', () => {
            //when the remove button is clicked, remove the list from the display and from the board
            this.list.tasksContainer.removeChild(this.taskDiv);
            const index = this.list.tasks.indexOf(this);
            this.list.tasks.splice(index, 1);
        });

    }

}

export {Task};