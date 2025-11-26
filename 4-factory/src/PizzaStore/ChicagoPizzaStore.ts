import { PizzaStore } from ".";
import { ChicagoIngredientsFactory } from "../IngredientsFactory/ChicagoIngredientsFactory";
import { Pizza } from "../Pizza";
import { CheesePizza } from "../Pizza/CheesePizza";
import { ClamPizza } from "../Pizza/ClamPizza";

/**
 * Concrete factory: Creates Chicago style pizzas using Chicago ingredients
 */
export class ChicagoPizzaStore extends PizzaStore {
  ingredientsFactory = new ChicagoIngredientsFactory();
  
  createPizza(type: string): Pizza {
    if (type === "cheese") return new CheesePizza(this.ingredientsFactory);
    if (type === "clam") return new ClamPizza(this.ingredientsFactory);
    throw new Error("Pizza type does not exist");
  }
}
