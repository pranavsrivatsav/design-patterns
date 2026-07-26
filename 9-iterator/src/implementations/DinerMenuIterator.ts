import { CustomIterator } from "../interfaces/CustomIterator";
import { MenuItem } from "../interfaces/MenuItem";
import { DinerMenu } from "./DinerMenu";

// "Concrete Iterator" for DinerMenu. Its source is already an array of
// MenuItem, so traversal is just an index walk with no key lookup or
// reshaping needed - simpler than CafeMenuIterator purely because the
// underlying storage is simpler, which is the point being illustrated.
class DinerMenuIterator extends CustomIterator<MenuItem> {
  nextIndex: number;
  size: number;
  menu: DinerMenu;

  constructor(menu: DinerMenu) {
    super();

    this.nextIndex = 0;
    this.menu = menu;
    this.size = this.menu.items.length;
  }

  hasNext: () => boolean = () => this.nextIndex < this.size;

  getNext: () => MenuItem = () => {
    const nextItem = this.menu.items[this.nextIndex];
    this.nextIndex++;
    return nextItem;
  };
}

export { DinerMenuIterator };
