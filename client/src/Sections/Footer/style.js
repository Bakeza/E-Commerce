import styled from "styled-components";

export const FOOTER = styled.footer`
  width: 100%;
  position: relative;
  bottom: 0;
`;
export const CopyRight = styled.div`
  padding: 0 6%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 1rem;
  color: ${(props) => props.theme.pallet.secondaryText};
  height: 3.5rem;
  background-color: ${(props) => props.theme.pallet.secondaryBackdround};
`;
export const Flex = styled.div`
  display: flex;
  align-items: center;
  color: #8b96a5;
`;
export const LogoDiv = styled.div`
  width: 18rem;
`;
export const UpperFooter = styled.div`
  padding: 0 6%;
  height: 13rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${(props) => props.theme.pallet.Footer};
`;
export const About = styled.p`
  font-size: 1rem;
  padding: 0.7rem 0;
  font-weight: 400;
  color: #505050;
`;
export const RadiusBorder = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  height: 1.5rem;
  width: 1.5rem;
  background-color: #bbbcbe;
  color: white;
  margin: 0 0.5rem;
`;
export const App = styled.img`
  padding: 0.5rem 1.5rem;
  display: block;
`;
