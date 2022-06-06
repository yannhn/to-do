import styled from "styled-components";
import "./HeaderImg";
// import { HeaderImg } from "./HeaderImg";

function Header() {
  return (
    <TitleContainer>
      <Title>
        ToDo App
        {/* <HeaderImg /> */}
      </Title>
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
