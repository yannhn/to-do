import { useState } from "react";
import { nanoid } from "nanoid";
import styled from "styled-components";

function InputNewToDo(props) {
  const [enteredTitle, setEnteredTitle] = useState("");

  const submitHandler = (event) => {
    event.preventDefault();

    const newItems = {
      id: nanoid(),
      title: enteredTitle,
      completed: "",
      archived: "",
    };

    props.onNewItem(newItems);
    setEnteredTitle("");
  };

  return (
    <InputContainer>
      <InputForm onSubmit={submitHandler}>
        <label>
          <InputText
            type="text"
            placeholder="Input your new ToDo"
            value={enteredTitle}
            onChange={(event) => setEnteredTitle(event.target.value)}
          />
        </label>
        <EditButton type="submit">add</EditButton>
      </InputForm>
    </InputContainer>
  );
}

export default InputNewToDo;

const InputContainer = styled.section`
  padding: 1em;
  margin-top: 1em;
`;

const InputForm = styled.form`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const InputText = styled.input`
  padding: 0.6em;
  border-radius: 5px;
  border: 1px solid #0d47a1;
`;

const EditButton = styled.button`
  padding: 0.6em 1.4em;
  font-size: 0.8rem;
  border-radius: 5px;
  border: none;
  background: white;
  color: #4285f4;
  cursor: pointer;

  &:hover {
    background: #0d47a1;
  }

  &:active {
    background: #bad;
  }
`;
