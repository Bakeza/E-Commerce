import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import { Option } from "../SideBar/style";
import { FlexDiv } from "../SignInForm/style";

import { FaBars } from "react-icons/fa";
import { AiFillAppstore } from "react-icons/ai";
import { RiArrowDownSLine } from "react-icons/ri";

const Filter = styled.div`
  width: 85%;
  height: 3.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: auto;
  padding: 1rem;
  border: 1px solid ${(props) => props.theme.pallet.Lines};
  background-color: ${(props) => props.theme.pallet.mainBackdround};
  color: ${(props) => props.theme.pallet.primaryText};
  border-radius: 0.5rem;
`;
const Featured = styled.div`
  width: 8rem;
  padding: 0 0.5rem;
  margin: 0 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid ${(props) => props.theme.pallet.Lines};
  border-radius: 0.5rem;
  &.icons {
    width: 4rem;
    color: #8b96a5;
    padding: 0;
  }
`;
const IconDIV = styled.div`
  font-size: 1.3rem;
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-right: 1px solid ${(props) => props.theme.pallet.Lines};
  border-radius: 0.5rem 0 0 0.5rem;
  &.right {
    border: none;
    font-size: 1rem;
    border-radius: 0 0.5rem 0.5rem 0;
  }
  &.selected {
    background-color: #e3e8ee;
  }
`;

export default function ItemFilter(props) {
  const navigate = useNavigate();

  return (
    <Filter>
      <p>
        12,911 items in
        <span style={{ fontWeight: "bold" }}> Mobile accessory </span>
      </p>
      <FlexDiv>
        <FlexDiv className="align">
          <input type="checkbox" value="Verified" />
          <Option className="checked">Verified only</Option>
        </FlexDiv>
        <Featured>
          <p>Featured</p>
          <RiArrowDownSLine />
        </Featured>
        <Featured className="icons">
          <IconDIV
            className={props.selected ? "selected" : ""}
            onClick={() => {
              navigate("/selectedItems");
            }}
          >
            <AiFillAppstore />
          </IconDIV>
          <IconDIV
            className={props.electronic ? "selected right" : "right"}
            onClick={() => {
              navigate("/electronics");
            }}
          >
            <FaBars />
          </IconDIV>
        </Featured>
      </FlexDiv>
    </Filter>
  );
}
