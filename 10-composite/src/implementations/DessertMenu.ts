import { CustomIterator } from "../interfaces/CustomIterator";
import { ArrayMenuIterator } from "./ArrayMenuIterator";
import { Menu } from "../interfaces/Menu";
import { MenuComponent } from "../interfaces/MenuComponent";
import { MenuItem } from "../interfaces/MenuItem";

// "Concrete Composite". Structurally identical to CafeMenu/DinerMenu - the
// only thing that makes it interesting is that DinerMenu holds one of
// these as a child, making this the nested branch of the tree.
class DessertMenu extends Menu {
  items: MenuComponent[];
  iterator: CustomIterator<MenuComponent>;

  constructor() {
    super("Dessert Menu", "A sweet selection of desserts to finish your meal");

    this.items = [
      new MenuItem(
        "New York Cheesecake",
        "Creamy classic cheesecake with a graham cracker crust.",
        6.5,
        true,
      ),
      new MenuItem(
        "Chocolate Lava Cake",
        "Warm chocolate cake with a molten center, served with ice cream.",
        7.25,
        true,
      ),
      new MenuItem(
        "Apple Pie",
        "Cinnamon-spiced apples baked in a flaky buttery crust.",
        5.95,
        true,
      ),
      new MenuItem(
        "Tiramisu",
        "Espresso-soaked ladyfingers layered with mascarpone cream.",
        6.95,
        true,
      ),
      new MenuItem(
        "Vanilla Bean Ice Cream",
        "Smooth vanilla ice cream made with real vanilla bean.",
        3.5,
        true,
      ),
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
    console.log("---------------------------------------");
    console.log(`${this.name}`);
    console.log(`${this.description}`);
    console.log("---------------------------------------");
    while (this.iterator.hasNext()) {
      const item = this.iterator.getNext();
      item.print();
    }
  };
}

export { DessertMenu };
