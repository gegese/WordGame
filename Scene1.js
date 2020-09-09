class Scene1 extends Phaser.Scene {
  constructor() {
    super("bootGame");
  }

  preload() {
    this.load.image("background", "assets/images/main-background.png");
  }

  create(){
    this.scene.start("playGame");
  }

}
