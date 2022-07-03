import styled from "styled-components";

export default function Card({ children }) {
  return <CardContainer>{children}</CardContainer>;
}

const CardContainer = styled.section`
  border-radius: 12px;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.25);
  padding: 0 2em;
  margin: 1em 4em;
`;
