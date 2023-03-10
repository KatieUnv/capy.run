import "./phaser.d";
import {createBackground} from "./background";
import {createSpinny, updateSpinny} from "./spinny";
import {loadAnimations} from "./animations";

export default class Gameplay extends Phaser.Scene {
  cursors: Phaser.Types.Input.Keyboard.CursorKeys;
  capy: Phaser.Physics.Arcade.Sprite;
  spaceBar: Phaser.Input.Keyboard.Key;


  bg1: Phaser.GameObjects.TileSprite;
  bg2: Phaser.GameObjects.TileSprite;
  bg3: Phaser.GameObjects.TileSprite;
  bg4: Phaser.GameObjects.TileSprite;
  ground: Phaser.GameObjects.TileSprite;
  grass: Phaser.GameObjects.TileSprite;

  preload() {
    this.load.image('sky', 'assets/image/bg.png');
    createBackground(this);
    this.load.image('standing1', 'assets/image/standing.png');
    this.load.spritesheet('capy', 'assets/image/capioca2.png', {frameWidth: 64, frameHeight: 64})
  }

  create() {
    this.bg1 = this.add.tileSprite(0, 0, 1600, 370, 'layer1');
    this.bg2 = this.add.tileSprite(0, 0, 1100, 370, 'layer2');
    this.bg3 = this.add.tileSprite(0, 0, 1100, 370, 'layer3');
    createSpinny(this);
    this.bg4 = this.add.tileSprite(0, 0, 1100, 370, 'layer4');

    let platforms = this.physics.add.staticGroup();

    var bglayers = [this.bg1, this.bg2, this.bg3, this.bg4];
    for (var i = 0; i < bglayers.length; i++) {
      bglayers[i].originX = 0;
      bglayers[i].originY = 0;
      bglayers[i].scale = 450 / 370;
      bglayers[i].scale = 450 / 370;
    }

    loadAnimations(this);

    this.capy = this.physics.add.sprite(150, 300, 'capy');
    this.capy.setScale(2);
    this.capy.play('standing');
    
    this.cursors = this.input.keyboard.createCursorKeys();
    this.spaceBar = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);

    this.grass = this.add.tileSprite(0, 400, 1400, 200, 'grass');
    this.grass.originX = 0;
    this.grass.originY = 0;

    this.ground = this.add.tileSprite(0, 450, 1400, 150, 'soil');
    this.ground.originX = 0;
    this.ground.originY = 0;
 
    platforms.add(this.ground);

    this.physics.add.collider(this.capy, platforms);
    
  }

  update() {
    updateSpinny();
    if (Phaser.Input.Keyboard.JustDown(this.cursors.right)) {
      this.capy.play('walk');
    }

    if (this.cursors.right.isDown) {
      this.bg4.tilePositionX += 4;
      this.bg3.tilePositionX += 3;
      this.bg2.tilePositionX += 2;
      this.bg1.tilePositionX += 1;
      this.ground.tilePositionX += 4;
      this.grass.tilePositionX += 4;
    }

    if (Phaser.Input.Keyboard.JustUp(this.cursors.right)) {
      this.capy.play('standing');
    }

    if (Phaser.Input.Keyboard.JustDown(this.spaceBar)){
      this.capy.setVelocityY(-200);
    }
  }
}
