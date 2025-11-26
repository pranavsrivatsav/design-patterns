import { Pizza } from ".";

/**
 * Concrete product: Cheese pizza that uses ingredients from the factory
 */
export class CheesePizza extends Pizza {
    prepare(): void {
        console.log("Preparing...")
        console.log("step 1: Create dough " + this.ingredientsFactory.createDough())
        console.log("step 2: Apply sauce " + this.ingredientsFactory.createSauce())
        console.log("step 3: Added toppings " + this.ingredientsFactory.createToppings())
        console.log("step 4: Spread cheese " + this.ingredientsFactory.createCheese())
    }
}