import { Pizza } from "../Pizza";

/**
 * Factory Method Pattern
 * Abstract class defining the template method (orderPizza) and factory method (createPizza)
 */
export abstract class PizzaStore {
    // Factory method: subclasses implement to create specific pizza types
    protected abstract createPizza(type: string): Pizza;

    // Template method: defines the algorithm for ordering pizza
    public orderPizza(type: string) {
        const pizza: Pizza = this.createPizza(type);

        pizza.prepare();
        pizza.bake();
        pizza.cut();
        pizza.box();
    }
}