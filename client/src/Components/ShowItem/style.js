import styled from "styled-components";
import { Title } from "../InfoType";

export const ShowDiv = styled.div`
  display: flex;
  width: 100%;
  height: 34rem;
  background-color: ${(props) => props.theme.pallet.mainBackdround};
  border: 1px solid ${(props) => props.theme.pallet.Lines};
  border-radius: 0.5rem;
  padding: 0.4rem;
  margin: 0 auto;
  margin-bottom: 1rem;
  & img {
    margin-right: 0.8rem;
    margin-top: 0.5rem;
  }
`;
export const InnerDiv = styled.div`
  width: 33%;
  width: ${(props) => (props.Region ? "26%" : "36%")};
  margin-right: 0.5rem;
  padding: 1rem;
  &.info {
    display: flex;
    align-items: center;
    width: 100%;
    margin: 0;
    padding: 0;
  }
  &.Region {
    width: 100%;
    margin: 0 auto;
    border: 1px solid ${(props) => props.theme.pallet.Lines};
    border-radius: 0.5rem;
  }
  &.RegInfo {
    width: 100%;
    display: flex;
    color: #8b96a5;
    padding: 0.5rem;
  }
`;
export const Paragraph = styled.p`
  font-size: 1rem;
  &.green {
    color: #00b517;
  }
  &.type {
    color: #8b96a5;
    width: 40%;
    padding: 0.5rem 0;
    padding-right: 2.5rem;
  }
  &.info {
    color: #505050;
    padding-right: 1rem;
  }
  &.pDetail {
    font-size: 0.7rem;
    padding-top: 0.2rem;
  }
  &.RegionDetail {
    padding-left: 13%;
  }
`;
export const ItemTitle = styled(Title)`
  padding: 0.5rem 0;
  padding-right: 3rem;
  font-weight: 600;
`;
export const ItemImage = styled.img`
  width: 100%;
  border: 1px solid ${(props) => props.theme.pallet.Lines};
  border-radius: 0.5rem;
`;
export const HR = styled.hr`
  border: none;
  border-bottom: 1px solid ${(props) => props.theme.pallet.Lines};
  margin: 0.3rem 0;
`;
export const Dot = styled.div`
  height: 0.5rem;
  width: 0.5rem;
  background-color: #dbdbdb;
  border-radius: 50%;
`;
export const PriceDetail = styled.div`
  &.main {
    height: 4.5rem;
    background-color: #fff0df;
    color: #606060;
    display: flex;
    justify-content: space-between;
    padding: 1rem;
    margin: 1rem 0;
  }
  &.Inner {
    width: 35%;
    border-left: ${(props) => (props.first ? "none" : "0.5px solid #bdc1c8")};
    padding: 0 0.5rem;
  }
`;
