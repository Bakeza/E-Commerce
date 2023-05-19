import React from "react";
import styled from "styled-components";

export const Title = styled.h5`
  font-size: 1rem;
  font-weight: 500;
  color: ${(props) => props.theme.pallet.primaryText};
  padding: 0 1.5rem;
  padding-bottom: 0.5rem;
  &.like {
    padding: 0;
  }
`;
const InfoUl = styled.ul`
  list-style: none;
  padding: 0 1.5rem;
`;

const Info = styled.li`
  font-size: 1rem;
  text-align: left;
  font-weight: 400;
  color: #8b96a5;
  padding: 0.1rem 0;
`;

export default function InfoType(props) {
  return (
    <div>
      <Title>{props.title}</Title>
      <InfoUl>
        <Info>{props.info1}</Info>
        <Info>{props.info2}</Info>
        <Info>{props.info3}</Info>
        <Info>{props.info4}</Info>
      </InfoUl>
    </div>
  );
}
