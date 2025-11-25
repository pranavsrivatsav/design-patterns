import { IngredientsFactory } from "../IngredientsFactory";

export abstract class Pizza {
    dough: string = "";
    sauce: string = "";
    toppings: string = "";
    cheese: string = "";
    ingredientsFactory: IngredientsFactory;

    constructor(ingredientsFactory: IngredientsFactory) {
        this.ingredientsFactory = ingredientsFactory;
    }

    prepare(): void {
        console.log("Preparing...")
        console.log("step 1: Create dough " + this.ingredientsFactory.createDough())
        console.log("step 2: Apply sauce " + this.ingredientsFactory.createSauce())
        console.log("step 1: Added toppings " + this.ingredientsFactory.createToppings())
        console.log("step 1: Spread cheese " + this.ingredientsFactory.createCheese())
    }

    bake(): void {

    }
    
    cut(): void {

    }

    box(): void {

    }
}