import { Coffee } from "./implementations/Beverages/Coffee";
import { Cream } from "./implementations/Condiments/Cream";
import { Whip } from "./implementations/Condiments/Whip";
import { Beverage } from "./interface/Beverage";

/*********************************
 *Context: Code example of decorator pattern
 * In a decorator pattern, we can enhance existing properties,
 * and add new properties to a base object.
 *
 * A decorator must always take the shape of the base interface,
 * so that it can wrap around the instance of the base interface.
 *
 * A decorator can enhance existing properties without totally
 * overriding the implementation of the base object by adding the
 * enhancement logic after or before using the property in the base
 * object.
 *
 *
 * What is said above will make sense in the illustrated example:
 * Here we have a base interface called Beverage, and we know there
 * and each beverage needs to implement method cost and string
 * description.
 *
 * And we have different types of beverage created under
 * implementations/Beverages - Coffee, Horlicks, Tea etc.
 *
 * And along with the beverages, we also provide additional Condiments
 * for the beverage like Cream, Whip etc.
 *
 * These also have their own cost, which will have to be added to the final cost
 * And we also add these condiments to the description to communicate the
 * ordered beverage contents.
 *
 * So here, our condiments are basically decorators, their cost needs to be on top
 * of the cost of the beverage, and their description needs to append the description
 * of the original beverage like for eg. Coffee, Whip, Cream
 *
 * So we create a Condiment class which again implements Beverage, but it has an additional
 * property called baseBeverage which is the beverage it wraps over.
 *
 * And the implementations of Condiment class will use the baseBeverage properties to implement
 * the enhancement of properties - you can look into this in detail inside the implementations/Condiments
 *
 ********************************/

let beverage: Beverage = new Coffee();
// wrapping the base beverage with condiments
beverage = new Cream(beverage);
beverage = new Cream(beverage);
beverage = new Whip(beverage);

console.log(beverage.description);
console.log(beverage.cost());
