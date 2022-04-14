



let grid = 4;
let gridSize = grid * grid;

let contDiv = document.querySelector('.container');

for (let i = 0; i < gridSize; i++) {
    // console.log('hi')
    let d = document.createElement("div");
    d.classList.add('child');
    contDiv.appendChild(d);

}

console.log(contDiv)