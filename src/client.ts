import { createBackground } from "./background";
import "./client.css";
import "./phaser.d";
import { createSpinny, updateSpinny } from "./spinny";

const config: Phaser.Types.Core.GameConfig = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  parent: "game",
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 100 }
    }
  },
  scene: {
    preload: preload,
    create: create,
    update: update
  }
};

let cursors;
var capy;

function preload() {
  this.load.image('sky', 'assets/image/bg.png');
  createBackground(this);
  this.load.image('standing1', 'assets/image/standing.png');
  this.load.spritesheet('capy', 'assets/image/capioca.png', { frameWidth: 64, frameHeight: 64 })
}

var bg1;
var bg2; 
var bg3;
var bg4;

function create() {
  bg1 = this.add.tileSprite(400, 170, 800, 370, 'layer1');
  bg2 = this.add.tileSprite(400, 200, 800, 370, 'layer2');
  bg3 = this.add.tileSprite(400, 200, 800, 370, 'layer3');
  bg4 = this.add.tileSprite(400, 200, 800, 370, 'layer4');
  createSpinny(this);
  this.anims.create({
    key: 'walk',
    frames: this.anims.generateFrameNumbers('capy', { frames: [72, 73, 74, 75, 76, 77, 78, 79] }),
    frameRate: 8,
    repeat: -1
  });

  this.anims.create({
    key: "standing",
    frames: this.anims.generateFrameNumbers('capy', { frames: [9, 10, 11, 12, 13, 14, 15, 16] }),
    frameRate: 8,
    repeat: -1
  });

  this.anims.create({
    key: "sitting",
    frames: this.anims.generateFrameNumbers('capy', { frames: [27, 28, 29, 30, 31, 32, 33, 34] }),
    frameRate: 8,
    repeat: -1
  });

  capy = this.add.sprite(150, 338);
  capy.setScale(2);
  capy.play('standing');


  cursors = this.input.keyboard.createCursorKeys();

}

function update() {
  updateSpinny();
  if (Phaser.Input.Keyboard.JustDown(cursors.right)) {
    capy.play('walk');
  }

  if (cursors.right.isDown) {
        bg4.tilePositionX += 4;
        bg3.tilePositionX += 3;
        bg2.tilePositionX += 2;
        bg1.tilePositionX += 1;
    }
  if (Phaser.Input.Keyboard.JustUp(cursors.right)) {
        capy.play('standing');
    }

}

export function init(): void {
  new Phaser.Game(config);
}

document.addEventListener("DOMContentLoaded", init);
