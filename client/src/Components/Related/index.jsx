import React from "react";
import styled from "styled-components";
import { RelatedItems } from "../../mock/data";

import { Information } from "../MayLike";
import { FlexDiv, FormTitle } from "../SignInForm/style";

export const RelatedDiv = styled.div`
  width: 100%;
  padding: 0 1rem;
  padding-bottom: 1rem;
  background-color: ${(props) => props.theme.pallet.mainBackdround};
  border: 1px solid ${(props) => props.theme.pallet.Lines};
  border-radius: 0.5rem;
  margin-top: 1rem;
  & img {
    height: 11.2rem;
    width: 97%;
    margin: 0.5rem 0;
  }
  & p {
    padding-right: 10%;
  }
`;
export const ImageDiv = styled.div`
  background-color: #eeeeee;
  border-radius: 0.5rem;
  width: 9rem;
  padding: 0.5rem;
  margin: 0.3rem 0;
`;
export default function Related() {
  return (
    <RelatedDiv>
      <FormTitle>Related products</FormTitle>
      <FlexDiv className="justify">
        {RelatedItems.map((item) => (
          <div key={item.id}>
            <img src={item.img} alt="itemImg" />
            <Information className="Name">{item.title}</Information>
            <Information className="price">{item.price}</Information>
          </div>
        ))}
      </FlexDiv>
    </RelatedDiv>
  );
}
