import { Beverage } from "./Beverage";

export abstract class Condiment implements Beverage {
  protected baseBeverage: Beverage;

  //helper function to clean the description of the condiment
  // it will remove the duplicate occurrences of the string in the description
  // and return the updated description replacing it with the count of the string
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
