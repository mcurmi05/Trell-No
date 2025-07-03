import { clearDisplay } from '../display.js';
import { BoardList } from './boardList.js';
import { addNewBoard, removeBoard, save } from '../saveHandling.js';
import editIcon from '../../assets/edit.svg';

class Board{

    lists = [];
    name;
    addNewListDiv;
    display = document.querySelector('#display');

    constructor(name, autoAdd = true){
        //set its name
        this.name = name.trim();

        //create the sidebar board div
        const sidebarDiv = document.createElement('div');
        sidebarDiv.classList.add('sidebar-div');
        sidebarDiv.classList.add('specific-board');
        const sidebarText = document.createElement('p');
        sidebarText.textContent = this.name;
        sidebarDiv.appendChild(sidebarText);

        //add the sidebar board div to the sidebar
        const boardsContainer = document.querySelector('#boards');
        boardsContainer.appendChild(sidebarDiv);

        //create the edit button
        const editButton = document.createElement('img');
        editButton.src = editIcon;
        editButton.classList.add('edit-button');
        sidebarDiv.appendChild(editButton);

        //add click event to edit button
        editButton.addEventListener('click', (e) => {
            e.stopPropagation(); // this prevents the board from loading when clicking the edit button
            this.showEditModal(sidebarText);
        });

        //ensure that clicking the sidebar div displays the board
        sidebarDiv.addEventListener('click', () => {
            this.displayBoard();
        });

        //create the add new list div for this board (displaying it is handled in displayBoard)
        const addNewListDiv = document.createElement('div');
        addNewListDiv.classList.add('add-new-list');
        addNewListDiv.textContent = `+ Add a new list to ${this.name}`;
        this.addNewListDiv = addNewListDiv;

        addNewListDiv.addEventListener('click', () => {
            //when the add new task div is clicked, create a new task and add it to the list
            const listName = prompt('Enter the name of the new list:');
            if (listName){
                const newList = new BoardList(listName, this);
                this.addList(newList);
                this.display.appendChild(newList.listDiv);
                save();
            }
        });

        if (autoAdd) {
            addNewBoard(this);
        }
    }

    showEditModal(sidebarText) {
        //create the modal overlay
        const modalOverlay = document.createElement('div');
        modalOverlay.classList.add('modal-overlay');

        //content
        const modalContent = document.createElement('div');
        modalContent.classList.add('modal-content');

        //title
        const modalTitle = document.createElement('h3');
        modalTitle.textContent = `Edit "${this.name}"`;
        modalContent.appendChild(modalTitle);

        //rename button
        const renameButton = document.createElement('button');
        renameButton.classList.add('modal-button');
        renameButton.textContent = 'Rename';
        renameButton.addEventListener('click', () => {
            this.renameBoard(sidebarText);
            document.body.removeChild(modalOverlay);
            save();
        });
        modalContent.appendChild(renameButton);

        //delete button
        const deleteButton = document.createElement('button');
        deleteButton.classList.add('modal-button', 'delete-button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', () => {
            this.deleteBoard(sidebarText.parentElement);
            document.body.removeChild(modalOverlay);
            removeBoard(this);
        });
        modalContent.appendChild(deleteButton);

        //cancel button
        const cancelButton = document.createElement('button');
        cancelButton.classList.add('modal-button', 'cancel-button');
        cancelButton.textContent = 'Cancel';
        cancelButton.addEventListener('click', () => {
            document.body.removeChild(modalOverlay);
        });
        modalContent.appendChild(cancelButton);
        modalOverlay.appendChild(modalContent);

        //close when clicking outside the modal
        modalOverlay.addEventListener('click', (e) => {
            if (e.target === modalOverlay) {
                document.body.removeChild(modalOverlay);
            }
        });

        document.body.appendChild(modalOverlay);
    }

    renameBoard(sidebarText) {
        const newName = prompt('Enter new board name:', this.name);
        if (newName && newName.trim() !== '') {
            this.name = newName.trim();
            sidebarText.textContent = this.name;
            this.addNewListDiv.textContent = `+ Add a new list to ${this.name}`;
            save();
        }
    }

    deleteBoard(sidebarDiv) {
        if (confirm(`Are you sure you want to delete "${this.name}"?`)) {
            sidebarDiv.remove();
            //clear display if this board was currently displayed
            if (this.display.children.length > 0) {
                clearDisplay();
            }
            save();
        }
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
        save();
    }

    toJSON() {
    return {
        name: this.name,
        lists: this.lists.map(list => list.toJSON())
    };
}

}

export {Board};