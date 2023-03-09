import "./client.css";
import "./phaser.d";

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

let capy;
let speed = 5;
let cursors;
var bigCap;
var rightKey;
var leftKey;

function preload () {
  this.load.image('sky', 'assets/image/bg.png');
  
  this.load.image('standing1', 'assets/image/standing.png');
  this.load.spritesheet('capy', 'assets/image/capioca.png', { frameWidth: 64, frameHeight: 64})
}

function create () {
  this.add.image(400, 300, 'sky');

  capy = this.physics.add.image(400, 100, 'standing1');

  capy.setVelocity(100, 200);
  capy.setBounce(1, 1);
  capy.setCollideWorldBounds(true);


  this.anims.create({
    key: 'walk',
    frames: this.anims.generateFrameNumbers('capy', { frames: [72, 73, 74, 75, 76, 77, 78, 79] }),
    frameRate: 8,
    repeat: -1
  });

  this.anims.create({
    key: "standing",
    frames: this.anims.generateFrameNumbers('capy', { frames: [9, 10, 11, 12, 13, 14, 15, 16]}),
    frameRate: 8,
    repeat: -1
  });

  this.anims.create({
    key: "sitting",
    frames: this.anims.generateFrameNumbers('capy', {frames: [27, 28, 29, 30, 31, 32, 33, 34]}),
    frameRate: 8,
    repeat: -1
  });

  bigCap = this.add.sprite(150, 450);
  bigCap.setScale(2);
  bigCap.play('standing');


  cursors = this.input.keyboard.createCursorKeys();

  rightKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
  leftKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
}

function update() {
  capy.angle += speed;


  if(Phaser.Input.Keyboard.JustDown(rightKey)){
    bigCap.flipX = false;
    bigCap.play("walk");
  }

  else if(Phaser.Input.Keyboard.JustDown(leftKey)){
    bigCap.flipX = true;
    bigCap.play("walk");
  }

  else if (cursors.right.isDown){
    bigCap.x += 4;
  }

  else if (cursors.left.isDown){
    bigCap.x -= 4;
  }

  else if (Phaser.Input.Keyboard.JustUp(rightKey)){
    bigCap.play('standing');
  }

  else if (Phaser.Input.Keyboard.JustUp(leftKey)){
    bigCap.play('standing');
  }


}

export function init(): void {
  console.log("capy.run!");
  new Phaser.Game(config);
}

document.addEventListener("DOMContentLoaded", init);
