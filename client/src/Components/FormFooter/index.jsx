import React from "react";
import styled from "styled-components";

import { NavItem, NavUl } from "../NavBar";
import { Flex } from "../../Sections/Footer/style";

import payment1 from "../../Assetse/payment1.png";
import payment2 from "../../Assetse/payment2.png";
import payment3 from "../../Assetse/payment3.png";
import payment4 from "../../Assetse/payment4.png";

const Footer = styled.footer`
  width: 100%;
  height: 8%;
  padding: 0 6%;
  position: fixed;
  bottom: 0;
  display: flex;
  justify-content: space-between;
  background-color: ${(props) => props.theme.pallet.mainBackdround};
`;
const FooterLi = styled(NavItem)`
  cursor: pointer;
  color: ${(props) => props.theme.pallet.secondaryText};
  font-weight: 400;
  &:hover {
    color: ${(props) => props.theme.pallet.primaryText};
  }
`;
const FooterFlex = styled(Flex)`
  width: 12rem;
  justify-content: space-between;
`;
export default function FormFooter() {
  return (
    <Footer>
      <FooterFlex>
        <img src={payment1} alt="payment" />
        <img src={payment2} alt="payment" />
        <img src={payment3} alt="payment" />
        <img src={payment4} alt="payment" />
      </FooterFlex>
      <NavUl>
        <FooterLi>Support</FooterLi>
        <FooterLi>Privacy & Cookies</FooterLi>
        <FooterLi>Accessibility</FooterLi>
      </NavUl>
    </Footer>
  );
}
