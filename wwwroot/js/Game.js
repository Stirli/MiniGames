import { Command } from "./Command.js";
import { Input } from "./Input.js";


export class Game {
	#isNextPageAvailable;

	constructor(inputs) {
		this._inputs = inputs;
		const context = this;
		inputs.next.subscribe(
			() => {
				console.log("next!");
			},
			() => {
				console.log(
					(context.#isNextPageAvailable =
						!context.#isNextPageAvailable)
				);
				return context.#isNextPageAvailable;
			}
		);
	}

	start() {
	}
}
