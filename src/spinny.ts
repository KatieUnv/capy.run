import "./phaser.d";

let smallCapy;
let speed = 5;

export function createSpinny(game: Phaser.Game) {
    smallCapy = game.physics.add.image(400, 100, 'standing1');

    smallCapy.setVelocity(100, 200);
    smallCapy.setBounce(1, 1);
    smallCapy.setCollideWorldBounds(true);
}

export function updateSpinny() {
    smallCapy.angle += speed;
}