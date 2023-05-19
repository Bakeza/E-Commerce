import React from "react";
import styled from "styled-components";

import Logo from "../Logo";
import Search from "../Search";

import profileSrc from "../../Assetse/Profile.png";
import MessageSrc from "../../Assetse/Message.png";
import HeartSrc from "../../Assetse/Heart.png";
import cartSrc from "../../Assetse/cart.png";
import Toggle from "../Toggle";
import { Link } from "react-router-dom";
import LogoutButt from "../LogoutButt";

export const Navigation = styled.nav`
  min-height: 3rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 6%;
  background-color: ${(props) => props.theme.pallet.mainBackdround};
  border-bottom: 1px solid ${(props) => props.theme.pallet.Lines};
`;
export const NavUl = styled.ul`
  display: flex;
  list-style: none;
`;
export const NavItem = styled.li`
  margin-right: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  color: ${(props) => props.theme.pallet.primaryText};
  font-weight: 500;
  cursor: pointer;
`;
const NavName = styled.p`
  font-size: 0.7rem;
  text-align: center;
  padding-top: 0.3rem;
  color: ${(props) => props.theme.pallet.secondaryText};
`;
export default function NavBar() {
  return (
    <Navigation>
      <Logo />
      <Search />
      <NavUl>
        <NavItem>
          <Toggle />
        </NavItem>
        <NavItem>
          <Link to="/">
            <img src={profileSrc} alt="profile" />
          </Link>
          <NavName>Profile</NavName>
        </NavItem>
        <NavItem>
          <img src={MessageSrc} alt="Messgae" />
          <NavName>Message</NavName>
        </NavItem>
        <NavItem>
          <Link to="/item">
            <img src={HeartSrc} alt="Heart" />
          </Link>
          <NavName>Orders</NavName>
        </NavItem>
        <NavItem>
          <Link to="/cart">
            <img src={cartSrc} alt="cart" />
          </Link>
          <NavName>My cart</NavName>
        </NavItem>
        <NavItem>
          <LogoutButt />
          <NavName>Logout</NavName>
        </NavItem>
      </NavUl>
    </Navigation>
  );
}
