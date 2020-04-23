class Treasure {
    constructor(row, col) {
        const randomRow = Math.floor(Math.random() * row);
        const randomCol = Math.floor(Math.random() * col);
        this.row = randomRow;
        this.col = randomCol;
    }

    drawTreasure (row, col) {
        const treasureImageURL = '/images/treasure.png';
        const treasureImage = new Image();
        treasureImage.src = treasureImageURL;
        row = this.row * 50;
        col = this.col * 50;
        //context.drawImage(treasureImage, row, col);
        window.addEventListener('load', () => {
          //const widthOfImage = characterImage.width;
          //const heightOfImage = characterImage.height;
          context.drawImage(treasureImage, col, row, 50, 50);
        }); 
    }


}