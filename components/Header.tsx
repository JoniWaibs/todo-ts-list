import React, { useContext, useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import { mapContent } from '@/content/index';
import { AppContext } from '@/context/App';
import { ItemState } from '@/enums/index';
import styled from 'styled-components';

const { TODO } = ItemState;

const HeaderContainer = styled.header`
  padding-bottom: 45px;
`

const Title = styled.h1`
  text-align: center;
  padding: 25px 0;
`;

const ContainerInput = styled.div`
  display: flex;
  width: 100%
`;

const StyledInput = styled.input`
  width: 100%;
  padding:15px 10px;
  border-radius: 10px 0 0 10px;
  border: transparent;
  font-size: 16px;
  &:input:focus {
    outline: none;
    box-shadow: 0px 0px 2px red;
  }
`;

const SubmitButton = styled.button`
  cursor: pointer;
  border-radius: 0 10px 10px 0;
  border: transparent;
  width: 20%;
  font-weight: 700;
  font-size: 16px;
  background-color: #479aff;
  color: #d9fafc;
`;

export const Header: React.FunctionComponent = () => {
  const [input, setInput] = useState<string>('');
  const {items, setItems} = useContext(AppContext);

  const handleSubmit = () => {
    if(!input) return;
    setItems([...items, { id: uuidv4(), name: input, state: TODO }])
  }

  const { addYourTask, done } = mapContent();

  return (
    <HeaderContainer>
      <Title>TODO list</Title>
      <ContainerInput>
        <StyledInput
          type="text"
          role="input"
          aria-label={addYourTask}
          placeholder={addYourTask}
          onChange={(e: {target: HTMLInputElement}) => setInput(e.target.value)}
          value={input}
        />
        <SubmitButton role="add-task-button" onClick={handleSubmit}>{done}</SubmitButton>
      </ContainerInput>
    </HeaderContainer>
  )
}
