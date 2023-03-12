import "./phaser.d";

export function loadAnimations(scene: Phaser.Scene) {
  scene.anims.create({
    key: 'walk',
    frames: scene.anims.generateFrameNumbers('capy', { frames: [72, 73, 74, 75, 76, 77, 78, 79] }),
    frameRate: 8,
    repeat: -1
  });

  scene.anims.create({
    key: "standing",
    frames: scene.anims.generateFrameNumbers('capy', { frames: [9, 10, 11, 12, 13, 14, 15, 16] }),
    frameRate: 8,
    repeat: -1
  });

  scene.anims.create({
    key: "sitting",
    frames: scene.anims.generateFrameNumbers('capy', { frames: [27, 28, 29, 30, 31, 32, 33, 34] }),
    frameRate: 8,
    repeat: -1
  });
}
