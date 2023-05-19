import React from "react";

import Services from "../../Components/Services";
import { services } from "../../mock/data";
import { RecommendedContaner, SectionTitle } from "../Recommended";

export default function serviceses() {
  return (
    <>
      <SectionTitle>Our extra services</SectionTitle>
      <RecommendedContaner>
        {services.map((item) => (
          <Services
            key={item.id}
            src={item.img}
            name={item.title}
            icon={item.icon}
          />
        ))}
      </RecommendedContaner>
    </>
  );
}
