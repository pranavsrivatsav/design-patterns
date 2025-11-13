import { Beverage } from "./Beverage";

export abstract class Condiment implements Beverage {
  protected baseBeverage: Beverage;
  protected cleanDescription(desc: string, str: string) {
    const count = desc.split(str).length - 1;

    if (count <= 1) return desc;

    const updatedDesc = desc.replaceAll(`, ${str}`, "");
    return updatedDesc + `, ${count} ${str}`;
  }

  constructor(baseBeverage: Beverage) {
    this.baseBeverage = baseBeverage;
  }

  // Making the properties to be implented as a Beverage abstract
  // So that the properties will be defined by classes
  // extending from compliment
  abstract description: string;
  abstract cost(): number;
}
