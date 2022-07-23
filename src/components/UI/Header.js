import styled from "styled-components";

function Header({ heading }) {
  return (
    <TitleContainer>
      <Title>{heading}</Title>
    </TitleContainer>
  );
}

export default Header;

const TitleContainer = styled.section`
  background-color: #011c27;
  padding: 1em;
  height: 3em;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;

const Title = styled.h1`
  font-size: 2rem;
  color: white;
`;
