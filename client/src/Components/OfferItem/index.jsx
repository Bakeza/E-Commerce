import React from "react";
import { ItemImg, ItemName, Offer, Price } from "./style";

export default function OfferItem(props) {
  return (
    <Offer className={props.lastItem ? "lastItem" : ""}>
      <ItemImg src={props.src} alt="ItemImage" />
      <ItemName>{props.name}</ItemName>
      <Price>
        <p>{props.price}</p>
      </Price>
    </Offer>
  );
}
