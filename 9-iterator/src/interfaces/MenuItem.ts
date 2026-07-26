// Plain data shape yielded by every iterator. Both menus store their items
// differently internally, but their iterators normalize each item into a
// MenuItem before handing it to the client, so the client never has to care
// which menu it came from.
class MenuItem {
  name: string;
  description: string;
  cost: number;

  constructor(name: string, description: string, cost: number) {
    this.name = name;
    this.description = description;
    this.cost = cost;
  }
}

export { MenuItem };
