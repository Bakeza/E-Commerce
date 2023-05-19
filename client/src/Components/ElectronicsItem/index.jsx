import React from "react";
import styled from "styled-components";

import favorite from "../../Assetse/favorite.png";
import { ItemP, Rate } from "../ItemCard/style";
import { Flex } from "../../Sections/Footer/style";
import { BsFillCartPlusFill } from "react-icons/bs";
import { BsFillCartDashFill } from "react-icons/bs";
import { useCartContext } from "../../Context/CartContext";

const ItemDiv = styled.div`
  &.main {
    display: flex;
    flex-direction: column;
    justify-content: center;
    border: 1px solid ${(props) => props.theme.pallet.Lines};
    height: 22rem;
    width: 16.5rem;
    background-color: ${(props) => props.theme.pallet.mainBackdround};
    border-radius: 0.5rem;
  }
  &.info {
    width: 100%;
    height: 40%;
    display: flex;
    padding: 0.5rem 1rem;
    border-top: 1px solid ${(props) => props.theme.pallet.Lines};
  }
`;
export const CartIcon = styled.div`
  height: 2.5rem;
  font-size: 1.6rem;
  color: ${(props) => props.theme.pallet.primaryText};
  padding: 0 0.3rem;
  display: flex;
  align-items: center;
  cursor: pointer;
`;
export default function ElectronicsItem({ item }) {
  const {
    state: { cardItems },
    addToCart,
    removeFromCart,
  } = useCartContext();

  const ExistInCart = () => cardItems.find((product) => product.id === item.id);

  const handleBuy = () => {
    ExistInCart() ? removeFromCart(item.id) : addToCart(item);
  };

  return (
    <ItemDiv className="main">
      <Rate className="center" src={item.src} alt="itemImage" />
      <ItemDiv className="info">
        <div>
          <Flex>
            <ItemP className="elecPrice">{item.price}</ItemP>
          </Flex>
          <Flex>
            <Rate src={item.rate} alt="rate" />
            <ItemP className="rate"> 7.5</ItemP>
          </Flex>
          <ItemP className="elect">{item.name}</ItemP>
        </div>
        <CartIcon onClick={handleBuy}>
          {ExistInCart() ? <BsFillCartDashFill /> : <BsFillCartPlusFill />}
        </CartIcon>
        <Rate className="fav" src={favorite} alt="favoriteIcon" />
      </ItemDiv>
    </ItemDiv>
  );
}
