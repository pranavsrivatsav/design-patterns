import { Lights } from "../interfaces/Lights";

export class LivingRoomLights implements Lights {
  turnOn(): void {
    console.log("Living room lights on");
  }

  turnOff(): void {
    console.log("Living room lights off");
  }

  dim(level: number): void {
    console.log(`Living room lights dimmed to ${level}%`);
  }
}
