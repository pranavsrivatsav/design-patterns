import { Beverage } from "../../interface/Beverage";

export class Horlicks implements Beverage {
  description = "Horlicks";
  cost() {
    return 15;
  }
}
