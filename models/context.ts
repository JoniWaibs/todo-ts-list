import { Dispatch, SetStateAction } from 'react';
import { Item } from './item';

export interface AppContextModel {
  items: Item[],
  setItems: Dispatch<SetStateAction<Item[]>>,
  doCompleteItem: (id: string) => void,
  deleteItem: (id: string) => void,
}

export interface AppProviderProps {
  children: JSX.Element | JSX.Element[]
}