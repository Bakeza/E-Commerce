import React, { useEffect, useState } from "react";
import ItemDescription from "../../Components/ItemDescription";
import ItemPath from "../../Components/ItemPath";
import MayLike from "../../Components/MayLike";
import Related from "../../Components/Related";
import ShowItem from "../../Components/ShowItem";
import { FlexDiv } from "../../Components/SignInForm/style";
import { Container } from "../../global/style";
import Discount from "../../Sections/Discount";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function Item() {
  const { product, setProduct } = useState([]);
  const params = useParams();
  console.log(params.id);
  const getProductById = async () => {
    const { data } = await axios.get(
      `${process.env.REACT_APP_API}/product/${params.id}`
    );
  setProduct(data.data.product);
  };
  useEffect(() => {
    getProductById();
  }, []);

  return (
    <>
      <Container>
        <ItemPath />
        {product && product.map((item) => (
          <ShowItem key={item} {...{ item }} />
        ))}
        <FlexDiv className="start">
        <ItemDescription />
        <MayLike />
        </FlexDiv>
        <Related />
        <Discount />
      </Container>
    </>
  );
}
