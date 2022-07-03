import { useState } from "react";
import { nanoid } from "nanoid";
import styled from "styled-components";

function InputNewToDo(props) {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  // const dateChangeHandler = (event) => {
  //   setEnteredDate(event.target.value);
  // };

  const submitHandler = (event) => {
    event.preventDefault();

    const newItems = {
      id: nanoid(),
      title: enteredTitle,
      completed: false,
      archived: false,
      date: new Date(enteredDate),
    };

    props.onNewItem(newItems);
    setEnteredTitle("");
    setEnteredDate("");
  };

  return (
    <InputContainer>
      <InputForm onSubmit={submitHandler}>
        <section>
          <label>
            <InputText
              type="text"
              placeholder="New ToDo"
              value={enteredTitle}
              onChange={titleChangeHandler}
            ></InputText>
          </label>
        </section>
        <button type="submit">Add</button>
      </InputForm>
    </InputContainer>
  );
}

export default InputNewToDo;

const InputContainer = styled.section`
  display: flex;
  justify-content: center;
  padding: 1em;
  margin-top: 1em;
`;

const InputForm = styled.form`
  display: flex;
  align-items: center;
`;

const InputText = styled.input`
  padding: 1em;
  border-radius: 5px;
  border: 2px solid #f1356d;
`;
