import { Command } from "./Commands";

export class RemoteControl {
  onCommands: Command[] = [];
  offCommands: Command[] = [];

  lastCommands: Command[] = [];

  setOnCommands(onCommands: Command[]) {
    this.onCommands = onCommands;
  }

  setOffCommands(offCommands: Command[]) {
    this.offCommands = offCommands;
  }

  pressOnButton(slotNumber: number) {
    if (slotNumber >= this.onCommands.length) {
      console.error("Invalid action");
      return;
    }
    const command = this.onCommands[slotNumber];
    command.execute();
    this.lastCommands.push(command);
  }

  pressOffButton(slotNumber: number) {
    if (slotNumber >= this.offCommands.length) {
      console.error("Invalid action");
      return;
    }
    const command = this.offCommands[slotNumber];
    command.execute();
    this.lastCommands.push(command);
  }

  pressUndoButton() {
    if (this.lastCommands.length === 0) {
      console.error("No actions to undo");
      return;
    }
    const command = this.lastCommands.pop();
    command?.undo();
  }

  toString(): string {
    let result = 'Remote Control Slots:\n';
    for (let i = 0; i < this.onCommands.length; i++) {
      const onCommand = this.onCommands[i]?.constructor.name || 'No Command';
      const offCommand = this.offCommands[i]?.constructor.name || 'No Command';
      result += `Slot ${i}: On - ${onCommand}, Off - ${offCommand}\n`;
    }
    const lastCommands = this.lastCommands.map(cmd => cmd.constructor.name).join(', ');
    result += `Last Commands: [${lastCommands}]\n`;
    return result;
  }
}
