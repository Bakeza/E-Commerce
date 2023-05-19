import React from "react";
import styled from "styled-components";

import SubscribeForm from "../../Components/SubscribeForm";

const SubscribeSec = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 12rem;
  background-color: ${(props) => props.theme.pallet.secondaryBackdround};
`;
const SubsTitle = styled.h4`
  color: ${(props) => props.theme.pallet.primaryText};
  text-align: center;
  font-size: 1.2rem;
`;
const SubsBody = styled.p`
  text-align: center;
  font-size: 1rem;
  padding: 0.3rem 0;
  color: #606060;
`;
export default function Subscribe() {
  return (
    <SubscribeSec>
      <SubsTitle>Subscribe on our newsletter</SubsTitle>
      <SubsBody>
        Get daily news on upcoming offers from many suppliers all over the world
      </SubsBody>
      <SubscribeForm />
    </SubscribeSec>
  );
}
