import styled from "styled-components";

export const Cart = styled.div`
  width: 70%;
  background-color: ${(props) => props.theme.pallet.mainBackdround};
  border: 1px solid ${(props) => props.theme.pallet.Lines};
  border-radius: 0.5rem;
  padding: 1rem;
  &.Qty {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 2.2rem;
    width: 7rem;
    margin: 0.5rem 0;
    font-weight: 500;
  }
`;
export const Item = styled.div`
  display: flex;
  justify-content: space-between;
  color: ${(props) => props.theme.pallet.primaryText};
  font-size: 1rem;
  border-bottom: 1px solid ${(props) => props.theme.pallet.Lines};
  padding: 0.5rem 0;
  & img {
    border: 1px solid ${(props) => props.theme.pallet.Lines};
    border-radius: 0.5rem;
    width: 15%;
    height: 5rem;
  }
  & h5 {
    font-weight: 500;
    font-size: 1rem;
  }
  & > div {
    padding: 0 1rem;
  }
`;
export const CartButton = styled.button`
  padding: 0.5rem;
  margin: 0.5rem 0;
  margin-right: 1rem;
  outline: none;
  background-color: ${(props) => props.theme.pallet.mainBackdround};
  color: ${(props) => (props.remove ? "red" : "#0D6EFD")};
  border: 1px solid ${(props) => props.theme.pallet.Lines};
  border-radius: 0.5rem;
  font-size: 0.8rem;
  font-weight: 500;
  text-align: center;
  cursor: pointer;
  &.back{
    background-color: ${(props) => props.theme.pallet.primary};
    color: white;
    font-size: 1rem;
  }
`;