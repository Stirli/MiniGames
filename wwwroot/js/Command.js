export class Command {
    #execute;
    #canExecute;

	constructor(execute, canExecute) {
		this.#execute = execute;
		this.#canExecute = canExecute;
	}

    get execute(){
        return this.#execute;
    }
}
