//Iteration 2 Done

class Character {
  constructor(col, row) {
    this.row = row;
    this.col = col;

    window.addEventListener('keydown', (event) => {
      // Stop the default behavior (moving the screen to the left/up/right/down)
      event.preventDefault();

      // React based on the key pressed
      switch (event.keyCode) {
        case 37:
          player.moveLeft();
          drawEverything();
          break;
        case 38:
          player.moveUp();
          drawEverything();
          break;
        case 39:
          player.moveRight();
          drawEverything();
          break;
        case 40:
          player.moveDown();
          drawEverything();
          break;
      }
    });
  }

  moveUp() {
    this.row--;
  }

  moveRight() {
    this.col++;
  }

  moveDown() {
    this.row++;
  }

  moveLeft() {
    this.col--;
  }

  drawPlayer(row, col) {
    const height = canvas.height;
    const width = canvas.width;
    const characterImageURL = '/images/character-down.png';
    const characterImage = new Image();
    characterImage.src = characterImageURL;

    row = this.row * 50;
    col = this.col * 50;
    characterImage.addEventListener('load', () => {
      context.drawImage(characterImage, col, row);
    });
  }
}
