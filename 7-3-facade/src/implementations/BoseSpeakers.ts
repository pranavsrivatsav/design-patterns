import { Speakers } from "../interfaces/Speakers";

export class BoseSpeakers implements Speakers {
  powerOn(): void {
    console.log("Bose speakers on");
  }

  powerOff(): void {
    console.log("Bose speakers off");
  }

  setVolume(level: number): void {
    console.log(`Bose speakers volume set to ${level}`);
  }

  mute(): void {
    console.log("Bose speakers muted");
  }
}
