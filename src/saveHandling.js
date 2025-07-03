import {Board} from './classes/board.js';
import {BoardList} from './classes/boardList.js';
import {Task} from './classes/task.js';

let boards = [];

function initFromSave() {
    boards.length = 0; 
    const boardsContainer = document.querySelector('#boards');
    if (boardsContainer) boardsContainer.innerHTML = '';
    if (localStorage.getItem('boards')) {
        const savedBoards = JSON.parse(localStorage.getItem('boards'));
        savedBoards.forEach(savedBoard => {
            const board = new Board(savedBoard.name, false);
            if (savedBoard.lists) {
                savedBoard.lists.forEach(savedList => {
                    const list = new BoardList(savedList.name, board);
                    if (savedList.tasks) {
                        savedList.tasks.forEach(taskDesc => {
                            const task = new Task(taskDesc, list);
                            list.tasks.push(task);
                        });
                    }
                    board.lists.push(list);
                });
            }
            boards.push(board);
        });
    }
    save(); 
}

function save(){
    localStorage.setItem('boards', JSON.stringify(boards.map(board => board.toJSON())));
}

function addNewBoard(board){
    boards.push(board);
    save();
}

function removeBoard(board){
    const index = boards.findIndex(b => b.name === board.name);
    if (index !== -1) {
        boards.splice(index, 1);
    }
    save();
}

export {boards, save, initFromSave, addNewBoard, removeBoard };