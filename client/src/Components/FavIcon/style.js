import styled from "styled-components";

export const Border = styled.div`
  min-width: 2.3rem;
  height: 2.3rem;
  font-size: 1.3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid ${(props) => props.theme.pallet.Lines};
  border-radius: 10px;
  color: ${(props) => props.theme.pallet.primary};
  cursor: pointer;
  background-color: white;
  box-shadow: 0 1px 2px rgb(0 0 0 / 0.2);
  padding: 0 !important;
  margin-right: ${(props) => props.related ? "5%" : "0"};
`;
