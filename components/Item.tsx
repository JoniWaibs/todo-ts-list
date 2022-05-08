import { useContext } from 'react';
import styled from 'styled-components';
import { AppContext } from '@/context/App';
import { ItemState } from '@/enums/index';
import { Item as ItemProps } from '@/models/item';
import { CheckIcon } from '@/svg/CheckIcon';
import { TrashIcon } from '@/svg/TrashIcon';

const { DONE } = ItemState;

const RowItem = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  gap: 5px;
  background-color: #ffffff;
  border-radius: 5px;
  padding: 10px
`;

const DeleteButton = styled.button`
  border-radius: 5px;
  border:transparent;
  background-color: #f4675d
`;

const DoneButton = styled.button<{state: string}>`
  border-radius: 5px;
  border:transparent;
  background-color: ${props => props.state === DONE ? '#bfbfbf' : '#47ab67'};
`;

const ItemInfo = styled.div `
  display: flex;
  align-items: center;
  width: 100%
`;

const TaskName = styled.p<{state: string}>`
  padding: 0 15px;
  font-size: 18px;
  text-decoration: ${props => props.state === DONE ? "line-through" : 'none'};
`;

const StateLabel = styled.span<{state?: string}>`
  background-color: ${props => props.state === DONE ? '#a8f5c1' : '#ffffff'};
  color: green;
  font-weight: bold;
  padding: 2px 10px;
  text-transform: uppercase;
  font-size: 12px;
  border-radius: 15px;
`;

export const Item = ({name, state, id}: ItemProps): JSX.Element => {
  const { doCompleteItem, deleteItem } = useContext(AppContext)

  const handleCompleteItem = (id: string) => {
    if(!id) return null;
    doCompleteItem(id)
  };

  const handleDeleteItem = (id: string) => {
    if(!id) return null;
    deleteItem(id)
  };

  return (
    <RowItem>
      <DoneButton role="complete-button" onClick={() => handleCompleteItem(id)} state={state}>
        <CheckIcon customClass={'#ffff'}/>
      </DoneButton>
      <ItemInfo>
        <TaskName state={state}>{name}</TaskName>
        <StateLabel state={state} >{state === DONE ? state : null}</StateLabel>
      </ItemInfo>
      <DeleteButton role="delete-button" onClick={() => handleDeleteItem(id)}>
        <TrashIcon customClass={'#ffff'}/>
      </DeleteButton>
    </RowItem>
  );
}
