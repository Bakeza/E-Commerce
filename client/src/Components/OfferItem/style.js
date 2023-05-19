import styled from "styled-components";

export const Offer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 14rem;
  width: 12rem;
  border: 1px solid ${(props) => props.theme.pallet.Lines};
  background-color: ${(props) => props.theme.pallet.mainBackdround};
  border-left: none;
  &.lastItem {
    border-radius: 0 0.5rem 0.5rem 0;
  }
`;
export const ItemImg = styled.img`
  margin: 0 auto;
`;
export const ItemName = styled.p`
  font-size: 1rem;
  text-align: center;
  font-weight: 400;
  color: ${(props) => props.theme.pallet.primaryText};
  padding-top: 0.5rem;
`;
export const Price = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0.5rem auto;
  height: 1.7rem;
  width: 3rem;
  background-color: #ffe3e3;
  border: none;
  border-radius: 3rem;
  & > p {
    font-size: 0.9rem;
    text-align: center;
    color: #eb001b;
  }
`;
