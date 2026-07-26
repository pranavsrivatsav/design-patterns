import { CustomIterator } from "../interfaces/CustomIterator";
import { Menu } from "../interfaces/Menu";
import { MenuItem } from "../interfaces/MenuItem";
import { CafeMenuIterator } from "./CafeMenuIterator";

// A "Concrete Aggregate". Stores its items as a dictionary keyed by name
// rather than an array - a deliberately different internal representation
// from DinerMenu, to show the pattern's point: the client iterates both
// menus identically without knowing (or needing to know) about this
// difference, because each menu supplies an iterator tailored to its own
// storage.
class CafeMenu extends Menu {
  items: Record<string, { description: string; cost: number }>;
  iterator: CustomIterator<MenuItem>;

  constructor() {
    super();

    this.items = {
      "Veggie Burger": {
        description:
          "A grilled veggie patty with lettuce, tomato, and herb mayo.",
        cost: 8.75,
      },
      "Cafe Latte": {
        description: "Espresso with steamed milk and a light foam.",
        cost: 4.95,
      },
      "Ham & Cheese Panini": {
        description:
          "Toasted panini with smoked ham, Swiss cheese, and Dijon mustard.",
        cost: 9.25,
      },
      "Avocado Toast": {
        description:
          "Sourdough toast topped with smashed avocado, chili flakes, and lemon.",
        cost: 6.5,
      },
      "Berry Smoothie": {
        description: "Mixed berries blended with yogurt and honey.",
        cost: 5.5,
      },
      "Espresso Shot": {
        description: "Rich single shot espresso pulled fresh.",
        cost: 3.0,
      },
    };

    this.iterator = new CafeMenuIterator(this);
  }
}

export { CafeMenu };
