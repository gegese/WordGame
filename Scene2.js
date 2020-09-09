class Scene2 extends Phaser.Scene {
  constructor() {
    super("playGame");
  }

  create() {
    this.background = this.add.image(0,0,"background");
    this.background.setOrigin(0,0);
  }

}
