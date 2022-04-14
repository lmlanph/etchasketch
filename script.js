



let grid = 50;

let gridMult = grid * grid;

let contDiv = document.querySelector('.container');

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