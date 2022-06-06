import { NavLink } from "react-router-dom";
import styled from "styled-components";

function Footer() {
  return (
    <FooterContainer>
      <NavItem to="/">Home</NavItem>
      <NavItem to="/Archive">Archive</NavItem>
      <NavItem to="/Random">Random</NavItem>
    </FooterContainer>
  );
}

export default Footer;

const NavItem = styled(NavLink)`
  padding: 1em 0;
  font-size: 1.6rem;
  font-weight: bold;
  list-style: none;
  text-decoration: none;
  color: white;
  transition: 500ms ease;
  &:hover {
    transform: scale(1.1);
    color: crimson;
  }
  &.active {
    transform: scale(1.1);
    color: crimson;
  }
`;

const FooterContainer = styled.section`
  display: flex;
  justify-content: space-around;
  background-color: #3d405b;
  position: fixed;
  bottom: 0;
  width: 100%;
`;
