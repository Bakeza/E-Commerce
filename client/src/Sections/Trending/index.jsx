import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import trending from "../../Assetse/trending.png";
import user from "../../Assetse/user.png";

import ColoredDiv from "../../Components/ColoredDiv";
import { FlexDiv } from "../../Components/SignInForm/style";
import { UlItems } from "../../mock/data";
import { Source } from "../Categories/style";
import { SectionTitle } from "../Recommended";

const TrendingSec = styled.div`
  display: flex;
  width: 95%;
  height: 25rem;
  background-color: ${(props) => props.theme.pallet.mainBackdround};
  border: 1px solid ${(props) => props.theme.pallet.Lines};
  margin: 1rem auto;
  margin-top: 2rem;
  border-radius: 0.5rem;
`;
const TrendingUl = styled.ul`
  list-style: none;
  padding: 1rem;
`;
const TrendingLi = styled.li`
  font-size: 1rem;
  width: 14.5rem;
  padding: 0.6rem;
  color: ${(props) => props.theme.pallet.secondaryText};
  border-radius: 0.3rem;
  &:hover {
    color: #1C1C1C;
    font-weight: 600;
    background-color: ${(props) => props.theme.pallet.secondary};
  }
`;
const TrendingImg = styled.div`
  padding: 2rem 1rem;
  background-image: url(${trending});
  background-size: cover;
  height: 90%;
  width: 60%;
  margin: auto;
`;
const TrendingTitle = styled(SectionTitle)`
  font-size: 2.2rem;
  padding: 0 2rem;
`;
const TrendingP = styled.p`
  font-size: 1.7rem;
  padding: 0.5rem 2rem;
`;
const User = styled.div`
  height: 9.5rem;
  width: 12.7rem;
  background-color: #e3f0ff;
  color: #1c1c1c;
  font-size: 1rem;
  padding: 1rem;
  margin: 0.5rem 1rem;
  margin-top: 1rem;
  border-radius: 0.5rem;

  & p{
    padding: 0 0.5rem;
  }
`;
export const Join = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 99%;
  height: 2.2rem;
  padding: 1rem;
  margin: 0.5rem auto;
  text-align: center;
  border: none;
  outline: none;
  font-size: 1rem;
  background-color: ${(props) => (props.join ? "#0D6EFD" : "white")};
  color: ${(props) => (props.join ? "white" : "0D6EFD")};
  border:  ${(props) => (props.Region ? '1px solid #E3E8EE' : "none")};
  border-radius: 0.5rem;
`;

export default function Trending() {
  return (
    <>
      <TrendingSec>
        <TrendingUl>
          {UlItems.map((item) => 
            <TrendingLi key={item.id}>{item.Title}</TrendingLi>
          )}
        </TrendingUl>
        <TrendingImg>
          <TrendingP>Latest trending</TrendingP>
          <TrendingTitle>Electronic items</TrendingTitle>
          <Source>Learn more</Source>
        </TrendingImg>
        <div>
          <User>
            <FlexDiv>
              <img src={user} alt="avatar" />
              <p>Hi, user let’s get stated</p>
            </FlexDiv>
            <Link to="/">
              <Join join>Join now</Join>
            </Link>
            <Link to="/SignIn">
              <Join>Log in</Join>
            </Link>
          </User>
          <ColoredDiv
            background="#F38332"
            content="Get US $10  off with a new supplier"
          />
          <ColoredDiv
            background="#55BDC3"
            content="Send quotes with supplier preferences"
          />
        </div>
      </TrendingSec>
    </>
  );
}
