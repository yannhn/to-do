import styled from "styled-components";

function Header() {
  return (
    <TitleContainer>
      <Title>ToDo App</Title>
    </TitleContainer>
  );
}

export default Header;

const TitleContainer = styled.section`
  background-color: lightblue;
  padding: 1em;
`;

const Title = styled.h1`
  font-size: 2rem;
`;
