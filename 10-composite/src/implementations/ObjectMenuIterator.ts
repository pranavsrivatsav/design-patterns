import { CustomIterator } from "../interfaces/CustomIterator";
import { MenuComponent } from "../interfaces/MenuComponent";

// "Concrete Iterator" for CafeMenu. Its source is a name-keyed object rather
// than an array, so traversal walks Object.keys/Object.values instead of a
// plain index - the point being illustrated is that the iterator absorbs
// that difference and still exposes the same hasNext/getNext shape.
class ObjectMenuIterator extends CustomIterator<MenuComponent> {
  items: Record<string, MenuComponent>;
  keys: string[];
  values: MenuComponent[];
  nextIndex: number;
  size: number;

  constructor(items: Record<string, MenuComponent>) {
    super();

    this.items = items;
    this.keys = Object.keys(this.items);
    this.values = Object.values(this.items);
    this.size = this.keys.length;
    this.nextIndex = 0;
  }

  hasNext: () => boolean = () => this.nextIndex < this.size;

  getNext: () => MenuComponent = () => {
    const nextItem = this.values[this.nextIndex];
    this.nextIndex++;
    return nextItem;
  };
}

export { ObjectMenuIterator };
