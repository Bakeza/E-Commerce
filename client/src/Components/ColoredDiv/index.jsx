import React from "react";
import styled from "styled-components";

const Colored = styled.div`
  height: 6rem;
  width: 12.7rem;
  padding: 1rem;
  padding-right: 3.2rem;
  font-size: 1rem;
  color: white;
  background-color: ${(props) => props.background};
  margin: 0.5rem 1rem;
  border-radius: 0.5rem;
`;
export default function ColoredDiv(props) {
  return <Colored background={props.background}>{props.content}</Colored>;
}
