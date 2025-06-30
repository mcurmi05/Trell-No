import './index.css'

const navbar = document.querySelector('#navbar')
const sidebar = document.querySelector('#sidebar');
const sidebarToggleBtn = document.querySelector('#sidebar-toggle-button');

//Our button toggle the sidebar on the left
sidebarToggleBtn.addEventListener('click', () => {
  sidebarToggleBtn.classList.toggle('active');
});
