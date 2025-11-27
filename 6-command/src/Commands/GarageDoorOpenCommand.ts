import { Command } from ".";
import { GarageDoor } from "../Receivers/GarageDoor";

export class GarageDoorOpenCommand extends Command {
    private garageDoor: GarageDoor;

    constructor(garageDoor: GarageDoor) {
        super();
        this.garageDoor = garageDoor;
    }

    execute(): void {
        this.garageDoor.doorUp();
        this.garageDoor.lightsOn();
    }

    undo(): void {
        this.garageDoor.doorDown();
        this.garageDoor.lightsOff();
    }

}

