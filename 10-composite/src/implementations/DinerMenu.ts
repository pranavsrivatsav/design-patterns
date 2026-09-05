import { CustomIterator } from "../interfaces/CustomIterator";
import { ArrayMenuIterator } from "./ArrayMenuIterator";
import { Menu } from "../interfaces/Menu";
import { MenuComponent } from "../interfaces/MenuComponent";
import { MenuItem } from "../interfaces/MenuItem";
import { DessertMenu } from "./DessertMenu";

// "Concrete Composite". Storage is an array of MenuComponent, and one of
// those entries is a DessertMenu (another composite) rather than a
// MenuItem - that's the tree nesting the pattern is for. print() below
// never special-cases that entry: it just calls item.print() on everything
// the iterator hands back, so the DessertMenu's own header/footer and its
// items print recursively for free, with no branch anywhere for "is this a
// leaf or a sub-menu".
class DinerMenu extends Menu {
  items: MenuComponent[];
  iterator: CustomIterator<MenuComponent>;

  constructor() {
    super("Diner Menu", "A simple pleasurable diner meal menu");

    this.items = [
      new MenuItem(
        "Classic Burger",
        "Beef patty with lettuce, tomato, onion, and house sauce.",
        10.95,
        false,
      ),
      new MenuItem(
        "BLT Sandwich",
        "Crisp bacon, lettuce, and tomato on toasted sourdough.",
        8.5,
        false,
      ),
      new MenuItem(
        "Club Sandwich",
        "Turkey, ham, bacon, Swiss cheese, lettuce, and tomato.",
        11.25,
        false,
      ),
      new MenuItem(
        "Fries",
        "Golden french fries seasoned with sea salt.",
        3.75,
        true,
      ),
      new MenuItem(
        "Chocolate Shake",
        "Creamy chocolate milkshake topped with whipped cream.",
        4.95,
        true,
      ),
      new DessertMenu(),
    ];

    this.iterator = new ArrayMenuIterator(this.items);
  }

  addItem: (item: MenuComponent) => void = (item: MenuComponent) => {
    this.items.push(item);
  };

  removeItem: (name: string) => void = (name: string) => {
    this.items = this.items.filter((item) => item.name !== name);
  };

  print: () => void = () => {
    console.log("***************************************");
    console.log(`${this.name}`);
    console.log(`${this.description}`);
    console.log("***************************************");
    while (this.iterator.hasNext()) {
      const item = this.iterator.getNext();
      item.print();
    }
  };
}

export { DinerMenu };
