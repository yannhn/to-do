import styled from "styled-components";

function ToDo({
  key,
  name,
  isCompleted,
  isArchived,
  toggleComplete,
  deleteToDo,
  archiveToDo,
}) {
  return (
    <ToDoContainer>
      <input type="checkbox" onClick={toggleComplete}></input>
      <ToDoTitle variant={isCompleted}>{name}</ToDoTitle>
      <ToDoRight>
        {isCompleted ? (
          <button onClick={archiveToDo}>archive</button>
        ) : (
          <button onClick={deleteToDo}>delete</button>
        )}
      </ToDoRight>
    </ToDoContainer>
  );
}

export default ToDo;

const ToDoContainer = styled.section`
  background-color: #628395;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 2em;
  /* box-shadow: rgba(98, 131, 149, 0.4) -5px 5px,
    rgba(98, 131, 149, 0.3) -10px 10px, rgba(98, 131, 149, 0.2) -15px 15px,
    rgba(98, 131, 149, 0.1) -20px 20px, rgba(98, 131, 149, 0.05) -25px 25px; */
`;

// TODO -> Check label or section

// const ToDoLeft = styled.label`
//   display: flex;
//   flex-direction: row;
// `;

// const ToDoCheckbox = styled.input`
//   border: none;
//   border-radius: 4px;
//   background-color: #ff0000;
//   width: 50px;
//   height: 50px;
//   margin: 1em;
//   cursor: pointer;
// `;

const ToDoTitle = styled.h2`
  color: #fdfffc;
  text-decoration: ${(props) => (props.variant ? "none" : "line-through")};
`;

// const ToDoCheckboxContainer = styled.section`
//   border-left: 2px dotted black;
//   border-radius: 4px;
//   align-self: center;
//   width: 30px;
//   margin: 1em;
// `;

const ToDoRight = styled.section``;

// const ToDoButton = styled.button`
//   padding: 0.6em 2em;
//   border: none;
//   border-radius: 10px;
//   background-color: #fdfffc;
//   color: #628395;
//   font-weight: bold;
//   cursor: pointer;
// `;
