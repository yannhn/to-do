import styled from "styled-components";

function ToDo() {
  return (
    <ToDoContainer>
      <h2>To Do</h2>
      <section>
        <button>uncomplete/completed</button>
        <button>archive/delete</button>
      </section>
    </ToDoContainer>
  );
}

export default ToDo;

const ToDoContainer = styled.section`
  background-color: lightblue;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 2em 2em;
`;
