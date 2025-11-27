import { Command } from ".";
import { Stereo } from "../Receivers/Stereo";

export class StereoOffCommand extends Command {
    private stereo: Stereo;

    constructor(stereo: Stereo) {
        super();
        this.stereo = stereo;
    }

    execute(): void {
        this.stereo.off();
    }

    undo(): void {
        this.stereo.on();
    }

}

