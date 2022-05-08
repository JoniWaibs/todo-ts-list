import { cleanup } from '@testing-library/react';
import { Item as ItemProps } from '@/models/item';
import { TodoList } from "@/components/TodoList";
import { ItemState } from '@/enums/index';
import { Global } from '@/models/global'

const { TODO, DONE, WIP } = ItemState;

declare const global: Global;

describe('Item Component', () => {
  let items: ItemProps[] = [];
  let setItems: () => void;
  let doCompleteItem: () => void;
  let deleteItem: () => void;

  beforeEach(() => {
    setItems = jest.fn();
    doCompleteItem = jest.fn();
    deleteItem = jest.fn();
    items = [{
      name: 'some little task',
      state: TODO,
      id: 'id-task-test-1',
    },
    {
      name: 'play football',
      state:  DONE,
      id: 'id-task-test-2',
    },
    {
      name: 'Learn Rust',
      state:  WIP,
      id: 'id-task-test-3',
    },
    {
      name: 'Cook dinner',
      state:  DONE,
      id: 'id-task-test-4',
    },
    {
      name: 'go to the supermarket',
      state:  DONE,
      id: 'id-task-test-5',
    },
    {
      name: 'watch series',
      state:  DONE,
      id: 'id-task-test-6',
    }];
  });

  afterEach(() => {
    cleanup();
  });

  test('Should render a task list', () => {
    const { container, getByText } = global.appRenderWrapper(
      <TodoList />,
      {
        items,
        setItems,
        doCompleteItem,
        deleteItem,
      }
    );

    expect(container).toMatchSnapshot();
    items.forEach(({name}: ItemProps) => getByText(name));
  })
});