class Scene1 extends Phaser.Scene {
  constructor() {
    super("bootGame");
  }

  init() {
    var me = this;

    var style = {
      font: "32px Arial",
      fill: "#f4f4f4",
      align: "center"
    };

    this.text = this.add.text(100, 300, "Loading: 0%", style);
  }

  preload() {
    this.load.image("background", "assets/images/main-background.png");
    this.load.text('dictionary', 'assets/words.txt');
    this.load.image("square", "assets/images/letter-square.png");
  }

  fileLoaded(progress) {
    this.text.text = "Loading:" + progress + "%";
  }


  create(){
    this.scene.start("playGame");
  }

}
