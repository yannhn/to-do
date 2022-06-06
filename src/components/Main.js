import Header from "./UI/Header";
// import Footer from "./UI/Footer";
import ToDo from "./ToDo/ToDo";
import { useState } from "react";
import { nanoid } from "nanoid";
// import InputNewToDo from "./ToDo/InputNewToDo";
import useLocalStorage from "../common/useLocalStorage";
import NewToDo from "./ToDo/NewToDo";
// import { Routes, Route } from "react-router-dom";

function Main() {
  const [items, setItems] = useState([
    {
      id: nanoid(),
      title: "Do the dishes",
      completed: true,
      archived: false,
      date: new Date(2022, 2, 12),
    },
    {
      id: nanoid(),
      title: "Feed the dog",
      completed: false,
      archived: false,
      date: new Date(2022, 5, 12),
    },
    {
      id: nanoid(),
      title: "Cook dinner",
      completed: false,
      archived: false,
      date: new Date(2022, 5, 12),
    },
    {
      id: nanoid(),
      title: "Do react exercise",
      completed: false,
      archived: false,
      date: new Date(2022, 5, 12),
    },
  ]);

  function toggleCompleted(id) {
    const completedItems = items.map((item) => {
      if (item.id === id) {
        return { ...item, completed: !item.completed };
      } else {
        return item;
      }
    });
    setItems(completedItems);
  }

  function toggleArchived(id) {
    const archivedItems = items.map((item) => {
      if (item.id === id) {
        return { ...item, archived: !item.archived };
      } else {
        return item;
      }
    });
    setItems(archivedItems);
  }

  function deleteItems(id) {
    const filteredItems = items.filter((item) => item.id !== id);
    setItems(filteredItems);
  }

  const addNewItem = (items) => {
    setItems((prevItem) => {
      return [items, ...prevItem];
    });
  };

  // function addNewItem(newTitle) {
  //   const newItems = {
  //     id: nanoid(),
  //     title: newTitle,
  //     completed: false,
  //     archived: false,
  //     date: new Date(),
  //   };
  //   setItems([...items, newItems]);
  // }

  // const NewExpense = (props) => {
  //   const saveExpenseDataHandler = (enteredExpenseData) => {
  //     const expenseData = {
  //       ...enteredExpenseData,
  //       id: Math.random().toString()
  //     };
  //     props.onAddExpense(expenseData);
  //   };

  return (
    <>
      <Header></Header>
      <NewToDo addNewItem={addNewItem}></NewToDo>
      {items
        .filter((item) => !item.archived)
        .map((item) => (
          <ToDo
            key={item.id}
            title={item.title}
            completed={item.completed}
            archived={item.archived}
            date={item.date}
            toggleCompleted={() => toggleCompleted(item.id)}
            toggleArchived={() => toggleArchived(item.id)}
            deleteItems={() => deleteItems(item.id)}
          ></ToDo>
        ))}

      {/* <Footer></Footer> */}
    </>
  );
}

export default Main;
