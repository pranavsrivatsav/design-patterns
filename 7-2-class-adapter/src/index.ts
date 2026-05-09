// The adapter uses multiple inheritance to inherit from the target interface and the adaptee class

import { Duck } from "./interfaces/Duck";
import { TurkeyDuckAdapter } from "./TurkeyDuckAdapter";

// Here we are going to create an adaptor to resolve the same scenario in 7-1-object-adapter
// i.e adaptee interface Turkey -> target interface duck
// but instead of composition we are going to use mulitple inheritance - which is called a class adapter design pattern
// of course the limitation of this is it can be done only in languages that support multiple inheritance
// or in our case, as we are using ts, we can implement multiple interfaces in a class, we cant do this in plain js though

// See how we are implementing the design principle - program to an interface, not an implementation
// By restricting the type of adaptedDuck to duck, so that adaptedDuck is not used to call the methods of Turkey interface,
// even  though the instance of TurkeyDuckAdapter has implemented both Duck and Turkey behavior

// This is because the intention of the adapter is to adapt the turkey to the duck interface, not to be used as a turkey
const adaptedDuck: Duck = new TurkeyDuckAdapter();
adaptedDuck.fly();
adaptedDuck.squawk();
