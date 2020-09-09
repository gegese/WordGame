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
    this.letter3 = this.add.image(config.width/2, config.height/2 - 145, "square");
    // ama
    this.letter2 = this.add.image(config.width/2 - 55, config.height/2 - 35, "square");
    this.letter2 = this.add.image(config.width/2 - 55, config.height/2 + 20 , "square");
    // ada
    this.letter2 = this.add.image(config.width/2 + 55, config.height/2 - 35, "square");
    this.letter2 = this.add.image(config.width/2 + 55, config.height/2 + 20 , "square");

    this.dict = this.add.text("dictionary");

    var text = "adam";

    if(this.cache.text.get('dictionary').indexOf(text) > -1){
      this.add.text(10, 10, "exist :" + " " + text, {font: "25px Arial", fill: "#ffffff ", align: "center", backgroundColor: "#000000"});
    }else {
      // alert("does not exist");
      this.add.text(20, 20, "does not exist", {font: "25px Arial", fill: "yellow"});
    }

  }


}
