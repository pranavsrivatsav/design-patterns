// The "Component" role. Declares one shared interface for both leaves
// (MenuItem) and composites (Menu) so a client can treat a single dish and
// an entire sub-menu identically - call print() and not care which one it
// actually is.
//
// The child-management operations (addItem/removeItem) live here too,
// rather than only on Menu, which is what lets code hold a plain
// MenuComponent reference and still call them. They default to throwing
// because they only make sense for composites; leaves inherit the default
// and simply never override it.
abstract class MenuComponent {
  name: string;
  description: string;

  constructor(name: string, description: string) {
    this.name = name;
    this.description = description;
  }

  addItem: (item: MenuComponent) => void = () => {
    throw new Error("Unsupported operation");
  };

  removeItem: (name: string) => void = () => {
    throw new Error("Unsupported operation");
  };

  print: () => void = () => {
    throw new Error("Unsupported operation");
  };
}

export { MenuComponent };
