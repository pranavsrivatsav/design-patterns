import { Projector } from "../interfaces/Projector";

export class SonyProjector implements Projector {
  on(): void {
    console.log("Sony projector on");
  }

  off(): void {
    console.log("Sony projector off");
  }

  setInput(source: string): void {
    console.log(`Sony projector input set to ${source}`);
  }

  setVolume(level: number): void {
    console.log(`Sony projector volume set to ${level}`);
  }
}
