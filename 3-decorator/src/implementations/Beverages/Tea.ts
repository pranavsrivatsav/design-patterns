import { Beverage } from "../../interface/Beverage";

export class Tea implements Beverage {
  description = "Tea";
  cost() {
    return 12;
  }
}
