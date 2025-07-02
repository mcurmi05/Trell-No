import { clearDisplay } from '../display.js';

class Board{

    lists = [];
    name;
    addNewListDiv;
    display = document.querySelector('#display');

    constructor(name){
        //set its name
        this.name = name;

        //create the sidebar board div
        const sidebarDiv = document.createElement('div');
        sidebarDiv.classList.add('sidebar-div')
        sidebarDiv.classList.add('specific-board');
        const sidebarText = document.createElement('p');
        sidebarText.textContent = this.name;
        sidebarDiv.appendChild(sidebarText);

        //add the sidebar board div to the sidebar
        const boardsContainer = document.querySelector('#boards');
        boardsContainer.appendChild(sidebarDiv);

        //ensure that clicking the sidebar div displays the board
        sidebarDiv.addEventListener('click', () => {
            this.displayBoard();
        });

        //create the add new list div for this board (displaying it is handled in displayBoard)
        const addNewListDiv = document.createElement('div');
        this.addNewListDiv = addNewListDiv;
        addNewListDiv.classList.add('add-new-list');
        addNewListDiv.textContent = `+ Add a new list to ${this.name}`;
    }

    displayBoard(){
        //clear the display (a method from index.js)
        clearDisplay();

        //go through the lists of this board and append them to the display
        for (const boardlist of this.lists){
            boardlist.displayList();
        }

        //add the add new list div to the display
        this.display.appendChild(this.addNewListDiv);
    }

    addList(list){
        //push the list to be added to the lists array
        this.lists.push(list);
    }

}

export {Board};