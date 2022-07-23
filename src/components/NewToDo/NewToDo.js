import React from "react";
import styled from "styled-components";

import InputNewToDo from "./InputNewToDo";

const NewToDo = ({ addNewItem }) => {
  const saveNewItem = (enteredItems) => {
    const dateItems = {
      ...enteredItems,
    };
    addNewItem(dateItems);
  };

  return (
    <NewToDoContainer>
      <InputNewToDo onNewItem={saveNewItem} />
    </NewToDoContainer>
  );
};

export default NewToDo;

const NewToDoContainer = styled.div`
  background-color: #4285f4;
  padding: 1rem;
  margin: 1em 1em;
  max-width: 95%;
  border-radius: 5px;
  text-align: center;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.25);
`;
