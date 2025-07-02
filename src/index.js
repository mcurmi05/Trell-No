//Index JS contains javascript that is fundamental to the website:
  //Sidebar functionality


import './/styles/general.css'
import './/styles/sidebar.css'
import './/styles/navbar.css'
import './/styles/display/display.css'
import './/styles/display/boardDisplay.css'

import {Board} from './classes/board.js'

const navbar = document.querySelector('#navbar')
const sidebar = document.querySelector('#sidebar');
const sidebarToggleBtn = document.querySelector('#sidebar-toggle-button');
const sidebarBoardsBtn = document.querySelector('#sidebar-boards');
const userBoardsDiv = document.querySelector('#boards')
const boardsArrow = document.querySelector('.sidebar-arrow');
const addBoardButton = document.querySelector('#add-board-button');
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

//clicking the plus button should prompt the user for a board name and create a new board
addBoardButton.addEventListener('click', () => {
  const boardName = prompt('Enter board name:');
  if (boardName) {
    new Board(boardName);
  }
});



