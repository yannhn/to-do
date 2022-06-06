import styled from "styled-components";
import "./HeaderImg";
// import { NavLink } from "react-router-dom";
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
  background-color: #011c27;
  padding: 1em;
  position: relative;
  height: 6em;
`;

const Title = styled.h1`
  font-size: 5rem;
  color: #f1356d;
  position: absolute;
  top: -13%;
  left: 5%;
`;
