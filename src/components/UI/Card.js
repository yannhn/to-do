import styled from "styled-components";

export default function Card({ children }) {
  return <CardContainer>{children}</CardContainer>;
}

const CardContainer = styled.section`
  border-radius: 5px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  padding: 0.6em 0.4em;
  margin: 1em 1em 5em;
`;
