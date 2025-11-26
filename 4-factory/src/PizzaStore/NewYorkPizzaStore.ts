import { PizzaStore } from ".";
import { NewYorkIngredientsFactory } from "../IngredientsFactory/NewYorkIngredientsFactory";
import { Pizza } from "../Pizza";
import { CheesePizza } from "../Pizza/CheesePizza";
import { ClamPizza } from "../Pizza/ClamPizza";

/**
 * Concrete factory: Creates New York style pizzas using NY ingredients
 */
export class NewYorkPizzaStore extends PizzaStore {
  ingredientsFactory = new NewYorkIngredientsFactory();
  
  createPizza(type: string): Pizza {
    if (type === "cheese") return new CheesePizza(this.ingredientsFactory);
    if (type === "clam") return new ClamPizza(this.ingredientsFactory);
    throw new Error("Pizza type does not exist");
  }
}
