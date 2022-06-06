import styled from "styled-components";

function ToDoDate({ date }) {
  const month = date.toLocaleString("de-DE", { month: "long" });
  const day = date.toLocaleString("de-DE", { day: "2-digit" });
  //   const year = date.getFullYear;

  return (
    <ToDoDateContainer>
      <ToDoDateCreated>Created</ToDoDateCreated>
      <ToDoDateDate>
        <ToDoDateDay>{day}.</ToDoDateDay>
        <ToDoDateMonth>{month}</ToDoDateMonth>
        {/* <ToDoDateYear>{year}</ToDoDateYear> */}
      </ToDoDateDate>
    </ToDoDateContainer>
  );
}

export default ToDoDate;

const ToDoDateContainer = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  background-color: white;
  color: #0081a7;
  border-radius: 6px;
`;

const ToDoDateCreated = styled.p`
  font-size: 1rem;
  margin-right: 1em;
`;

const ToDoDateDate = styled.section`
  align-self: center;
  justify-content: center;
`;

const ToDoDateMonth = styled.section`
  font-size: 1rem;
  font-weight: bold;
`;

// const ToDoDateYear = styled.section`
//   font-size: 0.75rem;
// `;

const ToDoDateDay = styled.section`
  font-size: 1rem;
  font-weight: bold;
`;
