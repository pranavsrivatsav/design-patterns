import { Beverage } from "../interfaces/Beverage";

// Concrete class in the Template Method pattern: only supplies the
// beverage-specific pieces (displayName, prepBeverage). It never touches
// makeBeverage() and doesn't need to know about the algorithm's overall order.
class Coffee extends Beverage {
  displayName: string = "Coffee";
  condiments: string[] = [];

  //fills in the required primitive operation with coffee-specific behavior
  prepBeverage: () => void = () => {
    console.log("Grind Coffee beans and percolate them");
  };

  //isCondimentsAdded hook is left at its default (false), so Coffee skips
  //the "add condiments" step entirely
}

export { Coffee };
