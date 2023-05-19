import React from "react";
import styled from "styled-components";

import quote from "../../Assetse/quote.png";
import QuoteForm from "../../Components/QuoteForm";

const QuoteContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 95%;
  margin: 2rem auto;
  background-image: url(${quote});
  background-size: cover;
  border: 1px solid ${(props) => props.theme.pallet.Lines};
  border-radius: 0.5rem;
`;
const InnerContainer = styled.div`
  width: 40%;
  padding: 3rem;
  color: ${(props) => props.theme.pallet.mainBackdround};
  & > h3 {
    font-size: 2rem;
  }
  & > p {
    font-size: 1rem;
    padding: 1rem 0;
  }
`;

export default function QuoteRequest() {
  return (
    <>
      <QuoteContainer>
        <InnerContainer>
          <h3>An easy way to send requests to all suppliers</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt.
          </p>
        </InnerContainer>
        <QuoteForm />
      </QuoteContainer>
    </>
  );
}
