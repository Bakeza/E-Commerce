import React from "react";

import { PageContent, PageLayout } from "../SelectedItems/style";
import { Container } from "../../global/style";
import ElectronicsItem from "../../Components/ElectronicsItem";
import SideBar from "../../Components/SideBar";
import ItemPath from "../../Components/ItemPath";
import ItemFilter from "../../Components/ItemFilter";

import { RecommendedContaner } from "../../Sections/Recommended";
import { ElectronicsItems } from "../../mock/data";

export default function Electronics() {
  return (
    <>
      <Container>
        <ItemPath />
        <PageLayout>
          <SideBar />
          <PageContent>
            <ItemFilter electronic />
            <RecommendedContaner>
              {ElectronicsItems.map((item) => (
                <ElectronicsItem
                key={item.id}
                {...{ item }}
                />
              ))}
            </RecommendedContaner>
          </PageContent>
        </PageLayout>
      </Container>
    </>
  );
}
