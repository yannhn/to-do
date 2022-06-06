import styled from "styled-components";

function ToDo({
  id,
  title,
  completed,
  archived,
  toggleCompleted,
  toggleArchived,
  deleteItems,
}) {
  return (
    <ToDoContainer>
      <section>
        <button onClick={toggleCompleted}>
          {completed ? "completed" : "uncompleted"}
        </button>
      </section>
      <h2>{title}</h2>
      <section>
        {completed ? (
          <button onClick={toggleArchived}>archive</button>
        ) : (
          <button onClick={deleteItems}>delete</button>
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
