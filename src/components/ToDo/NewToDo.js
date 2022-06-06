import React from "react";

import InputNewToDo from "./InputNewToDo";

const NewToDo = ({ addNewItem }) => {
  const saveNewItem = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    addNewItem(expenseData);
  };

  return (
    <div className="new-expense">
      <InputNewToDo onNewItem={saveNewItem} />
    </div>
  );
};

export default NewToDo;
