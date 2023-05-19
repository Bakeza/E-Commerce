import React from "react";
import styled from "styled-components";

export const RegButton = styled.button`
  width: 18.5rem;
  padding: 0.6rem;
  margin: 0 auto;
  margin-top: 0.5rem;
  border: none;
  outline: none;
  text-align: center;
  background-color: ${(props) => props.theme.pallet.primary};
  color: white;
  font-size: 16px;
  font-weight: 500;
  border-radius: 0.3rem;
  &.google {
    display: flex;
    background-color: ${(props) => props.theme.pallet.mainBackdround};
    color: #606060;
    box-shadow: 2px 2px 6px #babec1;
    margin: 0.5rem auto;
  }
  &.facebook {
    display: flex;
    background-color: #4267b2;
    color: white;
    margin: 0.5rem auto;
  }
`;
export default function RegisterButton(props) {
  return <RegButton type="submit">{props.title}</RegButton>;
}
