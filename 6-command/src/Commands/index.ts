// Command interface - A simple interface with just the execute and undo function
// here in ts represented as an abstract class
export abstract class Command {
  abstract execute(): void;
  abstract undo(): void;
}
