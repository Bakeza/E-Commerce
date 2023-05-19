import React, { useState } from "react";
import { SearchForm, SearcgInput, Dropdown, SearchButton } from "./style";

export default function Search() {
  const [value, setValue] = useState("");
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <SearchForm onSubmit={handleSubmit}>
      <SearcgInput placeholder="Search" value={value} onChange={handleChange} />
      <Dropdown>
        <option value="All">All Category</option>
        <option value="Mobile">Mobile accessory</option>
        <option value="Electronics">Electronics</option>
        <option value="Smartphones">Smartphones </option>
        <option value="tech">Modern tech </option>
      </Dropdown>
      <SearchButton>Search</SearchButton>
    </SearchForm>
  );
}
