export abstract class IngredientsFactory {
    abstract createDough(): string;
    abstract createSauce(): string;
    abstract createToppings(): string;
    abstract createCheese(): string;
}