import { Beverage } from "../../interface/Beverage";

export class Coffee implements Beverage {
  description = "Coffee";
  cost() {
    return 10;
  }
}
