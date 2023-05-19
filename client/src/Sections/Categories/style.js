import styled from "styled-components";

export const CategoryContaner = styled.div`
  display: flex;
  justify-content: center;
  margin: auto;
  padding: 1rem 0;
`;
export const InerContaner = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 60rem;
`;
export const Intro = styled.div`
  height: 16.4rem;
  width: 18rem;
  background-image: url(${(props) => props.imgUrl});
  background-size: cover;
  border-radius: 0.5rem 0 0 0.5rem;
`;
export const Title = styled.h3`
  font-size: 1.2rem;
  font-weight: 600;
  padding: 2rem 6rem 0 2rem;
  color: ${(props) => props.theme.pallet.primaryText};
`;
export const Source = styled.button`
  height: 2.3rem;
  padding: 0.5rem;
  margin: 1.3rem 2rem;
  background-color: ${(props) => props.theme.pallet.mainBackdround};
  color: ${(props) => props.theme.pallet.primaryText};
  font-size: 1rem;
  font-weight: 500;
  border-radius: 0.5rem;
  border: none;
  outline: none;
`;
