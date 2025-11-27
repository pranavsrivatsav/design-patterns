import { Command } from ".";
import { Stereo } from "../Receivers/Stereo";

export class StereoOnCommand extends Command {
    private stereo: Stereo;

    constructor(stereo: Stereo) {
        super();
        this.stereo = stereo;
    }

    execute(): void {
        this.stereo.on();
        this.stereo.loadCD();
        this.stereo.setVolume(10);
    }

    undo(): void {
        this.stereo.off();
        this.stereo.unloadCD();
        this.stereo.setVolume(0);
    }

}

