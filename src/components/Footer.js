import styled from "styled-components";

function Footer() {
  return (
    <FooterContainer>
      <FooterLinks>Home</FooterLinks>
      <FooterLinks>Archive</FooterLinks>
      <FooterLinks>Random</FooterLinks>
    </FooterContainer>
  );
}

export default Footer;

const FooterContainer = styled.section`
  background-color: #2a2d34;
  padding: 1em;
  position: fixed;
  bottom: 0;
  width: 100%;
`;

const FooterLinks = styled.li`
  padding: 1em 0;
  font-size: 1.6rem;
  font-weight: bold;
  list-style: none;
  display: inline-block;
  text-decoration: none;
  color: white;
  cursor: pointer;
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
