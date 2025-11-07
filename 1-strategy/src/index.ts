import { NoFly } from "./implementations/behaviors/flying/NoFlyImpl";
import { Duck } from "./interfaces/Duck";
import { FlyingDuck } from "./implementations/ducks/FlyingDuck"

/*********************
 * Context: Code example of strategt patern
 * 
 * Strategy Pattern: The Strategy Pattern defines a family of algorithms,
 * encapsulates each one, and makes them interchangeable. Strategy
 * lets the algorithm vary independently from clients that use it.
 * 
 * We have a Duck class, and it has many types of behaviors, some static and some dynamic
 * The statis behaviors can be defined in the main Duck class itself, but dynamic behaviors of each
 * type of duck can have various implementations - i.e a duck can fly with wings, a duck can fly with rockets etc.
 * So here we create interfaces for each behavior, and have implementations for them
 * And each duck is instantiated with implementations of these behaviors based on requirement. 
 * 
 * Here the various types of behaviors are the family of algorithms 
 * namely in the example flying and squawking behavior, and the we can 
 * switch between the algor
 ********************/

// Our declaration type will be of the superclass Duck
// This is aligning with the principle - Program to an interface (aka supertype) rather than to an implementation (aka subtype)
// In this case Duck is the supertype - so our variable will be of type supertype and value will be referring to the implementation
let d1: Duck = new FlyingDuck();

// The flying duck is nothing but a Duck instantiated with a wingsFly implementation of flying behavior

d1.fly();
d1.squawk();

console.log("it has injured its wings, so lets try flying again");

// Here we are switching the implementation of fly behavior - i.e switching between flying strategies
d1.setFlyingBehavior(new NoFly());
d1.fly();
