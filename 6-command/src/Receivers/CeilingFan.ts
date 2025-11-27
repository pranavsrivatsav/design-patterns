export class CeilingFan {
  static readonly LOW = 1;
  static readonly MED = 2;
  static readonly HIGH = 3;

  private speed: number = 0;

  on(): void {
    console.log("Ceiling fan is on");
  }

  off(): void {
    console.log("Ceiling fan is off");
  }

  setSpeed(speed: number): void {
    console.log(`Setting ceiling fan speed to ${speed}`);
    this.speed = speed;
  }

  getSpeed(): number {
    console.log(`Current ceiling fan speed is ${this.speed}`);
    return this.speed;
  }
}

