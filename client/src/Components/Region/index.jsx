import React from "react";
import { Div } from "./style";

export default function Region(props) {
  return (
    <Div className="container">
      <img src={props.src} alt="country" />
      <Div className="Text">
        <h4>{props.country}</h4>
        <p>{props.site}</p>
      </Div>
    </Div>
  );
}
