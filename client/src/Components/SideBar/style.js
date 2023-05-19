import styled from "styled-components";

export const Sidebar = styled.aside`
  height: 100vh;
  grid-area: sidebar;
  padding: 1.2rem 0;
`;
export const SidebarItem = styled.div`
  width: 100%;
  padding: 1rem;
  border-top: 1px solid ${(props) => props.theme.pallet.Lines};
  color: ${(props) => props.theme.pallet.primaryText};
`;
export const SelectType = styled.p`
  font-size: 1.2rem;
  font-weight: 600;
  color: ${(props) => props.theme.pallet.primaryText};
`;
export const Options = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Option = styled.p`
  font-size: 1rem;
  font-weight: 400;
  color: #505050;
  padding-top: 1rem;
  cursor: pointer;
  color: ${(props) => props.theme.pallet.primaryText};
  &.checked {
    padding-top: 0;
  }
  &.All {
    color: ${(props) => props.theme.pallet.primary};
  }
  &.Save {
    color: ${(props) => props.theme.pallet.primary};
    text-align: center;
    font-weight: 500;
  }
`;
export const SidebarInput = styled.input`
  width: 85%;
  height: 2.5rem;
  border: none;
  outline: none;
  background-color: ${(props) => props.theme.pallet.mainBackdround};
  color: ${(props) => props.theme.pallet.secondaryText};
  border: 1px solid ${(props) => props.theme.pallet.Lines};
  border-radius: 0.5rem;
  margin-right: 0.5rem;
  margin-top: 0.5rem;
  padding: 0.5rem;
  cursor: pointer;
  &.radio {
    height: 1rem;
    background-color: transparent;
    margin: 0;
    width: 10%;
  }
`;
export const ApplyButton = styled.button`
  width: 92%;
  height: 2.5rem;
  border: none;
  outline: none;
  background-color: ${(props) => props.theme.pallet.mainBackdround};
  color: ${(props) => props.theme.pallet.primary};
  font-size: 1rem;
  font-weight: 500;
  border: 1px solid ${(props) => props.theme.pallet.Lines};
  margin-top: 0.5rem;
  border-radius: 0.5rem;
  cursor: pointer;
`;
