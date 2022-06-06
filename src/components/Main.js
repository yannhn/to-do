import Header from "./UI/Header";
// import Footer from "./UI/Footer";
import ToDo from "./ToDo/ToDo";
import { useState } from "react";
import { nanoid } from "nanoid";

function Main() {
  const [items, setItems] = useState([
    { id: nanoid(), title: "Do the dishes", completed: true, archived: false },
    { id: nanoid(), title: "Feed the dog", completed: false, archived: false },
    { id: nanoid(), title: "Cook dinner", completed: false, archived: false },
    {
      id: nanoid(),
      title: "Do react exercise",
      completed: false,
      archived: false,
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

  return (
    <>
      <Header></Header>
      {items
        .filter((item) => !item.archived)
        .map((item) => (
          <ToDo
            key={item.id}
            title={item.title}
            completed={item.completed}
            archived={item.archived}
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
