import offer1 from "../Assetse/offer1.png";
import offer2 from "../Assetse/offer2.png";
import offer3 from "../Assetse/offer3.png";
import offer4 from "../Assetse/offer4.png";

import home from "../Assetse/home.png";
import Category1 from "../Assetse/Category1.png";
import Category2 from "../Assetse/Category2.png";
import Category3 from "../Assetse/Category3.png";
import Category4 from "../Assetse/category4.png";
import Category5 from "../Assetse/Category5.png";
import Category6 from "../Assetse/Category6.png";
import Category7 from "../Assetse/Category7.png";
import Category8 from "../Assetse/Category8.png";

import electronics from "../Assetse/electronics.png";
import Category9 from "../Assetse/Category9.png";
import Category10 from "../Assetse/Category10.png";
import Category11 from "../Assetse/Category11.png";
import Category12 from "../Assetse/Category12.png";
import Category13 from "../Assetse/Category13.png";
import Category14 from "../Assetse/Category14.png";
import Category15 from "../Assetse/Category15.png";
import Category16 from "../Assetse/Category16.png";

import item1 from "../Assetse/item1.png";
import item2 from "../Assetse/item2.png";
import item3 from "../Assetse/item3.png";
import item4 from "../Assetse/item4.png";
import item5 from "../Assetse/item5.png";
import item6 from "../Assetse/item6.png";
import item7 from "../Assetse/item7.png";
import item9 from "../Assetse/item9.png";
import item10 from "../Assetse/item10.png";

import services1 from "../Assetse/services1.png";
import services2 from "../Assetse/services2.png";
import services3 from "../Assetse/services3.png";
import services4 from "../Assetse/services4.png";
import { AiOutlineSearch } from "react-icons/ai";
import { HiArchiveBox } from "react-icons/hi2";
import { FaTelegramPlane } from "react-icons/fa";
import { GiCheckedShield } from "react-icons/gi";

import select1 from "../Assetse/select1.png";
import select2 from "../Assetse/select2.png";
import select3 from "../Assetse/select3.png";
import select4 from "../Assetse/select4.png";
import select5 from "../Assetse/select5.png";
import select6 from "../Assetse/select6.png";
import stars3 from "../Assetse/stars3.png";
import stars4 from "../Assetse/stars4.png";

// import cart1 from "../Assetse/cart1.png";
// import cart2 from "../Assetse/cart2.png";
// import cart3 from "../Assetse/cart3.png";

import gray1 from "../Assetse/gray1.png";
import gray2 from "../Assetse/gray2.png";
import gray3 from "../Assetse/gray3.png";
import gray4 from "../Assetse/gray4.png";
import gray5 from "../Assetse/gray5.png";
import gray6 from "../Assetse/gray6.png";

import like1 from "../Assetse/like1.png";
import like2 from "../Assetse/like2.png";
import like3 from "../Assetse/like3.png";
import like4 from "../Assetse/like4.png";

export const UlItems = [
  { id: 1, Title: "Automobiles" },
  { id: 2, Title: "Clothes and wear" },
  { id: 3, Title: "Home interiors" },
  { id: 4, Title: "Computer and tech" },
  { id: 5, Title: "Tools, equipments" },
  { id: 6, Title: "Sports and outdoor" },
  { id: 7, Title: "Animal and pets" },
  { id: 8, Title: "Machinery tools" },
  { id: 9, Title: "More category" },
];

export const offers = [
  {
    id: 1,
    src: offer1,
    name: "Smart watches",
    price: "-25%",
  },
  {
    id: 2,
    src: offer2,
    name: "Laptops",
    price: "-15%",
  },
  {
    id: 3,
    src: offer3,
    name: "GoPro cameras",
    price: "-40%",
  },
  {
    id: 4,
    src: offer4,
    name: "Headphones",
    price: "-25%",
  },
];

export const CategoriesContaner = [
  {
    id: 1,
    IntroSrc: home,
    introTitle: "Home and outdoor",
    sourceBtn: "Source now",
    products: [
      { id: 1, title: "Soft chairFrom: ", From: "From USD 19", img: Category1 },
      { id: 2, title: "Sofa & chair", From: "From USD 19", img: Category2 },
      { id: 3, title: "Kitchen dishes", From: "From USD 19", img: Category3 },
      {
        id: 4,
        title: "Smart watches",
        From: "From USD 19",
        img: Category4,
        upRad: true,
      },
      { id: 5, title: "Kitchen mixer", From: "From USD 100", img: Category5 },
      { id: 6, title: "Blenders", From: "From USD 39", img: Category6 },
      { id: 7, title: "Home appliance", From: "From USD 19", img: Category7 },
      {
        id: 8,
        title: "Coffee maker",
        From: "From USD 10",
        img: Category8,
        downRad: true,
      },
    ],
  },
  {
    id: 2,
    IntroSrc: electronics,
    introTitle: "Consumer electronics and gadgets",
    sourceBtn: "Source now",
    products: [
      { id: 1, title: "Smart watches", From: "From USD 19", img: Category9 },
      { id: 2, title: "Cameras", From: "From USD 89", img: Category10 },
      { id: 3, title: "Headphones", From: "From USD 10", img: Category11 },
      {
        id: 4,
        title: "Smart watches",
        From: "From USD 90",
        img: Category12,
        upRad: true,
      },
      { id: 5, title: "Gaming set", From: "From USD 35", img: Category13 },
      { id: 6, title: "Laptops & PC", From: "From USD 340", img: Category14 },
      { id: 7, title: "Smartphones", From: "From USD 19", img: Category15 },
      {
        id: 8,
        title: "Electric kattle",
        From: "From USD 240",
        img: Category16,
        downRad: true,
      },
    ],
  },
];

export const recommendedItems = [
  {
    id: 1,
    img: item1,
    price: "$10.30",
    description: "T-shirts with multiple colors, for men",
  },
  {
    id: 2,
    img: item2,
    price: "$10.30",
    description: "Jeans shorts for men blue color",
  },
  {
    id: 3,
    img: item3,
    price: "$12.50",
    description: "Brown winter coat medium size",
  },
  {
    id: 4,
    img: item4,
    price: "$34.00",
    description: "Jeans bag for travel for men",
  },
  {
    id: 5,
    img: item5,
    price: "$99.00",
    description: "Headset for gaming with mic",
  },
  {
    id: 6,
    img: item6,
    price: "$9.99",
    description: "Canon camera black, 100x zoom",
  },
  {
    id: 7,
    img: item7,
    price: "$8.99",
    description: "Headset for gaming with mic  ",
  },
  {
    id: 8,
    img: item5,
    price: "$10.30",
    description: "Smartwatch silver color modern",
  },
  {
    id: 9,
    img: item9,
    price: "$34.00",
    description: "Jeans bag for travel for men",
  },
  {
    id: 10,
    img: item10,
    price: "$99.00",
    description: "Jeans bag for travel for men",
  },
];

export const services = [
  {
    id: 1,
    img: services1,
    title: "Source from Industry Hubs",
    icon: <AiOutlineSearch />,
  },
  {
    id: 2,
    img: services2,
    title: "Customize Your Products",
    icon: <HiArchiveBox />,
  },
  {
    id: 3,
    img: services3,
    title: "Fast, reliable shipping by ocean or air",
    icon: <FaTelegramPlane />,
  },
  {
    id: 4,
    img: services4,
    title: "Product monitoring and inspection",
    icon: <GiCheckedShield />,
  },
];

export const SelectedItem = [
  {
    id: 11,
    src: select1,
    price: "$998.00",
    name: "GoPro HERO6 4K Action Camera - Black",
    order: "154 orders",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
  },
  {
    id: 22,
    src: select2,
    price: "$998.00",
    name: "GoPro HERO6 4K Action Camera - Black",
    order: "154 orders",
    description:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit",
  },
  {
    id: 33,
    src: select3,
    price: "$998.00",
    name: "GoPro HERO6 4K Action Camera - Black",
    order: "154 orders",
    description:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit ",
  },
  {
    id: 44,
    src: select4,
    price: "$998.00",
    name: "GoPro HERO6 4K Action Camera - Black",
    order: "154 orders",
    description:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit ",
  },
  {
    id: 55,
    src: select5,
    price: "$998.00",
    name: "GoPro HERO6 4K Action Camera - Black",
    order: "154 orders",
    description:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit ",
  },
  {
    id: 66,
    src: select6,
    price: "$998.00",
    name: "GoPro HERO6 4K Action Camera - Black",
    order: "154 orders",
    description:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit ",
  },
];

export const ElectronicsItems = [
  {
    id: 1,
    src: select1,
    price: "$998.00",
    name: "GoPro HERO6 4K Action Camera - Black",
    rate: stars4,
  },
  {
    id: 2,
    src: select2,
    price: "$998.00",
    name: "GoPro HERO6 4K Action Camera - Black",
    rate: stars3,
  },
  {
    id: 3,
    src: select2,
    price: "$998.00",
    name: "GoPro HERO6 4K Action Camera - Black",
    rate: stars4,
  },
  {
    id: 4,
    src: select3,
    price: "$998.00",
    name: "GoPro HERO6 4K Action Camera - Black",
    rate: stars4,
  },
  {
    id: 5,
    src: select5,
    price: "$998.00",
    name: "GoPro HERO6 4K Action Camera - Black",
    rate: stars4,
  },
  {
    id: 6,
    src: select2,
    price: "$998.00",
    name: "GoPro HERO6 4K Action Camera - Black",
    rate: stars4,
  },
  {
    id: 7,
    src: select4,
    price: "$998.00",
    name: "Canon Cmera EOS 2000,Black 10x zoom",
    rate: stars4,
  },
  {
    id: 8,
    src: select5,
    price: "$998.00",
    name: "Canon Cmera EOS 2000,Black 10x zoom",
    rate: stars4,
  },
  {
    id: 9,
    src: select1,
    price: "$998.00",
    name: "Canon Cmera EOS 2000,Black 10x zoom",
    rate: stars4,
  },
];

export const relatedProducts = [
  {
    id: "1",
    img: gray1,
    title: "GoPro HERO6 4K Action Camera - Black",
    price: "$99.50",
  },
  {
    id: "2",
    img: gray2,
    title: "GoPro HERO6 4K Action Camera - Black",
    price: "$99.50",
  },
  {
    id: "3",
    img: gray3,
    title: "GoPro HERO6 4K Action Camera - Black",
    price: "$99.50",
  },
  {
    id: "4",
    img: gray4,
    title: "GoPro HERO6 4K Action Camera - Black",
    price: "$99.50",
  },
];

export const RelatedItems = [
  {
    id: "1",
    img: gray1,
    title: "Xiaomi Redmi 8 Original",
    price: "$32.00 - $40.00",
  },
  {
    id: "2",
    img: gray2,
    title: "Xiaomi Redmi 8 Original",
    price: "$32.00 - $40.00",
  },
  {
    id: "3",
    img: gray3,
    title: "Xiaomi Redmi 8 Original",
    price: "$32.00 - $40.00",
  },
  {
    id: "4",
    img: gray4,
    title: "Xiaomi Redmi 8 Original",
    price: "$32.00 - $40.00",
  },
  {
    id: "5",
    img: gray5,
    title: "Xiaomi Redmi 8 Original",
    price: "$32.00 - $40.00",
  },
  {
    id: "6",
    img: gray6,
    title: "Xiaomi Redmi 8 Original",
    price: "$32.00 - $40.00",
  },
];

export const mayLikes = [
  {
    id: 1,
    img: like1,
    title: "Apple Watch Series Space Gray",
    price: "$7.00 - $99.50",
  },
  {
    id: 2,
    img: like2,
    title: "Apple Watch Series Space Gray",
    price: "$7.00 - $99.50",
  },
  {
    id: 3,
    img: like3,
    title: "Apple Watch Series Space Gray",
    price: "$7.00 - $99.50",
  },
  {
    id: 4,
    img: like4,
    title: "Apple Watch Series Space Gray",
    price: "$7.00 - $99.50",
  },
  {
    id: 5,
    img: like2,
    title: "Apple Watch Series Space Gray",
    price: "$7.00 - $99.50",
  },
];
