import { IngredientsFactory } from ".";

/**
 * Concrete factory: Creates Chicago style ingredients (thick crust, tomato sauce, etc.)
 */
export class ChicagoIngredientsFactory extends IngredientsFactory {
    createDough(): string {
        return "Thick Airy dough";
    }
    createSauce(): string {
        return "Tomato Sauce"
    }
    createToppings(): string {
        return "Onion, Avocado strips, Jalapeno, Olives"
    }
    createClams(): string {
        return "Fresh clams"
    }
    createCheese(): string {
        return "Mozarella Cheese"
    }
}