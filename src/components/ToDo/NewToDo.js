import React from "react";

import InputNewToDo from "./InputNewToDo";

const NewToDo = ({ addNewItem }) => {
  const saveNewItem = (enteredItems) => {
    const dateItems = {
      ...enteredItems,
    };
    addNewItem(dateItems);
  };

  return (
    <div className="new-expense">
      <InputNewToDo onNewItem={saveNewItem} />
    </div>
  );
};

export default NewToDo;
