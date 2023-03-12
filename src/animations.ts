import "./phaser.d";

export function loadAnimations(game: Phaser.Game) {
  game.anims.create({
    key: 'walk',
    frames: this.anims.generateFrameNumbers('capy', { frames: [72, 73, 74, 75, 76, 77, 78, 79] }),
    frameRate: 8,
    repeat: -1
  });

  game.anims.create({
    key: "standing",
    frames: this.anims.generateFrameNumbers('capy', { frames: [9, 10, 11, 12, 13, 14, 15, 16] }),
    frameRate: 8,
    repeat: -1
  });

  game.anims.create({
    key: "sitting",
    frames: this.anims.generateFrameNumbers('capy', { frames: [27, 28, 29, 30, 31, 32, 33, 34] }),
    frameRate: 8,
    repeat: -1
  });
}
