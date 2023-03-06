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

function preload () {
  this.load.image('sky', 'assets/image/bg.png');
  this.load.image('red', 'assets/image/particle.png');
  this.load.image('standing1', 'assets/image/standing.png');
  this.load.spritesheet('capy', 'assets/image/capioca.png', { frameWidth: 64, frameHeight: 64})
}

function create () {
  this.add.image(400, 300, 'sky');

  const particles = this.add.particles('red');

  const emitter = particles.createEmitter({
    speed: 100,
    scale: { start: 1, end: 0 },
    blendMode: 'ADD'
  });

  capy = this.physics.add.image(400, 100, 'standing1');

  capy.setVelocity(100, 200);
  capy.setBounce(1, 1);
  capy.setCollideWorldBounds(true);

  emitter.startFollow(capy);

  document.getElementById("fast").onclick = function () {
    speed += 1
  }
  document.getElementById("slow").onclick = function () {
    speed -= 1
  }

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
    frames: this.anims.generateFrameNumbers('capy', {frames: [36, 37, 38, 39, 40, 41, 42, 43]}),
    frameRate: 8,
    repeat: -1
  })

  this.anims.create({
    key: "sitDown",
    frames: this.anims.generateFrameNumbers('capy', {frames: [18, 19, 20]}),
    frameRate: 8
  })

  this.anims.create({
    key: "standUp",
    frames: this.anims.generateFrameNumbers('capy', {frames: [45, 46, 47]}),
    frameRate: 8
  })

  const sprite = this.add.sprite(600, 370);
  sprite.setScale(4);
  sprite.play('sitting');
}

function update() {
  capy.angle += speed;
}

export function init(): void {
  console.log("capy.run!");
  new Phaser.Game(config);
}

document.addEventListener("DOMContentLoaded", init);
