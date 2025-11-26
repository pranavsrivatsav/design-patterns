/**
 * Factory Design Pattern Demo
 * 
 * PATTERN DEFINITIONS:
 * 
 * 1. Factory Method Pattern:
 *    - Defines an interface for creating objects, but lets subclasses decide which class to instantiate
 *    - Uses inheritance: subclasses override the factory method to create specific products
 *    - Encapsulates object creation and allows the superclass to work with products without knowing their concrete types
 * 
 * 2. Abstract Factory Pattern:
 *    - Provides an interface for creating families of related or dependent objects without specifying their concrete classes
 *    - Uses composition: clients use factories to create objects, ensuring products from the same family work together
 *    - Useful when you need to ensure products are compatible and consistent within a family
 * 
 * IMPLEMENTATION IN THIS PROJECT:
 * 
 * 1. Factory Method Pattern (PizzaStore):
 *    - Abstract PizzaStore defines the orderPizza() template method
 *    - Subclasses (NewYorkPizzaStore, ChicagoPizzaStore) implement createPizza()
 *    - Each store creates region-specific pizza types
 * 
 * 2. Abstract Factory Pattern (IngredientsFactory):
 *    - Abstract IngredientsFactory defines interface for creating ingredient families
 *    - Concrete factories (NewYorkIngredientsFactory, ChicagoIngredientsFactory) 
 *      create region-specific ingredients (dough, sauce, toppings, cheese, clams)
 *    - Pizzas use the factory to get ingredients, ensuring consistency within a region
 * 
 * Usage:
 *    - Different pizza stores can create the same pizza type (e.g., "cheese")
 *    - Each store uses its regional ingredients factory
 *    - Result: Same pizza type, different regional styles
 */

import { ChicagoPizzaStore } from "./PizzaStore/ChicagoPizzaStore";
import { NewYorkPizzaStore } from "./PizzaStore/NewYorkPizzaStore";

// Create regional pizza stores
const nyPizzaStore = new NewYorkPizzaStore();
const chPizzaStore = new ChicagoPizzaStore();

// Order same pizza type from different stores (different regional styles)
nyPizzaStore.orderPizza('cheese');
chPizzaStore.orderPizza('cheese');