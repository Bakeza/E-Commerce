import React from "react";
import { Div } from "../Region/style";

export default function Category(props) {
  return (
    <Div
      className={
        props.upRad
          ? "category upRad"
          : "category" && props.downRad
          ? "category downRad"
          : "category"
      }
    >
      <Div className="Text CatPrice">
        <h4>{props.type}</h4>
        <p>{props.from}</p>
      </Div>
      <img src={props.src} alt="img" />
    </Div>
  );
}
