import { useState } from "react";
import { nanoid } from "nanoid";

function InputNewToDo(props) {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

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
    <section>
      <form onSubmit={submitHandler}>
        <section>
          <label>
            <input
              type="text"
              placeholder="New ToDo"
              value={enteredTitle}
              onChange={titleChangeHandler}
            ></input>
          </label>
        </section>
        <section>
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            onChange={dateChangeHandler}
          ></input>
        </section>
        <button type="submit">Add</button>
      </form>
    </section>
  );
}

export default InputNewToDo;
