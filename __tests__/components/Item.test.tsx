import { fireEvent, cleanup } from '@testing-library/react';
import { Item as ItemProps } from '@/models/item';
import { Item } from "@/components/Item";
import { ItemState } from '@/enums/index';
import { Global } from '@/models/global';

const { TODO, DONE } = ItemState;

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
      id: 'id-task-test',
    },
    {
      name: 'play football',
      state:  DONE,
      id: 'id-task-test',
    }]
  });

  afterEach(() => {
    cleanup();
  });

  test('Should render a task', () => {
    const { container } = global.appRenderWrapper(
      <Item {...items[0]}/>,
      {
        items,
        setItems,
        doCompleteItem,
        deleteItem,
      }
    );

    expect(container).toMatchSnapshot();
    expect('some little task')
  });

  test('Should complete task', () => {
    const { container, getByRole } = global.appRenderWrapper(
      <Item {...items[0]}/>,
      {
        items,
        setItems,
        doCompleteItem,
        deleteItem,
      }
    );

    expect(container).toMatchSnapshot();
    const completeButton = getByRole('complete-button');
    fireEvent.click(completeButton)
    expect(doCompleteItem).toHaveBeenCalled()
  });

  test('Should delete task', () => {
    const { container, getByRole } = global.appRenderWrapper(
      <Item {...items[1]}/>,
      {
        items,
        setItems,
        doCompleteItem,
        deleteItem,
      }
    );

    expect(container).toMatchSnapshot();
    const deleteButton = getByRole('delete-button');
    fireEvent.click(deleteButton)
    expect(deleteItem).toHaveBeenCalled()
  });

  test('Should not complete task when id is not valid', () => {
    items[0].id = ''
    const { container, getByRole } = global.appRenderWrapper(
      <Item {...items[0]}/>,
      {
        items,
        setItems,
        doCompleteItem,
        deleteItem,
      }
    );

    expect(container).toMatchSnapshot();
    const completeButton = getByRole('complete-button');
    fireEvent.click(completeButton)
    expect(doCompleteItem).not.toHaveBeenCalled()
  });

  test('Should not delete task when id is not valid', () => {
    items[1].id = ''
    const { container, getByRole } = global.appRenderWrapper(
      <Item {...items[1]}/>,
      {
        items,
        setItems,
        doCompleteItem,
        deleteItem,
      }
    );

    expect(container).toMatchSnapshot();
    const deleteButton = getByRole('delete-button');
    fireEvent.click(deleteButton)
    expect(deleteItem).not.toHaveBeenCalled()
  });
});
