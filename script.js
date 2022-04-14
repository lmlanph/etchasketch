
let grid = 12;

let gridMult = grid * grid;

let contDiv = document.querySelector('.container');

// add pixels, style, event listeners
for (let i = 0; i < gridMult; i++) {
    // console.log('hi')
    let d = document.createElement("div");
    d.classList.add('child');

    d.addEventListener('mouseover', (event) => event.target.style.backgroundColor = 'orange')

    d.style.width = `${500/grid}px`
    d.style.height = `${500/grid}px`

    contDiv.appendChild(d);
}

const layoutGrid = () => {
    const container = document.getElementById('container')
    container.style.gridTemplateColumns = `repeat(${grid}, 1fr)`
}

layoutGrid();

const myClick = () => {console.log(document.getElementsByName('g-size')[0].value)};

document.getElementById("btn").addEventListener("click", myClick());



