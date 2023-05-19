import styled from "styled-components";

export const DescriptionDiv = styled.div`
  width: 70%;
  height: 36rem;
  background-color: ${(props) => props.theme.pallet.mainBackdround};
  border: 1px solid ${(props) => props.theme.pallet.Lines};
  border-radius: 0.5rem;
  color: #505050;
  margin: 0.5rem 0;
  & > div {
    padding: 1rem 5rem 1rem 1rem;
    text-align: left;
    line-height: 1.5;
  }
`;
export const DescList = styled.ul`
  list-style: none;
  display: flex;
  border-bottom: 1px solid ${(props) => props.theme.pallet.Lines};
  padding: 0 1rem;
  font-size: 1rem;
  color: #8b96a5;
  font-weight: 500;
  text-align: center;
  & li {
    padding: 0.8rem 1rem;
    cursor: pointer;
  }
  & > :first-child {
    color: ${(props) => props.theme.pallet.primary};
    border-bottom: 3px solid ${(props) => props.theme.pallet.primary};
  }
`;
export const CheckList = styled.ul`
  list-style: none;
  color: #8b96a5;
  & > li {
    display: flex;
    align-items: center;
    padding-top: 0.4rem;
  }
  & > li > p {
    color: #505050;
    padding: 0 0.6rem;
  }
`;
export const Table = styled.table`
  width: 65%;
  margin: 0.7rem 0;
  border-collapse: collapse;
`;
export const TData = styled.td`
  padding: 0.3rem 0.5rem;
  border: 1px solid ${(props) => props.theme.pallet.Lines};
  margin: 0;
  &.type {
    background-color: #eff2f4;
  }
  &.info {
    background-color: #ffffff;
  }
`;
