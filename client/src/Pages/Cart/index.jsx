import React from "react";

import CartItems from "../../Components/CartItems";
import Coupon from "../../Components/Coupon";
import PaymentServices from "../../Components/PaymentServices";
import { FlexDiv } from "../../Components/SignInForm/style";
import Suggestions from "../../Components/Suggestions";
import { useCartContext } from "../../Context/CartContext";
import { Container } from "../../global/style";
import Discount from "../../Sections/Discount";
import { SectionTitle } from "../../Sections/Recommended";

export default function Cart() {
  const { state } = useCartContext();
  return (
    <>
      <Container>
      <SectionTitle className="normal">My cart ({state.count})</SectionTitle>
        <FlexDiv className="start">
          <CartItems />
          <Coupon />
        </FlexDiv>
        <PaymentServices />
        <Suggestions />
        <Discount />
      </Container>
    </>
  );
}
