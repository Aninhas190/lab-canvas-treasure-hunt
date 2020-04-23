//main.js
const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');

const width = canvas.width;
const height = canvas.height;

// Iteration 1 - Done
const drawGrid = () => {
  // TODO: write the code of the function
  let add = 50;
 let widthLine = width;
 let heightLine = height;
  for (let row = 0; row <= width; row+= add) {
    context.moveTo(row, 0);
    context.lineTo(row, widthLine);
  }    
  for (let  col = 0; col <= height; col += add) {  
    context.moveTo(0, col); 
    context.lineTo(heightLine, col);
  }
  context.strokeStyle = 'black';
  context.stroke();
}

/*function drawEverything() {
  drawGrid();
  // drawPlayer()
  // drawTreasure()
}

drawEverything();*/
drawGrid();

