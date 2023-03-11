import "./phaser.d";

export function createBackground(game: Phaser.Game){
    game.load.image('layer1', 'assets/image/background1.png');
    game.load.image('layer2', 'assets/image/background2.png');
    game.load.image('layer3', 'assets/image/background3.png');
    game.load.image('layer4', 'assets/image/background4.png');
}

