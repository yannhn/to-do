import styled from "styled-components";

function RandomToDo({ shuffle }) {
  return (
    <RandomButtonContainer>
      <RandomButton type="Button" onClick={shuffle}>
        Let's shuffle
      </RandomButton>
      <RandomText>Your random ToDo</RandomText>
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
  border-bottom: 1px solid black;
`;

const RandomButton = styled.button`
  padding: 1em 2em;
  border: none;
  border-radius: 10px;
  margin: 4em auto 2em;
  background-color: #72a98f;
  color: white;
  font-weight: bold;
  font-size: 1rem;
  cursor: pointer;
  transition: 300ms ease;

  &:hover {
    background-color: #5d987c;
  }
  &:active {
    background-color: #bad;
  }
`;
