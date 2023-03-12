import "./phaser.d";

export function createBackground(scene: Phaser.Scene){
    scene.load.image('layer1', 'assets/image/background1.png');
    scene.load.image('layer2', 'assets/image/background2.png');
    scene.load.image('layer3', 'assets/image/background3.png');
    scene.load.image('layer4', 'assets/image/background4.png');
    scene.load.image('soil', 'assets/image/ground.png');
}

