import { Duck } from "./interfaces/Duck";
import { Turkey } from "./interfaces/Turkey";

export class TurkeyDuckAdapter implements Duck {
  private turkey: Turkey;

  constructor(turkey: Turkey) {
    this.turkey = turkey;
  }

  fly() {
    // can have more complex operations to adapt
    this.turkey.fly();
  }

  squawk() {
    // can have more complex operations to adapt
    this.turkey.gobble();
  }
}
