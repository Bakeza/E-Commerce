import React from "react";

import { HR } from "../ShowItem/style";
import { FlexDiv } from "../SignInForm/style";
import { ItemP } from "../ItemCard/style";
import {
  ApplyButton,
  Checkout,
  CouponContainer,
  CouponDiv,
  TotalPrice,
} from "./style";

import payment1 from "../../Assetse/payment1.png";
import payment2 from "../../Assetse/payment2.png";
import payment3 from "../../Assetse/payment3.png";
import payment4 from "../../Assetse/payment4.png";
import payment5 from "../../Assetse/applePay.png";

export default function Coupon() {
  return (
    <CouponContainer>
      <CouponDiv>
        <p>Have a coupon?</p>
        <form>
          <input placeholder="Add coupon" />
          <ApplyButton>Apply</ApplyButton>
        </form>
      </CouponDiv>
      <TotalPrice>
        <FlexDiv className="justify">
          <ItemP className="elec">Subtotal:</ItemP>
          <ItemP className="elec">$1403.97</ItemP>
        </FlexDiv>
        <FlexDiv className="justify">
          <ItemP>Discount:</ItemP>
          <ItemP style={{ color: "red" }}>- $60.00</ItemP>
        </FlexDiv>
        <FlexDiv className="justify">
          <ItemP>Tax:</ItemP>
          <ItemP className="free">+ $14.00</ItemP>
        </FlexDiv>
        <HR />
        <FlexDiv className="justify" style={{ paddingTop: "0.7rem" }}>
          <h4>Total:</h4>
          <ItemP className="price">$1357.97</ItemP>
        </FlexDiv>
        <Checkout>Checkout</Checkout>
        <FlexDiv className="justify" style={{ padding: "0 10%" }}>
          <img src={payment1} alt="payment" />
          <img src={payment2} alt="payment" />
          <img src={payment3} alt="payment" />
          <img src={payment4} alt="payment" />
          <img src={payment5} alt="payment" />
        </FlexDiv>
      </TotalPrice>
    </CouponContainer>
  );
}
