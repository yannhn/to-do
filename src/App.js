import { useState } from "react";
import "./App.css";
import Header from "./components/Header.js";
import ToDo from "./components/ToDo";
import { nanoid } from "nanoid";

function App() {
  const [items, setItems] = useState([
    {
      id: nanoid(),
      name: "Do the dishes",
      isCompleted: true,
      isArchived: false,
    },
    {
      id: nanoid(),
      name: "Learn react",
      isCompleted: true,
      isArchived: false,
    },
    {
      id: nanoid(),
      name: "Do the laundry",
      isCompleted: true,
      isArchived: false,
    },
    {
      id: nanoid(),
      name: "Go for a walk",
      isCompleted: true,
      isArchived: false,
    },
  ]);

  function toggleComplete(id) {
    const toggleCompleted = items.map((item) => {
      if (id === item.id) {
        return { ...item, isCompleted: !item.isCompleted };
      }
      return item;
    });
    setItems(toggleCompleted);
  }

  function toggleArchive(id) {
    const toggleArchived = items.map((item) => {
      if (id === item.id) {
        return { ...item, isArchived: !item.isArchived };
      } else {
        return item;
      }
    });
    setItems(toggleArchived);
  }

  function deleteToDo(id) {
    const filteredTodos = items.filter((item) => item.id !== id);
    setItems(filteredTodos);
  }

  return (
    <div className="App">
      <Header></Header>
      {items.map((item) => (
        <ToDo
          key={item.id}
          name={item.name}
          isCompleted={item.isCompleted}
          isArchived={item.isArchived}
          toggleComplete={() => toggleComplete(item.id)}
          deleteToDo={() => deleteToDo(item.id)}
          archiveToDo={() => toggleArchive(item.id)}
        ></ToDo>
      ))}
    </div>
  );
}

export default App;
