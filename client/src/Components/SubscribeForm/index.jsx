import React, { useState } from "react";
import styled from "styled-components";

const SubsForm = styled.form`
  display: flex;
  width: 25.5rem;
  height: 3rem;
  margin: 1rem auto;
  justify-content: space-between;
`;
const SubsInput = styled.input`
  width: 18rem;
  background-color: white;
  padding: 0 1rem;
  border-radius: 0.6rem;
  border: 1px solid ${(props) => props.theme.pallet.Lines};
  outline: none;
`;
export const SubsButton = styled.button`
  background-color: ${(props) => props.theme.pallet.primary};
  color: white;
  font-size: 1rem;
  width: 7rem;
  padding: 0.6rem 0;
  border-radius: 0.6rem;
  border: none;
  outline: none;
  cursor: pointer;
  &.orang {
    background-color: #ff9017;
  }
`;
export default function SubscribeForm() {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <SubsForm onSubmit={handleSubmit}>
      <SubsInput
        type="text"
        id="Subscribe"
        value={value}
        onChange={handleChange}
        placeholder="&#x2709; Email"
      />
      <SubsButton type="submit">Shop now</SubsButton>
    </SubsForm>
  );
}
