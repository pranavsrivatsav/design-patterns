import { Pizza } from "./Pizza";

export abstract class PizzaStore {
    abstract createPizza(type: string): Pizza;

    orderPizza(type: string) {
        const pizza: Pizza = this.createPizza(type);

        pizza.prepare();
        pizza.bake();
        pizza.cut();
        pizza.box();
    }
}