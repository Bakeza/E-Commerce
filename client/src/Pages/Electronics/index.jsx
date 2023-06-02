import React, { useEffect, useState } from "react";

import { PageContent, PageLayout } from "../SelectedItems/style";
import { Container } from "../../global/style";
import ElectronicsItem from "../../Components/ElectronicsItem";
import SideBar from "../../Components/SideBar";
import ItemPath from "../../Components/ItemPath";
import ItemFilter from "../../Components/ItemFilter";
import { RecommendedContaner } from "../../Sections/Recommended";
import Axios from "axios";
import styled from "styled-components";
import { Link } from "react-router-dom";

export const Spinner = styled.div`
  border: 1.5rem solid white;
  border-top: 1.5rem #3d8bfd solid;
  border-radius: 50%;
  height: 10rem;
  width: 10rem;
  margin: auto;
  animation: spin 0.5s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }
`;
export default function Electronics({ searchValue }) {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    const getProducts = async () => {
      const { data } = await Axios.get(`${process.env.REACT_APP_API}/product`);
      setProduct(data.data.product);
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
              {product.length === 0 ? (
                <Spinner />
              ) : (
                product.map((item) => (
                  <Link to={`/electronics/${item.id}`}>
                    <ElectronicsItem key={item.id} {...{ item }} />
                  </Link>
                ))
              )}
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
