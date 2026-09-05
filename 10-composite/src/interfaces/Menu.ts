import { CustomIterator } from "./CustomIterator";
import { MenuComponent } from "./MenuComponent";
import { MenuItem } from "./MenuItem";

// The "Composite" role. A menu is a MenuComponent that can hold other
// MenuComponents - and since MenuComponent is the same type a Menu itself
// is, one Menu can hold another Menu as a child (see DinerMenu nesting a
// DessertMenu). That's what makes the structure a tree rather than a flat
// list: children are only ever referenced through the common
// MenuComponent type, so a subtree is indistinguishable from a single leaf
// to anything that isn't the composite itself.
abstract class Menu extends MenuComponent {
  constructor(name: string, description: string) {
    super(name, description);
  }

  //we're making the following abstract so any menu subclass that extends it
  //is mandated to have an implementation
  abstract iterator: CustomIterator<MenuComponent>;
  abstract print: () => void;
  abstract addItem: (item: MenuComponent) => void;
  abstract removeItem: (name: string) => void;
}

export { Menu };
