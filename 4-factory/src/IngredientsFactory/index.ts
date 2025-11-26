/**
 * Abstract Factory Pattern
 * Defines interface for creating families of related ingredients
 * Each concrete factory creates a complete set of region-specific ingredients
 */
export abstract class IngredientsFactory {
    abstract createDough(): string;
    abstract createSauce(): string;
    abstract createToppings(): string;
    abstract createCheese(): string;
    abstract createClams(): string;
}