import React from "react";
import styled from "styled-components";

import { RiLock2Fill } from "react-icons/ri";
import { BsFillChatLeftTextFill } from "react-icons/bs";
import { FaShuttleVan } from "react-icons/fa";

const PaymentServ = styled.div`
  margin: 1.5rem 0;
  width: 70%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  & > div {
    display: flex;
    width: 30%;
  }
`;
const IconDiv = styled.div`
  height: 3.5rem;
  width: 3.5rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  background-color: #e3e8ee;
  color: #979797;
`;
const Info = styled.p`
  font-size: 1rem;
  padding-left: 1.3rem;
  padding-top: 0.3rem;
  &.title {
    color: ${(props) => props.theme.pallet.primaryText};
  }
  &.desc {
    color: #a9acb0;
  }
`;
export default function PaymentServices() {
  return (
    <PaymentServ>
      <div>
        <IconDiv>
          <RiLock2Fill />
        </IconDiv>
        <div>
          <Info className="title">Secure payment</Info>
          <Info className="desc">Have you ever finally just </Info>
        </div>
      </div>
      <div>
        <IconDiv>
          <BsFillChatLeftTextFill />
        </IconDiv>
        <div>
          <Info className="title">Customer support</Info>
          <Info className="desc">Have you ever finally just </Info>
        </div>
      </div>
      <div>
        <IconDiv>
          <FaShuttleVan />
        </IconDiv>
        <div>
          <Info className="title">Free delivery</Info>
          <Info className="desc">Have you ever finally just</Info>
        </div>
      </div>
    </PaymentServ>
  );
}
