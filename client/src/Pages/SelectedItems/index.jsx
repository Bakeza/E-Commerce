import React from "react";

import { Container } from "../../global/style";
import { PageLayout ,PageContent } from "./style";

import ItemCard from "../../Components/ItemCard";
import SideBar from "../../Components/SideBar";
import ItemPath from "../../Components/ItemPath";
import ItemFilter from "../../Components/ItemFilter";
import { SelectedItem } from "../../mock/data";

export default function SelectedItems() {
  return (
    <>
      <Container>
      <ItemPath/>
        <PageLayout>
       <SideBar />
       <PageContent>
        <ItemFilter selected />
        {SelectedItem.map((item)=>(
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
