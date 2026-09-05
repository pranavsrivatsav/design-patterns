import { CustomIterator } from "../interfaces/CustomIterator";
import { MenuComponent } from "../interfaces/MenuComponent";

// "Concrete Iterator" for DinerMenu. Its source is already an array of
// MenuItem, so traversal is just an index walk with no key lookup or
// reshaping needed - simpler than CafeMenuIterator purely because the
// underlying storage is simpler, which is the point being illustrated.
class ArrayMenuIterator extends CustomIterator<MenuComponent> {
  items: MenuComponent[];
  nextIndex: number;
  size: number;

  constructor(items: MenuComponent[]) {
    super();

    this.items = items;
    this.size = this.items.length;
    this.nextIndex = 0;
  }

  hasNext: () => boolean = () => this.nextIndex < this.size;

  getNext: () => MenuComponent = () => {
    const nextItem = this.items[this.nextIndex];
    this.nextIndex++;
    return nextItem;
  };
}

export { ArrayMenuIterator };
