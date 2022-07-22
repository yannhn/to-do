import { useState } from "react";
import styled from "styled-components";

// import ToDoDate from "./ToDoDate";

function ToDo({
  id,
  title,
  completed,
  archived,
  toggleCompleted,
  toggleArchived,
  deleteItems,
  editItem,
  editTask,
}) {
  const [isEditing, setIsEditing] = useState(false);

  const [newTitle, setNewTitle] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    editTask(id, newTitle);
    setIsEditing(false);
  };
  return (
    <>
      {isEditing ? (
        <form onSubmit={handleSubmit}>
          <section>
            <label>CHANGE</label>
            <input
              onChange={(event) => setNewTitle(event.target.value)}
            ></input>
          </section>
          <section>
            <button
              type="button"
              onClick={() => {
                setIsEditing(false);
                setNewTitle("");
              }}
            >
              CANCEL
            </button>
            <button type="submit">SAVE</button>
          </section>
        </form>
      ) : (
        <ToDoContainer completed={completed}>
          <section completed={completed}>
            <section>{/* <ToDoDate date={date}></ToDoDate> */}</section>
            <section archived={archived}>
              <input type="checkbox" onClick={toggleCompleted}></input>
            </section>
            <h2 completed={completed}>{title}</h2>
            <HideButton archived={archived}>
              {completed ? (
                <section>
                  <button onClick={toggleCompleted}>Uncompleted</button>
                  <button type="button" onClick={toggleArchived}>
                    archive
                  </button>
                </section>
              ) : (
                <section completed={completed}>
                  <button onClick={toggleCompleted}>Complete</button>
                  <button onClick={() => setIsEditing(true)}>edit</button>
                  <button type="button" onClick={deleteItems}>
                    delete
                  </button>
                </section>
              )}
            </HideButton>
          </section>
        </ToDoContainer>
      )}
    </>
  );
}

export default ToDo;

const ToDoContainer = styled.section`
  border-radius: 5px;
  background-color: ${(props) => (props.completed ? "#f1356d" : "#011c27")};
  color: white;
  font-size: 1.4rem;
  font-weight: bold;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0 2em;
  margin: 1em 4em;
  &:hover {
    box-shadow: 1px 3px 5px rgba(0, 0, 0, 0.1);
  }
`;

const HideButton = styled.section`
  display: ${(props) => (props.archived ? "none" : "")};
`;

// const ToDoCheckbox = styled.section`
//   display: ${(props) => (props.archived ? "none" : "")};
//   transform: scale(2);
// `;

// const ToDoTitle = styled.h2`
//   text-decoration: ${(props) => (props.completed ? "line-through" : "")};
// `;
