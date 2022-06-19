import styled from "styled-components";
// import ToDoDate from "./ToDoDate";

// FIX
// FIXME: Fix date-picker

function ToDo({
  title,
  completed,
  archived,
  toggleCompleted,
  toggleArchived,
  deleteItems,
  editItems,
}) {
  return (
    <ToDoContainer completed={completed}>
      <section>{/* <ToDoDate date={date}></ToDoDate> */}</section>
      <ToDoCheckbox archived={archived}>
        <input type="checkbox" onClick={toggleCompleted}></input>
      </ToDoCheckbox>
      <ToDoTitle completed={completed}>{title}</ToDoTitle>
      <HideButton archived={archived}>
        {completed ? (
          <button type="button" onClick={toggleArchived}>
            archive
          </button>
        ) : (
          <section>
            <button onClick={editItems}>edit</button>
            <button type="button" onClick={deleteItems}>
              delete
            </button>
          </section>
        )}
      </HideButton>
    </ToDoContainer>
  );
}

export default ToDo;

const ToDoContainer = styled.section`
  border-radius: 5px;
  background-color: ${(props) => (props.completed ? "#f1356d" : "#347FC4")};
  color: white;
  font-size: 1.4rem;
  font-weight: bold;
  display: flex;
  justify-content: space-between;
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

const ToDoCheckbox = styled.section`
  display: ${(props) => (props.archived ? "none" : "")};
  transform: scale(2);
`;

const ToDoTitle = styled.h2`
  text-decoration: ${(props) => (props.completed ? "line-through" : "")};
`;
