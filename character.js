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
                this.row--;
            } 
        });*/
    }
    
    moveRight() {
        this.col++;
        
        //window.addEventListener('keydown', (event) => {
            //  if (event.keyCode === 39) {
                //    this.col++;
                //}
                //})
    }
            
    moveDown() {
        this.row++;
        /*window.addEventListener('keydown', (event) => {
            if (event.keyCode === 40) {
                this.row++;
            }
        });*/
    }
    
    moveLeft() {
        this.col--;
        /*window.addEventListener('keydown', (event) => {
            if (event.keyCode === 37) {
                this.col--;
            }
        })*/
    }
    
    /**window.addEventListener('keydown', (event) => {
     // Stop the default behavior (moving the screen to the left/up/right/down)
     event.preventDefault();
     
     // React based on the key pressed
     switch (event.keyCode) {
         case 37:
             moveLeft();
             break;
             case 38:
                 moveUp();
                 break;
                 case 39:
                     moveRight();
                     break;
                     case 40:
                         moveDown();
                         break;
                        }
                    }*/
                    
    
                
    drawPlayer(row, col) {
        const characterImageURL = '/images/character-down.png';
        const characterImage = new Image();
        characterImage.src = characterImageURL;
        
        
        row = this.row * 50;
        col = this.col * 50;
        //context.drawImage(characterImage, row, col)
        window.addEventListener('load', () => {
            //const widthOfImage = characterImage.width;
            //const heightOfImage = characterImage.height;
            context.drawImage(characterImage, col, row);
        });    
        
        
        window.addEventListener('keydown', (event) => {
            // Stop the default behavior (moving the screen to the left/up/right/down)
            //event.preventDefault();
            
            // React based on the key pressed
            switch (event.keyCode) {
                case 37:
                    context.drawImage(characterImage, col-50, row);
                    //moveLeft();
                    break;
                case 38:
                    //moveUp();
                    context.drawImage(characterImage, col, row - 50);
                    break;
                case 39:
                    context.drawImage(characterImage, col+50, row);
                    //moveRight();
                    break;
                case 40:
                    context.drawImage(characterImage, col, row+50);
                    //moveDown();
                    break;
            }
        });
        
    }    
    
}
                