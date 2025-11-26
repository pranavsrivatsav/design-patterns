import { IngredientsFactory } from "../IngredientsFactory";

/**
 * Abstract Product: Base pizza class that uses an ingredients factory
 * Subclasses implement prepare() to use ingredients from the factory
 */
export abstract class Pizza {
    dough: string = "";
    sauce: string = "";
    toppings: string = "";
    cheese: string = "";
    ingredientsFactory: IngredientsFactory;

    constructor(ingredientsFactory: IngredientsFactory) {
        this.ingredientsFactory = ingredientsFactory;
    }

    // Subclasses implement to prepare pizza using factory ingredients
    abstract prepare(): void

    bake(): void {
        console.log("Bake for 15 mins");
    }
    
    cut(): void {
        console.log("Cut into 4 pieces")
    }

    box(): void {
        console.log("Box into a red box")
    }
}