//Iteration 2 Done

class Character {
    constructor (col, row) {
        this.row = row;
        this.col = col;
    }
    
    moveUp() {
        this.row--;
        /*window.addEventListener('keydown', (event) => {
            if (event.keyCode === 38) {
                col--;
            } 
        });*/
    }

    moveRight() {
        this.col++;
        /*
        window.addEventListener('keydown', (event) => {
            if (event.keyCode === 39) {
                this.row++
            }
        })*/
    }

    moveDown() {
        this.row++;
       /* window.addEventListener('keydown', (event) => {
            if (event.keyCode === 40) {
                this.col++
            }
        });*/
    }

    moveLeft() {
        this.col--;
        /*window.addEventListener('keydown', (event) => {
            if (event.keyCode === 37) {
                this.row--;
            }
        })*/
    }
}


const player = new Character(0, 0); // (0,0) = Initial position

player.moveDown(); // Increase by 1 the value of player.row
player.moveDown(); // Increase by 1 the value of player.row
player.moveRight(); // Increase by 1 the value of player.col

console.log(player.col, player.row);