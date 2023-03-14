import "./client.css";
import "./phaser.d";
import Gameplay from "./gameplay";

const ratio = Math.max(window.innerWidth / window.innerHeight, window.innerHeight / window.innerWidth)
const defaultHeight = 600;
const defaultWidth = ratio * defaultHeight;


const config: Phaser.Types.Core.GameConfig = {
  type: Phaser.AUTO,
  width: defaultWidth,
  height: defaultHeight,
  parent: "game",
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
    width: defaultWidth,
    height: defaultHeight
  },
  physics: {
    default: 'arcade',
    arcade: {
      gravity: {y: 200}
    }
  },
  scene: new Gameplay("")
};


export function init(): void {
  new Phaser.Game(config);
}

document.addEventListener("DOMContentLoaded", init);
