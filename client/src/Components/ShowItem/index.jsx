import React from "react";

import { FlexDiv } from "../SignInForm/style";
import { Join } from "../../Sections/Trending";
import {
  Dot,
  HR,
  InnerDiv,
  ItemImage,
  ItemTitle,
  Paragraph,
  PriceDetail,
  ShowDiv,
} from "./style";

import { FcCheckmark } from "react-icons/fc";
import { BsChatLeftText } from "react-icons/bs";
import { RiSailboatLine } from "react-icons/ri";
import { MdOutlineVerifiedUser } from "react-icons/md";
import { TbWorld } from "react-icons/tb";
import { MdOutlineFavoriteBorder } from "react-icons/md";

import mainImg from "../../Assetse/main.png";
import Img1 from "../../Assetse/Img1.png";
import Img2 from "../../Assetse/Img2.png";
import Img3 from "../../Assetse/Img3.png";
import Img4 from "../../Assetse/Img4.png";
import Img5 from "../../Assetse/Img5.png";
import Img6 from "../../Assetse/Img6.png";
import stars4 from "../../Assetse/stars4.png";
import Region from "../../Assetse/Region.png";
import germany from "../../Assetse/germany.png";
import { Option } from "../SideBar/style";
import { ItemP, Rate } from "../ItemCard/style";

function ShowItem() {
  return (
    <ShowDiv>
      <InnerDiv>
        <ItemImage src={mainImg} alt="product" />
        <FlexDiv>
          <img src={Img1} alt="product" />
          <img src={Img2} alt="product" />
          <img src={Img3} alt="product" />
          <img src={Img4} alt="product" />
          <img src={Img5} alt="product" />
          <img src={Img6} alt="product" />
        </FlexDiv>
      </InnerDiv>
      <InnerDiv>
        <Paragraph className="green">
          <FcCheckmark /> In stock
        </Paragraph>
        <ItemTitle>
          Mens Long Sleeve T-shirt Cotton Base Layer Slim Muscle
        </ItemTitle>
        <FlexDiv className="detail">
          <Rate src={stars4} alt="rate" />
          <ItemP className="rate"> 9.3</ItemP>
          <Dot />
          <BsChatLeftText />
          <Paragraph>32 reviews</Paragraph>
          <Dot />
          <RiSailboatLine />
          <Paragraph>154 sold</Paragraph>
        </FlexDiv>

        <PriceDetail className="main">
          <PriceDetail className="Inner" first>
            <ItemP className="offer">$98.00</ItemP>
            <Paragraph className="pDetail">50-100 pcs</Paragraph>
          </PriceDetail>

          <PriceDetail className="Inner">
            <ItemP className="elecPrice">$90.00</ItemP>
            <Paragraph className="pDetail">100-700 pcs</Paragraph>
          </PriceDetail>

          <PriceDetail className="Inner">
            <ItemP className="elecPrice">$78.00</ItemP>
            <Paragraph className="pDetail">700+ pcs</Paragraph>
          </PriceDetail>
        </PriceDetail>

        <InnerDiv className="info">
          <Paragraph className="type">Price: </Paragraph>
          <Paragraph className="info">Negotiable</Paragraph>
        </InnerDiv>
        <HR />
        <InnerDiv className="info">
          <Paragraph className="type">Type: </Paragraph>
          <Paragraph className="info">Classic shoes</Paragraph>
        </InnerDiv>
        <InnerDiv className="info">
          <Paragraph className="type">Material: </Paragraph>
          <Paragraph className="info">Plastic material</Paragraph>
        </InnerDiv>
        <InnerDiv className="info">
          <Paragraph className="type">Design: </Paragraph>
          <Paragraph className="info">Modern nice</Paragraph>
        </InnerDiv>
        <HR />
        <InnerDiv className="info">
          <Paragraph className="type">Customization: </Paragraph>
          <Paragraph className="info">
            Customized logo and design custom packages
          </Paragraph>
        </InnerDiv>
        <InnerDiv className="info">
          <Paragraph className="type">Protection:</Paragraph>
          <Paragraph className="info">Refund Policy</Paragraph>
        </InnerDiv>
        <InnerDiv className="info">
          <Paragraph className="type">Warranty: </Paragraph>
          <Paragraph className="info">2 years full warranty </Paragraph>
        </InnerDiv>
        <HR />
      </InnerDiv>

      <InnerDiv Region>
        <InnerDiv className="Region">
          <FlexDiv>
            <img src={Region} alt="avatar" />
            <div> <ItemP>Supplier </ItemP>
            <ItemP>Guanjoi Trading LLC</ItemP>
            </div>
          </FlexDiv>
          <HR />
          <InnerDiv className="RegInfo">
            <img src={germany} alt="germany" />
            <Paragraph className="RegionDetail">Germany, Berlin</Paragraph>
          </InnerDiv>
          <InnerDiv className="RegInfo">
            <MdOutlineVerifiedUser />
            <Paragraph className="RegionDetail">Verified Seller</Paragraph>
          </InnerDiv>
          <InnerDiv className="RegInfo">
            <TbWorld />
            <Paragraph className="RegionDetail">Worldwide shipping</Paragraph>
          </InnerDiv>
          <Join join>Send inquiry</Join>
          <Join Region>Seller’s profile</Join>
        </InnerDiv>
        <Option className="Save">
          <MdOutlineFavoriteBorder /> Save for later
        </Option>
      </InnerDiv>
    </ShowDiv>
  );
}

export default ShowItem;
