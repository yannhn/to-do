import styled from "styled-components";

function RandomToDo({ shuffle }) {
  return (
    <RandomButtonContainer>
      <RandomButton type="Button" onClick={shuffle}>
        Shuffle
      </RandomButton>
      <RandomText>Your random ToDo:</RandomText>
    </RandomButtonContainer>
  );
}

export default RandomToDo;

const RandomButtonContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const RandomText = styled.h2`
  font-size: 2rem;
  text-align: center;
`;

const RandomButton = styled.button`
  padding: 2em 4em;
  border: none;
  border-radius: 40px;
  margin: 2em auto;
  background-color: #17c3b2;
  color: white;
  font-weight: bold;
  font-size: 1rem;
  cursor: pointer;
  transition: 500ms ease;

  &:hover {
    background-color: #00afb9;
  }
`;
