import React from "react";
import styled from "styled-components";

import { MdArrowForwardIos } from "react-icons/md";

export const Path = styled.div`
  width: 35%;
  font-size: 1rem;
  color: #8b96a5;
  padding: 1.5rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export default function ItemPath() {
  return (
    <Path>
      Home <MdArrowForwardIos /> Clothings <MdArrowForwardIos /> Men’s wear{" "}
      <MdArrowForwardIos /> Summer clothing
    </Path>
  );
}
