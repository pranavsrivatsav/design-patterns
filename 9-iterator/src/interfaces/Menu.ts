import { CustomIterator } from "./CustomIterator";
import { MenuItem } from "./MenuItem";

// The "Aggregate" role. A Menu promises nothing about how its items are
// stored internally - only that it can hand out an iterator capable of
// walking them. The client (index.ts) only ever talks to this iterator,
// so each concrete menu is free to use whatever storage shape suits it.
abstract class Menu {
  abstract iterator: CustomIterator<MenuItem>;
}

export { Menu };
