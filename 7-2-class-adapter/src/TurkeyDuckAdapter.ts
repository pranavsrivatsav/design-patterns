import { Duck } from "./interfaces/Duck";
import { Turkey } from "./interfaces/Turkey";

export class TurkeyDuckAdapter implements Duck, Turkey {
  fly() {
    console.log("Turkey adapted as duck is flying");
  }

  squawk() {
    this.gobble();
  }

  // we make gobble private - because our target interface is duck,
  // and a duck does not have gobble method
  gobble() {
    console.log("Turkey adapted as duckis gobbling");
  }
}
