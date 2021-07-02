import { Game } from "./Game.js";
import { Input } from "./Input.js";

let game = new Game({next:new Input()}, document);

game.start();
