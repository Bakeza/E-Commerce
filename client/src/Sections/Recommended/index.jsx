import React from "react";
import RecommendedItem from "../../Components/RecommendedItem";
import styled from "styled-components";

import { recommendedItems } from "../../mock/data";

export const SectionTitle = styled.h3`
  font-size: 1.7rem;
  color: ${(props) => props.theme.pallet.primaryText};
  padding: 0.8rem 0;
  padding-left: 2.1rem;
  &.normal{
    padding-left: 0;
  }
`;
export const RecommendedContaner = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1.7rem;
  margin: auto;
  padding: 1.5rem 0;
`;
export default function Recommended() {
  return (
    <>
      <SectionTitle>Recommended items</SectionTitle>
      <RecommendedContaner>
        {recommendedItems.map((item)=>(
                  <RecommendedItem
                  key={item.id}
                  itemSrc={item.img}
                  Price={item.price}
                  Descrption={item.description}
                />
        ))
        }
      </RecommendedContaner>
    </>
  );
}
