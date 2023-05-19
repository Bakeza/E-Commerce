import React from "react";
import ItemDescription from "../../Components/ItemDescription";
import ItemPath from "../../Components/ItemPath";
import MayLike from "../../Components/MayLike";
import Related from "../../Components/Related";
import ShowItem from "../../Components/ShowItem";
import { FlexDiv } from "../../Components/SignInForm/style";
import { Container } from "../../global/style";
import Discount from "../../Sections/Discount";


export default function Item() {
  return (
    <>
      <Container>
        <ItemPath />
        <ShowItem />
        <FlexDiv className="start">
          <ItemDescription />
          <MayLike />
        </FlexDiv>
        <Related/>
        <Discount/>
      </Container>
    </>
  );
}
