import React, { createContext, useState } from "react";
import { AppContextModel, AppProviderProps } from "@/models/context";
import { Item } from "@/models/item";
import { ItemState } from "@/enums/index";

const { DONE } = ItemState;

const contextDefaultValues: AppContextModel = {
  items: [],
  setItems: () => {},
  doCompleteItem: () => {},
  deleteItem: () => {},
};

export const AppContext = createContext<AppContextModel>(contextDefaultValues)
const { Provider } = AppContext;

export const AppProvider = ({ children }: AppProviderProps) => {
  const [items, setItems] = useState<Item[]>(contextDefaultValues.items);

  const doCompleteItem = (id: string) => {
    if(items.some(item => item.id === id)) {
      const newListItems = [...items]
      newListItems.forEach(item => item.id === id ? item.state = DONE : null);
      setItems([...newListItems])
    }
  }

  const deleteItem = (id: string) => {
    const newListItems = items.filter(item => item.id !== id)
    setItems([...newListItems])
  }

  return (
    <Provider value={{items, setItems, doCompleteItem, deleteItem}}>
      {children}
    </Provider>
  )
}
