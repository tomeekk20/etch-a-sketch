// sketchpad Variables
let sketchPad_div = document.querySelector('.sketch-pad');
let sketchScreen_div = document.querySelector('.sketch-screen');

// function to create the grid
function createGrid(x = 32) {
  let size = sketchScreen_div.offsetWidth / x;
  for (var i = 0; i < x * x; i++) {
    box_div = document.createElement('div');
    box_div.style.width = size + "px";
    box_div.style.height = size + "px";
    sketchScreen_div.appendChild(box_div);
    box_div = box_div.classList.add('box');
  }
    let boxes = document.querySelectorAll('.box');
    sketch(boxes);
}

function sketch(boxes) {
  boxes.forEach((div) => {

  // and for each one we add a 'click' listener
  div.addEventListener('mouseover', (e) => {
    div.classList.add('black-box');
  });
});
}


createGrid();
