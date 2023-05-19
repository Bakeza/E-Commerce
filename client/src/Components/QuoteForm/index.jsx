import React from "react";

import { Flex } from "../../Sections/Footer/style";
import { SubsButton } from "../SubscribeForm";
import { Input, QuForm, QuoteTitle, Select, TextArea } from "./style";


export default function QuoteForm() {
    return (
    <QuForm onSubmit={(e)=>e.preventDefault()}>
      <QuoteTitle>Send quote to suppliers</QuoteTitle>
      <Input type="text" placeholder="What item you need?" className="item" />
      <TextArea placeholder="Type more details" />
      <Flex>
        <Input type="text" placeholder="Quantity" className="quantity" />
        <Select>
          <option value="Pcs">Pcs</option>
          <option value="option2">Pcs</option>
          <option value="option3">Pcs</option>
        </Select>
      </Flex>
      <SubsButton>Send inquiry</SubsButton>
    </QuForm>
  );
}
