import { Command } from ".";
import { CeilingFan } from "../Receivers/CeilingFan";

export class CeilingFanOffCommand extends Command {
    private ceilingFan: CeilingFan;

    constructor(ceilingFan: CeilingFan) {
        super();
        this.ceilingFan = ceilingFan;
    }

    execute(): void {
        this.ceilingFan.off();
        this.ceilingFan.setSpeed(0);
    }

    undo(): void {
        this.ceilingFan.on();
        this.ceilingFan.setSpeed(11);
    }

}

