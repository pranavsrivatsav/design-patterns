import { Command } from ".";

export class NoCommand extends Command {
    execute(): void {
        // Empty - no operation
    }

    undo(): void {
        // Empty - no operation
    }
}

