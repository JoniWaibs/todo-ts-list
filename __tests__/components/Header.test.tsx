import React, { useState as useStateMock } from 'react';
import { fireEvent, cleanup } from '@testing-library/react';
import { Item as ItemProps } from '@/models/item';
import { ItemState } from '@/enums/index';
import { Header } from "@/components/Header";
import { Global } from '@/models/global';

const { TODO, DONE } = ItemState;

declare const global: Global;

jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useState: jest.fn(),
}));

describe('Header Component', () => {
  let items: ItemProps[] = [];
  let setItems: () => void;
  let doCompleteItem: () => void;
  let deleteItem: () => void;
  let setState: () => void;

  beforeEach(() => {
    setItems = jest.fn();
    doCompleteItem = jest.fn();
    deleteItem = jest.fn();
    setState = jest.fn();

    items = [{
      name: 'some little task',
      state: TODO,
      id: 'id-task-test',
    },
    {
      name: 'play football',
      state:  DONE,
      id: 'id-task-test',
    }];

    // Mock useState behavior
    (useStateMock as jest.Mock).mockImplementation(init => [init, setState])
  });

  afterEach(() => {
    cleanup();
  });

  test('Should input a new task to do', () => {
    const { container, getByLabelText } = global.appRenderWrapper(
      <Header />,
      {
        items,
        setItems,
        doCompleteItem,
        deleteItem,
      }
    );

    // Change input value
    const inputRangeElement = getByLabelText('Add your task');
    fireEvent.change(inputRangeElement, { target: { value: 'Task to do it tomorrow' } });

    expect(container).toMatchSnapshot();
    expect(setState).toHaveBeenCalledWith('Task to do it tomorrow')
  });

  test('Should set a new task to do in state manager', () => {
    // Mock input value
    (useStateMock as jest.Mock).mockReturnValueOnce(['task added', {}])

    const { container, getByRole } = global.appRenderWrapper(
      <Header />,
      {
        items,
        setItems,
        doCompleteItem,
        deleteItem,
      }
    );

    expect(container).toMatchSnapshot();

    const addButton = getByRole('add-task-button');
    fireEvent.click(addButton)
    expect(setItems).toHaveBeenCalled()
  });

  test('Should not set a new task to do when text input is empty', () => {
    const { container, getByLabelText, getByText } = global.appRenderWrapper(
      <Header />,
      {
        items,
        setItems,
        doCompleteItem,
        deleteItem,
      }
    );

    // Change input value to emulate useState behavior
    const inputRangeElement = getByLabelText('Add your task');
    fireEvent.change(inputRangeElement, { target: { value: '' } });

    expect(container).toMatchSnapshot();

    const addYourTaskButton = getByText('Done')
    fireEvent.click(addYourTaskButton);

    expect(setState).not.toHaveBeenCalledWith('Some text')
  });
});
