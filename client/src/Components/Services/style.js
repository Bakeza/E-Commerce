import styled from "styled-components";

export const ServicesItem = styled.div`
  height: 12.5rem;
  width: 17.6rem;
  margin: 0 0.6rem;
  background-color: ${(props) => props.theme.pallet.mainBackdround};
  border: 1px solid ${(props) => props.theme.pallet.Lines};
  border-radius: 0.5rem;
`;
export const ServicesImg = styled.img`
  border-radius: 0.5rem 0.5rem 0 0;
  filter: brightness(40%);
`;
export const ServicesName = styled.h4`
  font-size: 1rem;
  font-weight: 500;
  color: ${(props) => props.theme.pallet.primaryText};
  padding:0rem 6rem 0 1rem;
  position: relative;
  top: -2rem;
`;
export const ServicesIcon = styled.div`
  position: relative;
  top: -2rem;
  left: 80%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  z-index: 1;
  height: 3rem;
  width: 3rem;
  border-radius: 50%;
  border: 1px solid ${(props) => props.theme.pallet.mainBackdround};
  background-color: #d1e7ff;
`;