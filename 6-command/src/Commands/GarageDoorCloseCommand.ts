import { Command } from ".";
import { GarageDoor } from "../Receivers/GarageDoor";

export class GarageDoorCloseCommand extends Command {
    private garageDoor: GarageDoor;

    constructor(garageDoor: GarageDoor) {
        super();
        this.garageDoor = garageDoor;
    }

    execute(): void {
        this.garageDoor.doorDown();
        this.garageDoor.lightsOff();
    }

    undo(): void {
        this.garageDoor.doorUp();
        this.garageDoor.lightsOn();
    }

}

