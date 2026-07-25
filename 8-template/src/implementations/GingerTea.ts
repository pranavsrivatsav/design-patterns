import { Beverage } from "../interfaces/Beverage";

// Another concrete class - implements the same template method (inherited,
// unchanged) but plugs in different values, showing how the same skeleton
// produces a different end-to-end result.
class GingerTea extends Beverage {
  displayName = "Ginger Tea";
  condiments: string[] = ["Ginger"];

  //fills in the required primitive operation with tea-specific behavior
  prepBeverage: () => void = () => {
    console.log("Boil tea leaves in water");
  };

  //overrides the hook to opt into the "add condiments" step, unlike Coffee
  isCondimentsAdded: boolean = true;
}

export { GingerTea };
