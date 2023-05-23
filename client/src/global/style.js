import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
::-webkit-scrollbar {
  width: 8px;
  background-color:${(props) => props.theme.pallet.Lines};
}
::-webkit-scrollbar-thumb {
  background-color: #999999;
  border-radius: 15px;
}
body{
background-color:${(props) => props.theme.pallet.page};
font-family: 'Inter', sans-serif;
}
body a {
  text-decoration: none;
  color: rgb(65, 123, 225);
}
`;
export const Container = styled.div`
  width: 100%;
  padding: 2% 7%;
  margin: 0 auto;
`;
export const Spinner = styled.div`
  border: 3rem solid #fff;
  border-top: 3rem #000 solid;
  border-radius: 50%;
  height: 15rem;
  width: 15rem;
  margin:auto;
  animation: spin 0.5s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }
`;