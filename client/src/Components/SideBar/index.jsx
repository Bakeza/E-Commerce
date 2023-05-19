import React, { useState } from "react";

import { Slider } from "@mui/material";
import { RiArrowDownSLine } from "react-icons/ri";
import { RiArrowUpSLine } from "react-icons/ri";

import { FlexDiv } from "../SignInForm/style";
import {
  Sidebar,
  SidebarItem,
  Options,
  Option,
  SidebarInput,
  ApplyButton,
  SelectType,
} from "./style";

import stars5 from "../../Assetse/stars5.png";
import stars4 from "../../Assetse/stars4.png";
import stars3 from "../../Assetse/stars3.png";
import stars2 from "../../Assetse/stars2.png";

export default function SideBar() {
  const [options, setOptions] = useState(false);
  const [Brands, setBrands] = useState(false);
  const [Features, setFeatures] = useState(false);
  const [price, setPrice] = useState(false);
  const [condition, setCondition] = useState(false);
  const [value, setValue] = React.useState([2, 10]);
  const [Rating, setRating] = useState(false);

  const rangeSelector = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Sidebar>
      <SidebarItem>
        <FlexDiv className="justify" onClick={() => setOptions(!options)}>
          <SelectType>Category</SelectType>
          {options ? <RiArrowUpSLine /> : <RiArrowDownSLine />}
        </FlexDiv>
        {options && (
          <Options>
            <Option>Mobile accessory</Option>
            <Option>Electronics</Option>
            <Option>Smartphones </Option>
            <Option>Modern tech</Option>
            <Option className="All">See all </Option>
          </Options>
        )}
      </SidebarItem>

      <SidebarItem>
        <FlexDiv className="justify" onClick={() => setBrands(!Brands)}>
          <SelectType>Brands</SelectType>
          {Brands ? <RiArrowUpSLine /> : <RiArrowDownSLine />}
        </FlexDiv>
        {Brands && (
          <Options>
            <FlexDiv className="align">
              <input type="checkbox" value="Samsung" />
              <Option className="checked">Samsung</Option>
            </FlexDiv>
            <FlexDiv className="align">
              <input type="checkbox" value="Apple" />
              <Option className="checked">Apple</Option>
            </FlexDiv>
            <FlexDiv className="align">
              <input type="checkbox" value="Huawei" />
              <Option className="checked">Huawei</Option>
            </FlexDiv>
            <FlexDiv className="align">
              <input type="checkbox" value="Pocco" />
              <Option className="checked">Pocco</Option>
            </FlexDiv>
            <FlexDiv className="align">
              <input type="checkbox" value="Lenovo" />
              <Option className="checked">Lenovo</Option>
            </FlexDiv>
            <Option className="All">See all </Option>
          </Options>
        )}
      </SidebarItem>

      <SidebarItem>
        <FlexDiv className="justify" onClick={() => setFeatures(!Features)}>
          <SelectType>Features</SelectType>
          {Features ? <RiArrowUpSLine /> : <RiArrowDownSLine />}
        </FlexDiv>
        {Features && (
          <Options>
            <FlexDiv className="align">
              <input type="checkbox" value="Metallic" />
              <Option className="checked">Metallic</Option>
            </FlexDiv>
            <FlexDiv className="align">
              <input type="checkbox" value="cover" />
              <Option className="checked">Plastic cover</Option>
            </FlexDiv>
            <FlexDiv className="align">
              <input type="checkbox" value="Ram" />
              <Option className="checked">8GB Ram</Option>
            </FlexDiv>
            <FlexDiv className="align">
              <input type="checkbox" value="power" />
              <Option className="checked">Super power</Option>
            </FlexDiv>
            <FlexDiv className="align">
              <input type="checkbox" value="Memory" />
              <Option className="checked">Large Memory</Option>
            </FlexDiv>
            <Option className="All">See all </Option>
          </Options>
        )}
      </SidebarItem>

      <SidebarItem>
        <FlexDiv className="justify" onClick={() => setPrice(!price)}>
          <SelectType>Price range</SelectType>
          {price ? <RiArrowUpSLine /> : <RiArrowDownSLine />}
        </FlexDiv>
        {price && (
          <Options>
            <Slider
              value={value}
              onChange={rangeSelector}
              valueLabelDisplay="auto"
            />
            <FlexDiv>
              <div>
                <p>Min</p>
                <SidebarInput type="text" placeholder={value[0]} />
              </div>
              <div>
                <p>Max</p>
                <SidebarInput type="text" placeholder={value[1]} />
              </div>
            </FlexDiv>
            <ApplyButton>Apply</ApplyButton>
          </Options>
        )}
      </SidebarItem>

      <SidebarItem>
        <FlexDiv className="justify" onClick={() => setCondition(!condition)}>
          <SelectType>Condition</SelectType>
          {condition ? <RiArrowUpSLine /> : <RiArrowDownSLine />}
        </FlexDiv>
        {condition && (
          <Options>
            <FlexDiv className="align">
              <SidebarInput
                className="radio"
                type="radio"
                value="Any"
                name="Any"
              />{" "}
               <Option>Any</Option>
            </FlexDiv>
            <FlexDiv className="align">
              <SidebarInput
                className="radio"
                type="radio"
                value="Refurbished"
                name="Refurbished"
              />{" "}
              Refurbished
            </FlexDiv>
            <FlexDiv className="align">
              <SidebarInput
                className="radio"
                type="radio"
                value="Brand"
                name="Brand"
              />{" "}
              Brand new
            </FlexDiv>
            <FlexDiv className="align">
              <SidebarInput
                className="radio"
                type="radio"
                value="Old"
                name="Old"
              />{" "}
              Old items
            </FlexDiv>
          </Options>
        )}
      </SidebarItem>

      <SidebarItem>
        <FlexDiv className="justify" onClick={() => setRating(!Rating)}>
          <SelectType>Ratings</SelectType>
          {Rating ? <RiArrowUpSLine /> : <RiArrowDownSLine />}
        </FlexDiv>
        {Rating && (
          <Options>
            <FlexDiv className="align">
              <input type="checkbox" value="5stars" />
              <img src={stars5} alt="5stars" />
            </FlexDiv>
            <FlexDiv className="align">
              <input type="checkbox" value="4stars" />
              <img src={stars4} alt="4stars" />
            </FlexDiv>
            <FlexDiv className="align">
              <input type="checkbox" value="3stars" />
              <img src={stars3} alt="3stars" />
            </FlexDiv>
            <FlexDiv className="align">
              <input type="checkbox" value="2stars" />
              <img src={stars2} alt="2stars" />
            </FlexDiv>
          </Options>
        )}
      </SidebarItem>
    </Sidebar>
  );
}
