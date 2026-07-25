import { Duck } from "./interfaces/Duck";
import { Turkey } from "./interfaces/Turkey";

export class TurkeyDuckAdapter implements Duck, Turkey {
  fly() {
    console.log("Turkey adapted as duck is flying");
  }

  squawk() {
    this.gobble();
  }

  gobble() {
    console.log("Turkey adapted as duckis gobbling");
  }
}
