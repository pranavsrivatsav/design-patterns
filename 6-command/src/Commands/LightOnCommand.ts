import { Command } from ".";
import { Light } from "../Receivers/Light";

export class LightOnCommand extends Command {
    private light: Light;

    constructor(light: Light) {
        super();
        this.light = light;
    }

    execute(): void {
        this.light.on();
    }

    undo(): void {
        this.light.off();
    }

}

