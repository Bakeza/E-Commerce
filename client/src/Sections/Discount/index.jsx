import React from "react";
import styled from "styled-components";

import { SubsButton } from "../../Components/SubscribeForm";

import Blue from '../../Assetse/Blue.png'

export const DiscountDiv = styled.div`
  width: 100%;
  height: 8rem;
  border-radius: 0.5rem;
  padding: 2rem;
  margin: 1rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  background-image: url(${Blue});
  background-size: cover;
`;
export const Title = styled.h4`
  font-size: 1.5rem;
  font-weight: 600;
`;

export default function Discount() {
  return (
      <DiscountDiv>
        <div>
          <Title>Super discount on more than 100 USD</Title>
          <p>Have you ever finally just write dummy info</p>
        </div>
        <SubsButton className="orang">Shop now</SubsButton>
      </DiscountDiv>
  );
}
