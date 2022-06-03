import styled from "styled-components";

function Header() {
  return (
    <TitleContainer>
      <Title>To-Do App</Title>
    </TitleContainer>
  );
}

export default Header;

const TitleContainer = styled.section`
  background-color: #2a2d34;
  padding: 4em;
  position: relative;
`;

const Title = styled.h1`
  color: #fdfffc;
  font-size: 2rem;
  position: absolute;
  top: 35%;
`;
