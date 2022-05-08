import { ItemState } from "@/enums/index";

export interface Item {
  id: string,
  name: string,
  state: ItemState,
}

export interface ListItem {
  items: Item[];
}