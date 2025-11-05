import { NoFly } from "./behaviors/flying/implementations/NoFlyImpl";
import { Duck } from "./Duck";
import { FlyingDuck } from "./ducks/FlyingDuck"

// Our declaration type will be of the superclass Duck
// This is aligning with the principle - Program to an interface (aka supertype) rather than to an implementation (aka subtype)
// In this case Duck is the supertype
let d1: Duck = new FlyingDuck();

d1.fly();
d1.squawk();

console.log("it has injured its wings, so lets try flying again");
d1.setFlyingBehavior(new NoFly());
d1.fly();
