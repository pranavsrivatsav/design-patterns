// ITERATOR PATTERN
//
// Provides a way to access the elements of a collection sequentially
// without exposing its underlying representation (array, object, list,
// etc). The collection just needs to hand out an object that knows how to
// walk it; the client only ever talks to that object.
//
// How this example simulates it:
// - interfaces/CustomIterator.ts - the "Iterator" role: a hasNext/getNext
//     contract every concrete iterator must implement.
// - interfaces/Menu.ts    - the "Aggregate" role: a promise that a menu can
//     supply an iterator, with no promise about internal storage.
// - interfaces/MenuItem.ts - the common shape every iterator yields,
//     regardless of how the source menu stores its items.
// - implementations/CafeMenu.ts + CafeMenuIterator.ts   - a "Concrete
//     Aggregate"/"Concrete Iterator" pair where items live in a dictionary
//     keyed by name, so the iterator walks a snapshot of the keys.
// - implementations/DinerMenu.ts + DinerMenuIterator.ts - the same pair
//     where items live in a plain array, so the iterator just walks indexes.
// - index.ts (this file)  - the client. It loops over both menus through
//     the exact same iterator interface, never knowing (or caring) that one
//     is backed by an object and the other by an array.
import { CafeMenu } from "./implementations/CafeMenu";
import { DinerMenu } from "./implementations/DinerMenu";
import { Menu } from "./interfaces/Menu";

const menus: Menu[] = [new CafeMenu(), new DinerMenu()];

function printMenus() {
  menus.forEach((menu, index) => {
    console.log(`\nMenu ${index}\n`);
    // Same hasNext/getNext loop for every menu - the client code has no
    // branch for "if it's a CafeMenu do X, if it's a DinerMenu do Y".
    while (menu.iterator.hasNext()) {
      const nextItem = menu.iterator.getNext();
      console.log(JSON.stringify(nextItem));
    }
  });
}

printMenus();
