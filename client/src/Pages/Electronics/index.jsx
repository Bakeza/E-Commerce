import React, { useEffect, useState } from "react";

import { PageContent, PageLayout } from "../SelectedItems/style";
import { Container } from "../../global/style";
import ElectronicsItem from "../../Components/ElectronicsItem";
import SideBar from "../../Components/SideBar";
import ItemPath from "../../Components/ItemPath";
import ItemFilter from "../../Components/ItemFilter";

import { RecommendedContaner } from "../../Sections/Recommended";
import { ElectronicsItems } from "../../mock/data";
import Axios from "axios";
import { Link } from "react-router-dom";

export default function Electronics() {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const { data }= await Axios.get(`${process.env.REACT_APP_API}/product`);
      setProduct(data.data.product);
      console.log(data);
    };
    getProducts();
  }, []);

  return (
    <>
      {console.log(product)}
      <Container>
        <ItemPath />
        <PageLayout>
          <SideBar />
          <PageContent>
            <ItemFilter electronic />
            <RecommendedContaner>
              {product.map((item) => (
                <Link to={`/electronics/${item.id}`}>
                <ElectronicsItem key={item.id} {...{ item }} />
                </Link>
              ))}
            </RecommendedContaner>
          </PageContent>
        </PageLayout>
      </Container>
    </>
  );
}
