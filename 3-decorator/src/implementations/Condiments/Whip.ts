import { Condiment } from "../../interface/Condiment";

export class Whip extends Condiment {
  cost() {
    return 10 + this.baseBeverage.cost();
  }

  description = this.cleanDescription(
    this.baseBeverage.description + ", Whip",
    "Whip"
  );
}
