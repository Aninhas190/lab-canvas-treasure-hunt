//main.js

const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');

const width = canvas.width;
const height = canvas.height;

const row = width/50;
const col = height/50;



const player = new Character(8, 6);
const background = new Background(width, height);
const treasure = new Treasure(row, col)

function drawEverything() {
  context.clearRect(0, 0, width, height)
  background.drawGrid();
  player.drawPlayer();
  treasure.drawTreasure()
}


drawEverything();
