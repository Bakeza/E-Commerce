import styled from "styled-components"

export const CouponContainer =styled.div`
    width: 25%;
`
export const CouponDiv =styled.div`
  color: #505050;
  font-size: 1rem;
  padding:  1rem;
  background-color: ${(props) => props.theme.pallet.mainBackdround};
  border: 1px solid ${(props) => props.theme.pallet.Lines};
  border-radius: 0.5rem;
  & form{
    display: flex;
    margin: 0.5rem 0;
  }
  & input{
    width: 70%;
    padding: 0.7rem 1rem;
    border: 1px solid ${(props) => props.theme.pallet.Lines};
    outline: none;
    border-radius: 0.5rem 0 0 0.5rem ;
    background-color: ${(props) => props.theme.pallet.mainBackdround};
  }
`
export const TotalPrice =styled.div`
font-size: 1rem;
  padding:  1rem;
  margin: 1rem 0;
  background-color: ${(props) => props.theme.pallet.mainBackdround};
  border: 1px solid ${(props) => props.theme.pallet.Lines};
  border-radius: 0.5rem;  
  box-shadow: 1px 1px 6px #b2b6b9;
& h4{
    color: ${(props) => props.theme.pallet.primaryText};
}
`
export const ApplyButton =styled.button`
 background-color: ${(props) => props.theme.pallet.mainBackdround};
 color: ${(props) => props.theme.pallet.primary};
  border: 1px solid ${(props) => props.theme.pallet.Lines};
  border-radius: 0 0.5rem 0.5rem 0;
  padding: 0.7rem;
  width: 30%;
  font-weight: 500;
`
export const Checkout =styled.button`
 background-color: #00B517;
 color: white;
  border-radius: 0.5rem;
  padding: 0.8rem;
  width: 100%;
  font-size: 1.3rem;
  font-weight: 500;
  border: none;
  outline: none;
  margin: 1rem 0;
`
