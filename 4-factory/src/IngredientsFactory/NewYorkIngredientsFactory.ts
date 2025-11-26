import { IngredientsFactory } from ".";

/**
 * Concrete factory: Creates New York style ingredients (thin crust, marinara sauce, etc.)
 */
export class NewYorkIngredientsFactory extends IngredientsFactory {
    createDough(): string {
        return "Thin crusted dough";
    }
    createSauce(): string {
        return "Marinara Sauce"
    }
    createToppings(): string {
        return "Bell peppers, Avocado strips, Jalapeno, Olives"
    }
    createClams(): string {
        return "Fresh clams"
    }
    createCheese(): string {
        return "Mozarella Cheese"
    }
}