import { Turkey } from "../interfaces/Turkey";

export class CountryTurkey implements Turkey {
  fly() {
    console.log("Turkey is flying");
  }

  gobble() {
    console.log("Turkey is gobbling");
  }
}
