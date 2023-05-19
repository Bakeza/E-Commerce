import { Suspense, useEffect, useState } from "react";
import { Router } from "./Router";

// style
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "../src/global/Themes";
import { GlobalStyle } from "./global/style";
import "./index.css";

// context
import { AuthContextProvider } from "./Context/authContext";
import { themeContext } from "./Context/ThemeContext";
import CartProvider from "./Context/CartContext";
import ErrorBoundary from "./Components/ErrorBoundary";

function App() {
  const [theme, setTheme] = useState(lightTheme);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme === "light" ? lightTheme : darkTheme);
    }
  }, []);

  return (
    <ErrorBoundary>
      <ThemeProvider theme={theme}>
        <themeContext.Provider value={[theme, setTheme]}>
          <AuthContextProvider>
            <CartProvider>
              <div className="App">
                <GlobalStyle />
                <Suspense fallback={<div className="spinner" />}>
                  <Router />
                </Suspense>
              </div>
            </CartProvider>
          </AuthContextProvider>
        </themeContext.Provider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
