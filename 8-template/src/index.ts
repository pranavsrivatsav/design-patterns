// TEMPLATE METHOD PATTERN
//
// Defines the skeleton of an algorithm in a base class, deferring some of
// its steps to subclasses. The template lets subclasses redefine certain
// steps of the algorithm without changing the algorithm's overall structure.
//
// How this example simulates it:
// - interfaces/Beverage.ts  - the abstract "template". Its makeBeverage()
//     method is the template method: a `readonly` (final) function that
//     fixes the sequence of steps. Some steps are implemented once and
//     shared by all subclasses (boilWaterAndMilk, serveBeverage), one step
//     is a "primitive operation" every subclass must implement (prepBeverage),
//     and one step is a "hook" with a default that subclasses may optionally
//     override (isCondimentsAdded) to opt in/out of part of the algorithm.
// - implementations/Coffee.ts    - concrete class filling in prepBeverage
//     for coffee, leaving the condiments hook at its default (off).
// - implementations/GingerTea.ts - concrete class filling in prepBeverage
//     for tea, and overriding the hook to turn the condiments step on.
// - index.ts (this file)   - the client. It only calls the template method
//     (makeBeverage) and never touches the individual steps directly.
import { Coffee } from "./implementations/Coffee";
import { GingerTea } from "./implementations/GingerTea";

const coffee = new Coffee();
const tea = new GingerTea();

//client only ever calls the single template method - it has no knowledge
//of, and cannot change, the individual steps or their order
coffee.makeBeverage();
tea.makeBeverage();
