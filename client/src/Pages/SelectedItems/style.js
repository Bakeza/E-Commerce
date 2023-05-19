import styled from "styled-components";

 
export const PageLayout =styled.div`
width: 100%;
display: grid;
grid-template-columns: 1fr 5fr;
grid-template-areas:"sidebar Items";
`
export const PageContent =styled.div`
grid-area: Items;
`