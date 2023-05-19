import React from "react";
import styled from "styled-components";
import FormFooter from "../../Components/FormFooter";
import SignInForm from "../../Components/SignInForm";

export const RegisterPage = styled.div`
  height: 100%;
  width: 100%;
  /* position: relative; */
  /* background-color: ${(props) => props.theme.pallet.secondaryBackdround}; */
`;
export default function SignIn() {
  return (
    <>
      <SignInForm />
      <FormFooter />
    </>
  );
}
