class Background {
  constructor (width, height) {
    this.width = width;
    this.height = height;
  }

  // Iteration 1 - Done
  drawGrid() {
    // TODO: write the code of the function
    let add = 50;
    let widthLine = this.width;
    let heightLine = this.height;
    for (let row = 0; row <= this.width; row+= add) {
      context.moveTo(row, 0);
      context.lineTo(row, widthLine);
    }    
    for (let  col = 0; col <= this.height; col += add) {  
      context.moveTo(0, col); 
      context.lineTo(heightLine, col);
    }
    context.strokeStyle = 'grey';
    context.stroke();
  }
}
