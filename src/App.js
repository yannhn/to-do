import Header from "./components/UI/Header";
import Footer from "./components/UI/Footer";
import ToDo from "./components/ToDo/ToDo";
import NewToDo from "./components/NewToDo/NewToDo";
import RandomToDo from "./components/ToDo/RandomToDo";

// import InputNewToDo from "./ToDo/InputNewToDo";

import useLocalStorage from "./common/useLocalStorage";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Card from "./components/UI/Card";

// TODO
// TODO: EDIT ITEMS

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

  function addNewItem(items) {
    setItems((prevItem) => {
      return [items, ...prevItem];
    });
  }

  function randomItems() {
    // filter archived items
    // creates new Array with filtered items
    const filteredItems = items.filter((item) => !item.archived);

    // within the filtered new Array set the randomizer
    const randomArray = Math.floor(Math.random() * filteredItems.length);

    // run randomArray into filteredItems-Array
    const randomItem = filteredItems[randomArray];

    // setRandom-state filled with randomItem
    setRandom(randomItem);
  }

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header heading={"ToDo-App"}></Header>
              <NewToDo addNewItem={addNewItem}></NewToDo>
              <Card>
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
              </Card>
            </>
          }
        ></Route>
        <Route
          path="/Archive"
          element={
            <>
              <Header heading={"Archived ToDos"}></Header>
              <Card>
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
              </Card>
            </>
          }
        ></Route>
        <Route
          path="/Random"
          element={
            <>
              <Header heading={"Random ToDos"}></Header>
              <RandomToDo shuffle={randomItems}></RandomToDo>

              <ToDo
                key={random.id}
                title={random.title}
                completed={random.completed}
                archived={random.archived}
                toggleCompleted={() => toggleCompleted(random.id)}
                toggleArchived={() => toggleArchived(random.id)}
                deleteItems={() => deleteItems(random.id)}
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
