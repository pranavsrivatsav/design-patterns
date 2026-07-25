import { Screen } from "../interfaces/Screen";

export class ElectricScreen implements Screen {
  private lowered = false;

  raise(): void {
    this.lowered = false;
    console.log("Screen raised");
  }

  lower(): void {
    this.lowered = true;
    console.log("Screen lowered");
  }

  isLowered(): boolean {
    return this.lowered;
  }
}
