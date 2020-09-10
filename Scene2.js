class Scene2 extends Phaser.Scene {
  constructor() {
    super("playGame");
  }

  create() {
    this.background = this.add.image(0,0,"background");
    this.background.setOrigin(0,0);

    // dama
    this.letter1 = this.add.image(config.width/2 - 110, config.height/2 - 90, "square");
    this.letter2 = this.add.image(config.width/2 - 55, config.height/2 - 90, "square");
    this.letter3 = this.add.image(config.width/2, config.height/2 - 90, "square");
    this.letter4 = this.add.image(config.width/2 + 55, config.height/2 - 90, "square");
    // adam
    this.letter1 = this.add.image(config.width/2 - 55, config.height/2 - 200, "square");
    this.letter2 = this.add.image(config.width/2, config.height/2 - 200, "square");
    this.letter3 = this.add.image(config.width/2 + 55, config.height/2 - 200, "square");
    this.letter4 = this.add.image(config.width/2 + 110, config.height/2 - 200, "square");
    // dam
    this.letter4 = this.add.image(config.width/2, config.height/2 - 145, "square");
    // ama
    this.letter3 = this.add.image(config.width/2 - 55, config.height/2 - 35, "square");
    this.letter4 = this.add.image(config.width/2 - 55, config.height/2 + 20 , "square");
    // ada
    this.letter5 = this.add.image(config.width/2 + 55, config.height/2 - 35, "square");
    this.letter6 = this.add.image(config.width/2 + 55, config.height/2 + 20 , "square");

    //letters area start
    var cd1 = this.add.circle(config.width/2, config.height/2 + 160, 30, 0xffffff);
    cd1.setStrokeStyle(4, 0x3600AA);
    this.add.text(config.width/2-10, config.height/2 + 142  , "D",{font: "30px Arial", fill: "#000000 "});

    var ca1 = this.add.circle(config.width/2 - 80, config.height/2 + 220, 30, 0xffffff);
    ca1.setStrokeStyle(4, 0x3600AA);
    this.add.text(config.width/2 - 90, config.height/2 + 200, "A",{font: "30px Arial", fill: "#000000 "});

    var ca2 = this.add.circle(config.width/2 + 80, config.height/2 + 220, 30, 0xffffff);
    ca2.setStrokeStyle(4, 0x3600AA);
    this.add.text(config.width/2 + 70, config.height/2 + 200, "A",{font: "30px Arial", fill: "#000000 "});

    var cm1 = this.add.circle(config.width/2, config.height/2 + 280, 30, 0xffffff).setInteractive();
    cm1.setStrokeStyle(4, 0x3600AA);
    this.add.text(config.width/2-12, config.height/2 + 265  , "M",{font: "30px Arial", fill: "#000000 "});
    cm1.on('pointerdown', function (pointer) {
          this.add.text(10, 30, "click : m", {font: "25px Arial", fill: "#ffffff ", align: "center", backgroundColor: "#000000"});
    });
    // letters area end


    //Declare assets will be used as selectable letter
    // this.tileLetters = ['a', 'a', 'd', 'm'];
    // this.tileColors = ['#ffffff'];
    // this.tileWidth = 70;
    // this.tileHeight = 70;

    //This will hold all of the tile sprites
    // this.tiles = this.add.group();
    //
    // this.tileGrid = [
    //   [null, null],
    //   [null, null]
    // ];

    // this.boardWidth = this.tileGrid[0].length * this.tileWidth;
    // this.boardHeight = this.tileGrid.length  * this.tileHeight;

    //We want to keep a buffer on the left and top so that the grid
        //can be centered
    // this.leftBuffer = (this.width - this.boardWidth) / 2;
    // this.topBuffer = (this.height - this.boardHeight) / 2;
    //TODO: Have to look this part again
    //Create a random data generator to use later
    // var seed = Date.now();
    // this.random = Phaser.Math.RND;

        //Set up some initial tiles and the score label
    // this.initTiles();

    // check word from the dictionary start
    this.dict = this.add.text("dictionary");
    var text = "adam";
    if(this.cache.text.get('dictionary').indexOf(text) > -1){
      this.add.text(10, 10, "exist :" + " " + text, {font: "25px Arial", fill: "#ffffff ", align: "center", backgroundColor: "#000000"});
    }else {
      this.add.text(20, 20, "does not exist", {font: "25px Arial", fill: "yellow"});
    }
    //check word from the dictionary end

  }

  // initTiles() {
  //   for(var i = 0; i<this.tileGrid.length; i++) {
  //     for(var j = 0; j<this.tileGrid.length; i++){
  //       var tile = this.addTile(i, j);
  //       this.tileGrid[i][j] = tile;
  //     }
  //   }
  // }
  //
  // addTile(x, y) {
  //   //Choose a random tile to add
  //   var tileLetter = this.tileLetters[this.random.integerInRange(0, this.tileLetters.length - 1)];
  //   var tileColor = this.tileColors[this.random.integerInRange(0, this.tileColors.length - 1)];
  //   var tileToAdd = this.createTile(tileLetter, tileColor);
  //
  //   //Add the tile at the correct x position, but add it to the top of the game (so we can slide it in)
  //   var tile = this.tiles.create(this.leftBuffer + (x * this.tileWidth) + this.tileWidth / 2, 0, tileToAdd);
  //
  //   // //Animate the tile into the correct vertical position
  //   // this.add.tween(tile).to({y:this.topBuffer + (y * this.tileHeight + (this.tileHeight/2))}, 500, Phaser.Easing.Linear.In, true);
  //
  //   //Set the tiles anchor point to the center
  //   // tile.anchor.setTo(0.5, 0.5);
  //
  //   //Keep track of the type of tile that was added
  //   tile.tileLetter = tileLetter;
  //
  //   return tile;
  // }
  //
  // createTile(letter, color){
  //   var tile = this.textures.createCanvas('tile',this.tileWidth, this.tileHeight);
  //
  //   tile.context.rect(5, 5, this.tileWidth - 5, this.tileHeight - 5);
  //   tile.context.fillStyle = color;
  //   tile.context.fill();
  //
  //   tile.context.font = '30px Arial';
  //   tile.context.textAlign = 'center';
  //   tile.context.textBaseline = 'middle';
  //   tile.context.fillStyle = '#fff';
  //   if(color == '#ffffff'){
  //       tile.context.fillStyle = '#000000';
  //   }
  //   tile.context.fillText(letter, this.tileWidth / 2, this.tileHeight / 2);
  //
  //   return tile;
  // }


}
