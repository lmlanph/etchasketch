// default grid
let grid = 12;


const layoutGrid = (dim) => {

    if (dim > 100) {
        dim = 100
    } else if (dim < 2) {
        dim = 2
    }

    let contDiv = document.querySelector('.container');

    // remove all children, if present
    while (contDiv.firstChild) {
        contDiv.removeChild(contDiv.lastChild);
      }

    let gridMult = dim * dim;

    // add pixels, style, event listeners
    for (let i = 0; i < gridMult; i++) {
        // console.log('hi')
        let d = document.createElement("div");
        d.classList.add('child');

        d.addEventListener('mouseover', (event) => event.target.style.backgroundColor = 'orange')

        d.style.width = `${500/dim}px`
        d.style.height = `${500/dim}px`

        contDiv.appendChild(d);
    }

    const container = document.getElementById('container')
    container.style.gridTemplateColumns = `repeat(${dim}, 1fr)`

    let val = document.getElementsByName('g-size')[0].value;
    val = "";
}


layoutGrid(grid);


const myClick = () => {
    let val = document.getElementsByName('g-size')[0].value;
    // console.log(val);
    grid = val;

    layoutGrid(grid);
    
};

document.getElementById("inpt").addEventListener('keypress', (e) => {
    if (e.key === "Enter") {
    event.preventDefault();
    }
})

document.getElementById("btn").addEventListener("click", myClick);



