//Index JS contains javascript that is fundamental to the website:
  //Sidebar functionality


import './index.css'

const navbar = document.querySelector('#navbar')
const sidebar = document.querySelector('#sidebar');
const sidebarToggleBtn = document.querySelector('#sidebar-toggle-button');

const sidebarBoardsBtn = document.querySelector('#sidebar-boards');
const userBoardsDiv = document.querySelector('#boards')
const boardsArrow = document.querySelector('.sidebar-arrow');


//Burger button in the navbar to toggle the side bar
sidebarToggleBtn.addEventListener('click', () => {
  sidebar.classList.toggle('active');
});

//Clicking the boards div in the sidebar should rotate the arrow and collapse/uncollapse the boards under it
sidebarBoardsBtn.addEventListener('click', () => {
  userBoardsDiv.classList.toggle('collapsed');
  boardsArrow.classList.toggle('rotated');
});


