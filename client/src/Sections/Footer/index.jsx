import React from "react";

import { MdOutlineKeyboardArrowUp } from "react-icons/md";
import { BsTwitter } from "react-icons/bs";
import { GrFacebookOption } from "react-icons/gr";
import { FaLinkedinIn } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { AiFillYoutube } from "react-icons/ai";

import {
  FOOTER,
  LogoDiv,
  CopyRight,
  Flex,
  UpperFooter,
  About,
  RadiusBorder,
  App
} from "./style";
import { Country } from "../Header";
import { Title } from "../../Components/InfoType";
import InfoType from "../../Components/InfoType";
import Logo from "../../Components/Logo";

import USA from "../../Assetse/USA.png";
import Appstore from "../../Assetse/AppStore.png";
import Googleplay from "../../Assetse/GooglePlay.png";

export default function Footer() {
  return (
    <FOOTER>
      <UpperFooter>
        <LogoDiv>
          <Logo />
          <About>
            Best information about the company gies here but now lorem ipsum is
          </About>
          <Flex>
            <RadiusBorder>
              <GrFacebookOption />
            </RadiusBorder>
            <RadiusBorder>
              <BsTwitter />
            </RadiusBorder>
            <RadiusBorder>
              <FaLinkedinIn />
            </RadiusBorder>
            <RadiusBorder>
              <BsInstagram />
            </RadiusBorder>
            <RadiusBorder>
              <AiFillYoutube />
            </RadiusBorder>
          </Flex>
        </LogoDiv>
        <InfoType
          title="About"
          info1="About Us"
          info2="Find store"
          info3="Categories"
          info4="Blogs"
        />
        <InfoType
          title="Partnership"
          info1="About Us"
          info2="Find store"
          info3="Categories"
          info4="Blogs"
        />
        <InfoType
          title="Information"
          info1="Help Center"
          info2="Money Refund"
          info3="Shipping"
          info4="Contact us"
        />
        <InfoType
          title="For users"
          info1="Login"
          info2="Register"
          info3="Settings"
          info4="My Orders"
        />
        <div>
          <Title>Get app</Title>
          <App src={Appstore} alt="App" />
          <App src={Googleplay} alt='App'/> 
        </div>
      </UpperFooter>
      <CopyRight>
        <p>© 2023 Ecommerce.</p>
        <Flex>
          <p>English</p>
          <Country src={USA} alt="USA" /> <MdOutlineKeyboardArrowUp />
        </Flex>
      </CopyRight>
    </FOOTER>
  );
}
