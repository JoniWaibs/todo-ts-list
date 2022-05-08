import React, { useContext } from 'react'
import { AppContext } from '@/context/App';
import { Item as ItemModel } from '@/models/item';
import { Item } from './Item';
import styled from 'styled-components';

const ContainerList = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const TodoList: React.FunctionComponent = () => {
  const { items } = useContext(AppContext);

  return (
    <ContainerList>
      { items && items.map(({name, state, id}: ItemModel) => (<Item name={name} state={state} id={id} key={id}/>))}
    </ContainerList>
  )
}
