import { NavLink } from "react-router-dom";
import styled from "styled-components";

function Footer() {
  return (
    <FooterContainer>
      <NavItem to="/">ToDo</NavItem>
      <NavItem to="/Archive">Archive</NavItem>
      <NavItem to="/Random">Random</NavItem>
    </FooterContainer>
  );
}

export default Footer;

const FooterContainer = styled.section`
  display: flex;
  justify-content: space-around;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  background-color: #011c27;
  position: fixed;
  bottom: 0;
  width: 100%;
`;

const NavItem = styled(NavLink)`
  padding: 1em 0;
  font-size: 1.2rem;
  font-weight: bold;
  list-style: none;
  text-decoration: none;
  color: white;
  transition: 300ms ease;
  &:hover {
    color: #f1356d;
    transform: scale(1.1);
  }
  &.active {
    transform: scale(1.1);
    color: #f1356d;
  }
`;
