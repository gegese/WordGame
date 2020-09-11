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

    //letters area
    var cd1 = this.add.circle(config.width/2, config.height/2 + 160, 30, 0xffffff);
    cd1.setStrokeStyle(4, 0x3600AA);
    this.add.text(config.width/2-10, config.height/2 + 142  , "D",{font: "30px Arial", fill: "#000000 "});
    cd1.setInteractive();
    cd1.on('pointerover', () => { console.log('D'); });

    var ca1 = this.add.circle(config.width/2 - 80, config.height/2 + 220, 30, 0xffffff);
    ca1.setStrokeStyle(4, 0x3600AA);
    this.add.text(config.width/2 - 90, config.height/2 + 200, "A",{font: "30px Arial", fill: "#000000 "});
    ca1.setInteractive();
    ca1.on('pointerover', () => { console.log('A'); });

    var ca2 = this.add.circle(config.width/2 + 80, config.height/2 + 220, 30, 0xffffff);
    ca2.setStrokeStyle(4, 0x3600AA);
    this.add.text(config.width/2 + 70, config.height/2 + 200, "A",{font: "30px Arial", fill: "#000000 "});
    ca2.setInteractive();
    ca2.on('pointerover', () => { console.log('A'); });

    var cm1 = this.add.circle(config.width/2, config.height/2 + 280, 30, 0xffffff).setInteractive();
    cm1.setStrokeStyle(4, 0x3600AA);
    this.add.text(config.width/2-12, config.height/2 + 265  , "M",{font: "30px Arial", fill: "#000000 "});
    console.log(this.cache.text.get('dictionary'));
    cm1.setInteractive();
    cm1.on('pointerover', () => { console.log('M'); });

    // check word from the dictionary
    this.dict = this.add.text("dictionary");
    var text = "adam";
    if(this.cache.text.get('dictionary').indexOf(text) > -1){
      this.add.text(10, 10, "exist :" + " " + text, {font: "25px Arial", fill: "#ffffff ", align: "center", backgroundColor: "#000000"});
    }else {
      this.add.text(20, 20, "does not exist", {font: "25px Arial", fill: "yellow"});
    }
  }

}
