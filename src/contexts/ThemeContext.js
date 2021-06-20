import React, { useState, createContext, useEffect } from "react";

const lightTheme = {
  name: "light",
  body: "#FFFFFF",
  text: "#000000",
  headerBg: "#f1f2f6",
  textL: "#57606f",
  textM: "#57606f",
  textS: "#57606f",
  textXS: "#a4b0be",
  toggleBorder: "#FFF",
  gradient: "linear-gradient(#39598A, #79D7ED)",
};

const darkTheme = {
  name: "dark",
  body: "#57606f",
  text: "#FAFAFA",
  headerBg: "#2f3542",
  textL: "#FFFFFF",
  textM: "#dfe4ea",
  textS: "#dfe4ea",
  textXS: "#ced6e0",
  toggleBorder: "#6B8096",
  gradient: "linear-gradient(#091236, #1E215D)",
};

const ThemeContext = createContext({
  theme: lightTheme,
  setTheme: () => {},
});

function ThemeContextProvider({ value, children }) {
  const [theme, toggleTheme] = useState();

  function setTheme(name) {
    name === "light" ? toggleTheme(lightTheme) : toggleTheme(darkTheme);
  }

  useEffect(function themeEffect() {
    const isDark = localStorage.getItem("dark") === "true";
    if (isDark) {
      toggleTheme(darkTheme);
    } else {
      toggleTheme(lightTheme);
    }
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, setTheme, ...value }}>
      {children}
    </ThemeContext.Provider>
  );
}

export { ThemeContext, ThemeContextProvider };
