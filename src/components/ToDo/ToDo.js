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
    <ToDoContainer>
      <section>
        <ToDoDate date={date}></ToDoDate>
      </section>
      <section>
        <button type="button" onClick={toggleCompleted}>
          {completed ? "completed" : "uncompleted"}
        </button>
      </section>
      <h2>{title}</h2>
      <section>
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
      </section>
    </ToDoContainer>
  );
}

export default ToDo;

const ToDoContainer = styled.section`
  background-color: lightblue;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 2em 2em;
`;
