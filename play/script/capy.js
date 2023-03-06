var config = {
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

var game = new Phaser.Game(config);
var capy;
var speed = 5;

function preload () {
  this.load.image('sky', 'assets/image/bg.png');
  this.load.image('red', 'assets/image/particle.png');
  this.load.image('standing1', 'assets/image/standing.png');
  this.load.spritesheet('capy', 'assets/image/capioca.png', { frameWidth: 64, frameHeight: 64})
}

function create () {
  this.add.image(400, 300, 'sky');

  var particles = this.add.particles('red');

  var emitter = particles.createEmitter({
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
  const sprite = this.add.sprite(600, 370);
        sprite.setScale(4);
        sprite.play('walk');
  
}

function update() {
  capy.angle += speed;
}
