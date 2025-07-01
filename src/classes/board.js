class Board{

    lists = [];
    name;
    

    constructor(name){
        this.name = name;

        const boardsContainer = document.querySelector('#boards');

        const sidebarDiv = document.createElement('div');
        sidebarDiv.classList.add('sidebar-div')
        sidebarDiv.classList.add('indented');

        const sidebarText = document.createElement('p');
        sidebarText.textContent = this.name;

        sidebarDiv.appendChild(sidebarText);
        boardsContainer.appendChild(sidebarDiv);


        const display = document.querySelector('#display')
        
    }

}

export {Board};