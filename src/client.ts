import "./client.css";
import "./phaser.d";
import {createBackground} from "./background";
import {createSpinny, updateSpinny} from "./spinny";
import {loadAnimations} from "./animations";
import Gameplay from "./gameplay";

const config: Phaser.Types.Core.GameConfig = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  parent: "game",
  physics: {
    default: 'arcade',
    arcade: {
      gravity: {y: 100}
    }
  },
  scene: new Gameplay("")
};


export function init(): void {
  new Phaser.Game(config);
}

document.addEventListener("DOMContentLoaded", init);
