import { cleanup } from '@testing-library/react';
import Home from '@/pages/index'
import { Global } from '@/models/global'
import { Item as ItemProps } from '@/models/item';
import { ItemState } from '@/enums/index';

const { TODO, DONE, WIP } = ItemState;

declare const global: Global;

describe('App component', () => {
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
    }]
  })

  afterEach(() => {
    cleanup();
  })

  test('Should render header with add tasks input', () => {
    const { container, getByText, getByLabelText } = global.appRenderWrapper(
      <Home />,
      {
        items,
        setItems,
        doCompleteItem,
        deleteItem,
      }
    );

    expect(container).toMatchSnapshot();
    getByText('TODO list')
    getByLabelText('Add your task')
  })

  test('Should render page with some tasks', () => {
    const { container, getByText } = global.appRenderWrapper(
      <Home />,
      {
        items,
        setItems,
        doCompleteItem,
        deleteItem,
      }
    );

    expect(container).toMatchSnapshot();
    items.forEach(({name}: ItemProps) => getByText(name))
  })
})