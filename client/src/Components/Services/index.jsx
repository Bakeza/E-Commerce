import React from "react";
import { ServicesIcon, ServicesImg, ServicesItem, ServicesName } from "./style";

export default function Services(props) {
  return (
    <ServicesItem>
      <ServicesImg src={props.src} alt="ServicesImg" />
      <ServicesIcon>{props.icon}</ServicesIcon>
      <ServicesName>{props.name}</ServicesName>
    </ServicesItem>
  );
}
