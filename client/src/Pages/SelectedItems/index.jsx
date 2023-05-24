import React, { useEffect, useState } from "react";

import { Container } from "../../global/style";
import { PageLayout ,PageContent } from "./style";

import ItemCard from "../../Components/ItemCard";
import SideBar from "../../Components/SideBar";
import ItemPath from "../../Components/ItemPath";
import ItemFilter from "../../Components/ItemFilter";
import axios from "axios";

export default function SelectedItems() {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    const getProducts = async () => {
      const {data} = await axios.get(`${process.env.REACT_APP_API}/product`);
      setProduct(data.data.product);

    };
    getProducts();
  }, []);
  return (
    <>
      <Container>
      <ItemPath/>
        <PageLayout>
       <SideBar />
       <PageContent>
        <ItemFilter selected />
        {product.map((item)=>(
          <ItemCard
          key={item.id}
          {...{ item }}
          />
        ))
        }
        </PageContent>
        </PageLayout>
      </Container>
    </>
  );
}
