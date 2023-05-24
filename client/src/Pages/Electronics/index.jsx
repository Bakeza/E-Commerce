import React, { useEffect, useState } from "react";

import { PageContent, PageLayout } from "../SelectedItems/style";
import { Container } from "../../global/style";
import ElectronicsItem from "../../Components/ElectronicsItem";
import SideBar from "../../Components/SideBar";
import ItemPath from "../../Components/ItemPath";
import ItemFilter from "../../Components/ItemFilter";

import { RecommendedContaner } from "../../Sections/Recommended";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Electronics({ searchValue }) {
  const [product, setProduct] = useState([]);

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
      <Container>
        <ItemPath />
        <PageLayout>
          <SideBar />
          <PageContent>
            <ItemFilter electronic />
            <RecommendedContaner>
              {product.map((item) => (
                <Link to={`/electronics/${item._id}`}>
                <ElectronicsItem key={item.id} {...{ item }} />
                </Link>
              ))}
            </RecommendedContaner>

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
