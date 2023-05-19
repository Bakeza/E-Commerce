import React from "react";
import { Container } from "../../global/style";
import Categories from "../../Sections/Categories";

import Offers from "../../Sections/Offers";
import QuoteRequest from "../../Sections/QuoteRequest";
import Recommended from "../../Sections/Recommended";
import RegionSec from "../../Sections/Region";
import Serviceses from "../../Sections/Serviceses";
import Trending from "../../Sections/Trending";

export default function Home() {
  return (
    <>
      <Container>
        <Trending />
        <Offers />
        <Categories />
        <QuoteRequest />
        <Recommended />
        <Serviceses />
        <RegionSec />
      </Container>
    </>
  );
}
