import { MenuComponent } from "./MenuComponent";

// The "Leaf" role. A single dish - it has no children, so it only
// implements print() and inherits the "Unsupported operation" defaults for
// addItem/removeItem from MenuComponent rather than overriding them.
class MenuItem extends MenuComponent {
  cost: number;
  isVeg: boolean;

  constructor(name: string, description: string, cost: number, isVeg: boolean) {
    super(name, description);
    this.cost = cost;
    this.isVeg = isVeg;
  }

  print: () => void = () => {
    console.log(`${this.name} - isVeg: ${this.isVeg} - $${this.cost}`);
    console.log(`description: ${this.description}`);
    console.log();
  };
}

export { MenuItem };
