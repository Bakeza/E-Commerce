import React from "react";
import styled from "styled-components";

import logoSrc from "../../Assetse/Logo.png";

const LogoDiv = styled.div`
  display: flex;
  align-items: center;
`;
const LogoIcon = styled.img`
  display: flex;
  width: 3rem;
  height: 3rem;
`;
const LogoTitle = styled.h1`
  font-size: 1.7rem;
  color: #8cb7f5;
  padding: 0 0.5rem;
`;

export default function Logo() {
  return (
    <LogoDiv>
      <LogoIcon src={logoSrc} />
      <LogoTitle> Brand </LogoTitle>
    </LogoDiv>
  );
}
