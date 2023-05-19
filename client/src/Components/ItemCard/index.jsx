import React from "react";

import favorite from "../../Assetse/favorite.png";
import stars from "../../Assetse/stars.png";

import { BsFillCartPlusFill } from "react-icons/bs";
import { BsFillCartDashFill } from "react-icons/bs";

import { CartIcon } from "../ElectronicsItem";
import { Dot } from "../ShowItem/style";
import { FlexP, ItemDiv, ItemP, Rate } from "./style";

import { useCartContext } from "../../Context/CartContext";

export default function ItemCard({ item }) {
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
    <ItemDiv>
      <img src={item.src} alt="itemImage" />
      <div>
        <ItemP className="name">{item.name}</ItemP>
        <ItemP className="price">{item.price}</ItemP>
        <FlexP>
          <Rate src={stars} alt="rate" />
          <ItemP className="rate">7.5</ItemP>
          <Dot />
          <ItemP className="orders">{item.order}</ItemP>
          <Dot />
          <ItemP className="free">Free Shipping</ItemP>
        </FlexP>
        <ItemP className="desc">{item.description}</ItemP>
        <ItemP className="view">View details</ItemP>
      </div>
      <CartIcon onClick={handleBuy}>
        {ExistInCart() ? <BsFillCartDashFill /> : <BsFillCartPlusFill />}
      </CartIcon>
      <Rate className="fav" src={favorite} alt="favoriteIcon" />
    </ItemDiv>
  );
}
