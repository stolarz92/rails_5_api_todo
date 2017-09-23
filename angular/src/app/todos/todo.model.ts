import { Item } from '../shared/item.model';

export class Todo {
  public title: string;
  public items: Item[];

  constructor(title: string, items: Item[]) {
    this.title = title;
    this.items = items;
  }
}


