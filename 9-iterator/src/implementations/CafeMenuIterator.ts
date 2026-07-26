import { CustomIterator } from "../interfaces/CustomIterator";
import { Menu } from "../interfaces/Menu";
import { MenuItem } from "../interfaces/MenuItem";
import { CafeMenu } from "./CafeMenu";

// "Concrete Iterator" for CafeMenu. Because CafeMenu keeps its items in a
// dictionary, this iterator snapshots the object keys up front and walks
// that key list by index, looking each item back up on the menu as it goes.
// This bookkeeping (keys/nextIndex/size) is exactly what the pattern hides
// from the client - contrast with DinerMenuIterator below, which needs none
// of it because its source is already an array.
class CafeMenuIterator extends CustomIterator<MenuItem> {
  nextIndex: number;
  size: number;
  menu: CafeMenu;
  keys: string[];

  constructor(menu: CafeMenu) {
    super();

    this.menu = menu;
    this.size = Object.keys(menu.items).length;
    this.keys = Object.keys(menu.items);
    this.nextIndex = 0;

    console.log(JSON.stringify(this));
  }

  hasNext: () => boolean = () => {
    return this.nextIndex < this.size;
  };

  // Looks the key up on the menu, then wraps the result in a MenuItem so it
  // matches the shape DinerMenuIterator yields directly from its array.
  getNext: () => MenuItem = () => {
    const itemName = this.keys[this.nextIndex];
    const item = this.menu.items[itemName];
    this.nextIndex++;
    return new MenuItem(itemName, item.description, item.cost);
  };
}

export { CafeMenuIterator };
