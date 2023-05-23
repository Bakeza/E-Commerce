import React, { useEffect, useState } from "react";

import { PageContent, PageLayout } from "../SelectedItems/style";
import { Container } from "../../global/style";
import ElectronicsItem from "../../Components/ElectronicsItem";
import SideBar from "../../Components/SideBar";
import ItemPath from "../../Components/ItemPath";
import ItemFilter from "../../Components/ItemFilter";

import { RecommendedContaner } from "../../Sections/Recommended";
import axios from "axios";

export default function Electronics({ searchValue }) {
  const [product, setProduct] = useState([]);

  // const [addProduct,setAddProduct]=useState([]);
  useEffect(() => {
    const getProducts = async () => {
      const { data } = await axios.get(`${process.env.REACT_APP_API}/product`);
      setProduct(data.data.product);
      console.log(data.data.product);
    };
    getProducts();
  }, []);
  return (
    <>
      {console.log(searchValue)}
      <Container>
        <ItemPath />
        <PageLayout>
          <SideBar />
          <PageContent>
            <ItemFilter electronic />
            {searchValue && (
              <RecommendedContaner>
                {searchValue.map((item) => (
                  <ElectronicsItem key={item.id} {...{ item }} />
                ))}
              </RecommendedContaner>
            )}
            {!searchValue && (
              <RecommendedContaner>
                {product.map((item) => (
                  <ElectronicsItem key={item.id} {...{ item }} />
                ))}
              </RecommendedContaner>
            )}
          </PageContent>
        </PageLayout>
      </Container>
    </>
  );
}
