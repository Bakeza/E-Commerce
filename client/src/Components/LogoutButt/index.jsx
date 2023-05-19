import React from "react";

import { TbLogout } from "react-icons/tb";
import styled from "styled-components";
import {  useAuthContext } from "../../Context/authContext";


export const LogoutIcon = styled.div`
  color: #8b96a5;
  font-size: 1.5rem;
`;
export default function LogoutButt() {

  const {logout} =  useAuthContext();;

  return (
    <LogoutIcon>
      <TbLogout className="icon" onClick={logout} />
    </LogoutIcon>

  );
}
