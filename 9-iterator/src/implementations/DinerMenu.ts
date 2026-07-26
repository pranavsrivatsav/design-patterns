import { CustomIterator } from "../interfaces/CustomIterator";
import { Menu } from "../interfaces/Menu";
import { MenuItem } from "../interfaces/MenuItem";
import { DinerMenuIterator } from "./DinerMenuIterator";

// A "Concrete Aggregate", storing its items as a plain array of MenuItem -
// the more "obvious" representation, contrasted deliberately with CafeMenu's
// dictionary-based storage.
class DinerMenu extends Menu {
  items: MenuItem[];
  iterator: CustomIterator<MenuItem>;

  constructor() {
    super();

    this.items = [
      new MenuItem(
        "Classic Burger",
        "Beef patty with lettuce, tomato, onion, and house sauce.",
        10.95,
      ),
      new MenuItem(
        "BLT Sandwich",
        "Crisp bacon, lettuce, and tomato on toasted sourdough.",
        8.5,
      ),
      new MenuItem(
        "Club Sandwich",
        "Turkey, ham, bacon, Swiss cheese, lettuce, and tomato.",
        11.25,
      ),
      new MenuItem(
        "Fries",
        "Golden french fries seasoned with sea salt.",
        3.75,
      ),
      new MenuItem(
        "Chocolate Shake",
        "Creamy chocolate milkshake topped with whipped cream.",
        4.95,
      ),
    ];

    this.iterator = new DinerMenuIterator(this);
  }
}

export { DinerMenu };
