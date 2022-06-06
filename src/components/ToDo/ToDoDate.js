import styled from "styled-components";

function ToDoDate({ date }) {
  const month = date.toLocaleString("de-DE", { month: "long" });
  const day = date.toLocaleString("de-DE", { day: "2-digit" });
  const year = date.getFullYear();

  return (
    <ToDoDateContainer>
      <p>Created</p>
      <ToDoDateDay>{day}.</ToDoDateDay>
      <ToDoDateMonth>{month}</ToDoDateMonth>
      <ToDoDateYear>{year}</ToDoDateYear>
    </ToDoDateContainer>
  );
}

export default ToDoDate;

const ToDoDateContainer = styled.section`
  display: flex;
  flex-direction: column;
  width: 5.5rem;
  height: 5.5rem;
  border: 1px solid #ececec;
  background-color: white;
  color: #0081a7;
  padding: 1em;
  border-radius: 12px;
  align-items: center;
  justify-content: center;
`;

const ToDoDateMonth = styled.section`
  font-size: 0.75rem;
  font-weight: bold;
`;

const ToDoDateYear = styled.section`
  font-size: 0.75rem;
`;

const ToDoDateDay = styled.section`
  font-size: 1rem;
  font-weight: bold;
`;
