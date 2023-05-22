import styled from "styled-components";

export const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 6rem auto;
  gap: 1rem;
  height: 65vh;
  width: 60%;
  h1 {
    color: ${(props) => props.theme.pallet.primaryText};
  }
`;
export const InfoConatiner = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 50%;
  gap: 10px;
  padding: 5%;
  font-size: 2rem;
  color: ${(props) => props.theme.pallet.primaryText};
  font-weight: 600;
  border: 1px solid ${(props) => props.theme.pallet.Lines};
  border-radius: 1rem;
  -webkit-border-radius: 1rem;
  -moz-border-radius: 1rem;
  -ms-border-radius: 1rem;
  -o-border-radius: 1rem;
`;

export const DataItem = styled.p`
  font-size: 1.5rem;
  font-weight: 400;
  color: ${(props) => props.theme.pallet.secondaryText};
  padding-top: 0;
`;
