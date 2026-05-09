// The adapter uses composition (i.e has an instance of the adaptee class) to adapt the adaptee to the target interface
// So we are going to demonstrate adapter design pattern - and this is the object adapter variant
// The scenario is this, we have a turkey class, and the client has an interface that supports a duck class
// So in order to resolve the requests of the client, we build an adapter that resolves the requests (nothing but method calls on duck class)
// using the methods on turkey class.

import { CountryTurkey } from "./implementations/CountryTurkeyImpl";
import { TurkeyDuckAdapter } from "./TurkeyDuckAdapter";

// To know more about the turkey and the duck class, go have a look at their class files

// The adaptee interface is turkey (or vendor interface)
const turkey = new CountryTurkey();

// The target interface is duck (or client interface)
const adaptedDuck = new TurkeyDuckAdapter(turkey);

// Look how we have adapted the adaptee turkey to perform operations that a target duck does.
adaptedDuck.fly();
adaptedDuck.squawk();
