import { Command } from ".";
import { Light } from "../Receivers/Light";

export class LightOffCommand extends Command {
    private light: Light;

    constructor(light: Light) {
        super();
        this.light = light;
    }

    execute(): void {
        this.light.off();
    }

    undo(): void {
        this.light.on();
    }

}

