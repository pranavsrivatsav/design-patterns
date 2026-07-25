import { PopcornMaker } from "../interfaces/PopcornMaker";

export class AcmePopcornMaker implements PopcornMaker {
  on(): void {
    console.log("Popcorn maker on");
  }

  off(): void {
    console.log("Popcorn maker off");
  }

  pop(): void {
    console.log("Popcorn maker popping");
  }
}
