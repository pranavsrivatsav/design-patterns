// COMPOSITE PATTERN
//
// Lets clients treat individual objects and compositions of objects
// uniformly, by composing them into tree structures that share a single
// common interface. A client calling an operation on the tree's root
// doesn't need to know (or care) whether any given node is a single leaf
// or an entire branch with its own children.
//
// How this example simulates it:
// - interfaces/MenuComponent.ts - the "Component" role: the shared
//     interface (name, description, print, addItem, removeItem) that both
//     leaves and composites implement. Child-management methods default to
//     throwing "Unsupported operation" here so leaves can just inherit
//     that default instead of implementing it themselves.
// - interfaces/MenuItem.ts   - the "Leaf" role: a single dish. It only
//     implements print(); it has no children so addItem/removeItem stay
//     unsupported.
// - interfaces/Menu.ts       - the "Composite" role: a menu that can hold
//     other MenuComponents - including other Menus - which is what turns
//     the structure into a tree instead of a flat list.
// - implementations/CafeMenu.ts, DessertMenu.ts - "Concrete Composite"s
//     whose children are all leaves.
// - implementations/DinerMenu.ts - a "Concrete Composite" that nests a
//     DessertMenu among its MenuItem children - the tree's one branch.
// - implementations/ArrayMenuIterator.ts, ObjectMenuIterator.ts - carried
//     over from the Iterator pattern example; each composite uses one
//     internally to walk its own direct children without exposing whether
//     they're stored in an array or an object.
// - index.ts (this file)     - the client. It only ever calls print() on
//     the two top-level menus. DinerMenu.print() recurses into the nested
//     DessertMenu's print() automatically, purely because both are called
//     through the same MenuComponent-shaped print() method.
import { CafeMenu } from "./implementations/CafeMenu";
import { DinerMenu } from "./implementations/DinerMenu";

const dinerMenu = new DinerMenu();
const cafeMenu = new CafeMenu();

// Client code: neither call knows or cares that dinerMenu's tree has a
// nested composite (DessertMenu) inside it while cafeMenu's does not - both
// are just "a MenuComponent that can print itself".
dinerMenu.print();
cafeMenu.print();
