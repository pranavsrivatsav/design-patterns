import { CustomIterator } from "../interfaces/CustomIterator";
import { ObjectMenuIterator } from "./ObjectMenuIterator";
import { Menu } from "../interfaces/Menu";
import { MenuComponent } from "../interfaces/MenuComponent";
import { MenuItem } from "../interfaces/MenuItem";

// "Concrete Composite". Same role as DinerMenu/DessertMenu, but its
// children are all leaves (MenuItem) stored in a name-keyed object rather
// than an array - a reminder that the composite's internal storage is a
// private implementation detail, unrelated to the tree shape it exposes
// through MenuComponent.
class CafeMenu extends Menu {
  items: Record<string, MenuComponent>;
  iterator: CustomIterator<MenuComponent>;

  constructor() {
    super("Cafe Menu", "A simple cafe menu");

    this.items = {
      espresso: new MenuItem(
        "Espresso",
        "A rich, concentrated shot of coffee.",
        2.75,
        true,
      ),
      cappuccino: new MenuItem(
        "Cappuccino",
        "Espresso topped with steamed milk and a thick layer of foam.",
        3.95,
        true,
      ),
      latte: new MenuItem(
        "Latte",
        "Espresso with steamed milk and a light layer of foam.",
        4.25,
        true,
      ),
      croissant: new MenuItem(
        "Butter Croissant",
        "Flaky, buttery French pastry baked fresh daily.",
        3.25,
        true,
      ),
      blueberryMuffin: new MenuItem(
        "Blueberry Muffin",
        "Moist muffin loaded with fresh blueberries.",
        3.5,
        true,
      ),
    };

    this.iterator = new ObjectMenuIterator(this.items);
  }

  addItem: (item: MenuComponent) => void = (item: MenuComponent) => {
    this.items[item.name] = item;
  };

  removeItem: (name: string) => void = (name: string) => {
    delete this.items[name];
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

export { CafeMenu };
