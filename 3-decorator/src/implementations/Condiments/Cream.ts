import { Condiment } from "../../interface/Condiment";

export class Cream extends Condiment {
  cost() {
    return 5 + this.baseBeverage.cost();
  }

  description = this.cleanDescription(
    this.baseBeverage.description + ", Cream",
    "Cream"
  );
}
