import React, { useCallback, useContext } from "react";

import { themeContext } from "../../Context/ThemeContext";
import { darkTheme, lightTheme } from "../../global/Themes";

import { IoSunnyOutline } from "react-icons/io5";
import { BsFillMoonStarsFill } from "react-icons/bs";
import styled from "styled-components";

export const ToggleButton = styled.button`
  font-size: 1.5rem;
  background-color: transparent;
  border: none;
  outline: none;
  color: #4d5567;
  cursor: pointer;
`;

export default function Toggle() {
  const [theme, setTheme] = useContext(themeContext);

  const SetToggleTheme = useCallback(() => {
    setTheme((prevState) =>
      prevState.theme === "light" ? darkTheme : lightTheme
    );
    if (theme.theme === "light") {
      localStorage.setItem("theme", "dark");
    } else {
      localStorage.setItem("theme", "light");
    }
  }, [setTheme, theme]);
  
  return (
    <>
      <ToggleButton onClick={SetToggleTheme}>
        {theme.theme === "light" ? (
          <BsFillMoonStarsFill />
        ) : (
          <IoSunnyOutline style={{ color: "yellow" }} />
        )}
      </ToggleButton>
    </>
  );
}
