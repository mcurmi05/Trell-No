//Index JS contains javascript that is fundamental to the website:
  //Sidebar functionality


import './/styles/general.css'
import './/styles/sidebar.css'
import './/styles/navbar.css'
import './/styles/display/display.css'
import './/styles/display/boardDisplay.css'

import {Board} from './classes/board.js'
import {BoardList} from './classes/boardList.js';


const navbar = document.querySelector('#navbar')
const sidebar = document.querySelector('#sidebar');
const sidebarToggleBtn = document.querySelector('#sidebar-toggle-button');

const sidebarBoardsBtn = document.querySelector('#sidebar-boards');
const userBoardsDiv = document.querySelector('#boards')
const boardsArrow = document.querySelector('.sidebar-arrow');

const specificBoards = document.querySelectorAll('.specific-board');



//Burger button in the navbar to toggle the side bar
sidebarToggleBtn.addEventListener('click', () => {
  sidebar.classList.toggle('active');
});

//Clicking the boards div in the sidebar should rotate the arrow and collapse/uncollapse the boards under it
sidebarBoardsBtn.addEventListener('click', () => {
  userBoardsDiv.classList.toggle('collapsed');
  boardsArrow.classList.toggle('rotated');
});


let exampleBoard1 = new Board('Example1');
exampleBoard1.addList(new BoardList('To Do'));

let exampleBoard2 = new Board('Example2');
let exampleBoard3 = new Board('Example3');  
let exampleBoard4 = new Board('Example4');
let exampleBoard5 = new Board('Example5');
let exampleBoard6 = new Board('Example6');
let exampleBoard7 = new Board('Example7');
let exampleBoard8 = new Board('Example8');  
let exampleBoard9 = new Board('Example9');
let exampleBoard10 = new Board('Example10');  
let exampleBoard11 = new Board('Example11');
let exampleBoard12 = new Board('Example12');
let exampleBoard13 = new Board('Example13');
let exampleBoard14 = new Board('Example14');
let exampleBoard15 = new Board('Example15');
let exampleBoard16 = new Board('Example16');
let exampleBoard17 = new Board('Example17');
let exampleBoard18 = new Board('Example18');
let exampleBoard19 = new Board('Example19');
let exampleBoard20 = new Board('Example20');

