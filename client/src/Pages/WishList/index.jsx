import React from "react";
import Suggestions from "../../Components/Suggestions";
import Discount from "../../Sections/Discount";
import { Container } from "../../global/style";
import CartItems from "../../Components/CartItems";

export default function WishList() {
  return (
    <>
      <Container>
        <CartItems />
        <Suggestions />
        <Discount />
      </Container>
    </>
  );
}
