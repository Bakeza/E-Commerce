import React from "react";
import Category from "../../Components/Category";
import { CategoriesContaner } from "../../mock/data";
import { Intro, InerContaner, Source, Title, CategoryContaner } from "./style";

export default function Categories() {
  return (
    <>
      {CategoriesContaner.map((Contaner) => (
        <CategoryContaner key={Contaner.id}>
          <Intro imgUrl={Contaner.IntroSrc}>
            <Title>{Contaner.introTitle}</Title>
            <Source>{Contaner.sourceBtn}</Source>
          </Intro>
          <InerContaner>
            {Contaner.products.map((item) => (
              <Category
                key={item.id}
                type={item.title}
                from={item.From}
                src={item.img}
                upRad={item.upRad ? true : false}
                downRad={item.downRad ? true : false}
              />
            ))}
          </InerContaner>
        </CategoryContaner>
      ))}
    </>
  );
}
