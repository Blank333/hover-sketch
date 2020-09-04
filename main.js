const container = document.querySelector("#container");
let gridSize = 256;

for(let i = 0; i < gridSize; i++){
    const div = document.createElement('div');
    div.classList.add('grids');
    container.appendChild(div);
}

const gridElement = document.querySelectorAll(".grids");


container.addEventListener("mousedown", clickGrid, {capture: true});

function clickGrid(e) {
    if(e.button == 0){
        container.addEventListener('mousemove', paint);
        e.preventDefault();
       
    }
}
function paint(e) {
    if(e.buttons == 0){
        container.removeEventListener('mousemove', paint);
    }
    e.target.setAttribute('style', 'background: black;');
    
}