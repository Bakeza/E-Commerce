import React from "react";
import styled from "styled-components";

const RecomItem = styled.div`
  height: 19.3rem;
  width: 14.5rem;
  border: 1px solid ${(props) => props.theme.pallet.Lines};
  border-radius: 0.3rem;
  background-color: ${(props) => props.theme.pallet.mainBackdround};
`;
const ItemImg = styled.img`
  display: flex;
  justify-content: center;
  margin: auto;
`;
const Price = styled.p`
  font-size: 1rem;
  font-weight: 500;
  color:${(props) => props.theme.pallet.primaryText};
  padding-top: 0.5rem;
  padding-left: 0.7rem;
`;

export const Descrption = styled.p`
  font-size: 1rem;
  color: ${(props) => props.theme.pallet.secondaryText};
  padding: 0.7rem;
  padding-right: 2rem;
`;

export default function RecommendedItem(props) {
  return (
    <RecomItem>
      <ItemImg src={props.itemSrc} alt="item" />
      <Price>{props.Price}</Price>
      <Descrption>{props.Descrption}</Descrption>
    </RecomItem>
  );
}
