import styled from "styled-components";

export const Div = styled.div`
  &.container {
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 14rem;
    height: 2.6;
    margin: 0 0.3rem;
  }
  &.container img {
    width: 2rem;
    height: 1.5rem;
  }
  &.category {
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 15rem;
    height: 8.2rem;
    background-color:${(props) => props.theme.pallet.mainBackdround};
    border: 1px solid ${(props) => props.theme.pallet.Lines};
  }
  &.downRad{
    border-bottom-right-radius: 0.5rem;
  }
  &.upRad{
    border-top-right-radius: 0.5rem;
  }
  &.CatPrice p {
    padding-right: 4.5rem;
  }
  &.Text {
    display: flex;
    flex-direction: column;
    width: 12rem;
    padding: 0 0.7rem;
  }
  &.Text h4 {
    font-size: 1rem;
    font-weight: 400;
    color: ${(props) => props.theme.pallet.primaryText};
  }
  &.Text p {
    font-size: 0.8rem;
    color: ${(props) => props.theme.pallet.secondaryText};
    letter-spacing: 0.6px;
  }
  &.cart{
    padding: 0 1rem;
  }
`;