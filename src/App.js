import Header from "./components/UI/Header";
import Footer from "./components/UI/Footer";
import ToDo from "./components/ToDo/ToDo";
import NewToDo from "./components/ToDo/NewToDo";
import RandomToDo from "./components/ToDo/RandomToDo";

// import InputNewToDo from "./ToDo/InputNewToDo";

import useLocalStorage from "./common/useLocalStorage";
import { useState } from "react";
import { nanoid } from "nanoid";
import { Routes, Route } from "react-router-dom";

function App() {
  const [items, setItems] = useLocalStorage("items", []);
  const [random, setRandom] = useState({});

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

  //TODO: INSERT EDIT ITEMS

  const [editItems, setEditItems] = useState(null);

  // const editItem = (item, newTitle) => {
  //   const editedItem = items.map((item) => {
  //     if (item.id === id) {
  //       return { ...item, item: newTitle };
  //     } else {
  //       return item;
  //     }
  //   });
  //   setItems(editItem);
  // };

  //TODO: FIX RANDOM ELEMENTS

  function randomItem() {
    const randItems = [Math.floor(Math.random() * items.length)];

    setRandom(randItems);
  }

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
      <Routes>
        <Route
          path="/"
          element={
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
            </>
          }
        ></Route>
        <Route
          path="/Archive"
          element={
            <>
              <Header></Header>
              {items
                .filter((item) => item.archived)
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
            </>
          }
        ></Route>
        <Route
          path="/Random"
          element={
            <>
              <Header></Header>
              <RandomToDo shuffle={randomItem}></RandomToDo>
              <ToDo
                key={items[random].id}
                title={items[random].title}
                completed={items[random].completed}
                archived={items[random].archived}
                date={items[random].date}
                toggleCompleted={() => toggleCompleted(items[random].id)}
                toggleArchived={() => toggleArchived(items[random].id)}
                deleteItems={() => deleteItems(items[random].id)}
              ></ToDo>
            </>
          }
        ></Route>
      </Routes>
      <Footer></Footer>
    </>
  );
}

export default App;
