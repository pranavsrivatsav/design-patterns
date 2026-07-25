// Template Method pattern: this abstract class is the "template". It defines
// the fixed skeleton of the beverage-making algorithm in makeBeverage(), while
// letting subclasses (Coffee, GingerTea) fill in or tweak individual steps
// without changing the overall structure/order of the algorithm.
abstract class Beverage {
  // Abstract fields act like abstract "getter" steps - each subclass must
  // supply its own data, but the template doesn't care how it's produced.
  abstract displayName: string;
  abstract condiments: string[];

  //readonly is the equivalent of final in typescript
  //this is the template method itself: it is NOT overridable, so every
  //subclass is forced to go through these exact steps, in this exact order
  readonly makeBeverage = () => {
    //invariant step - identical for every beverage, implemented once here
    Beverage.boilWaterAndMilk();

    //primitive operation - each subclass MUST implement this differently
    //(use coffee beans or boil tea leaves)
    this.prepBeverage();

    //hook check - the base class provides a default, but subclasses can
    //override the hook (isCondimentsAdded) to opt in/out of this step
    if (this.isCondimentsAdded) Beverage.addCondiments(this.condiments);

    //invariant step - identical for every beverage, implemented once here
    Beverage.serveBeverage(this.displayName);
  };

  static readonly boilWaterAndMilk = () => {
    console.log("Boil water and milk to boiling point");
  };

  static readonly serveBeverage = (name: string) => {
    console.log(`Serve ${name}`);
  };

  //primitive operation - no default implementation, so every subclass is
  //forced to define its own version of this step
  abstract prepBeverage: () => void;

  static readonly addCondiments = (condiments: string[]) => {
    console.log(`Add condiments: ${condiments.join(",")}`);
  };

  //hook - has a default implementation (do nothing/false) but subclasses
  //are free to override it to influence the algorithm's behavior without
  //having to override the whole template method
  isCondimentsAdded: boolean = false;
}

export { Beverage };
