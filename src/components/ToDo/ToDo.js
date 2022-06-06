import styled from "styled-components";
import ToDoDate from "./ToDoDate";

function ToDo({
  id,
  title,
  completed,
  archived,
  date,
  toggleCompleted,
  toggleArchived,
  deleteItems,
}) {
  return (
    <ToDoContainer completed={completed}>
      <section>
        <ToDoDate date={date}></ToDoDate>
      </section>
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
            <button>edit</button>
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
  border-radius: 10px;
  background-color: ${(props) => (props.completed ? "#f07167" : "#0081a7")};
  color: white;
  font-size: 1.4rem;
  font-weight: bold;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1em 2em;
  margin: 2em 4em;
`;

const HideButton = styled.section`
  display: ${(props) => (props.archived ? "none" : "")};
`;

const ToDoCheckbox = styled.section`
  display: ${(props) => (props.archived ? "none" : "")};
`;

const ToDoTitle = styled.h2`
  text-decoration: ${(props) => (props.completed ? "line-through" : "")};
`;
