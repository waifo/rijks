import React, { createContext, useEffect, useState } from "react";

const AppContext = createContext({
  isMobile: false,
  isSmallScreen: false,
});

function AppContextProvider({ value, children }) {
  const INITIAL_INNER_WIDTH_WINDOW = window ? window.innerWidth : 1280;
  const INITIAL_INNER_HEIGHT_WINDOW = window ? window.innerHeight : 720;
  const [width, setWidth] = useState(INITIAL_INNER_WIDTH_WINDOW);
  const [isMobile, setIsMobile] = useState(INITIAL_INNER_WIDTH_WINDOW < 768);
  const [isSmallScreen, setIsSmallScreen] = useState(
    INITIAL_INNER_WIDTH_WINDOW < 960
  );
  const [isDesktop, setIsDesktop] = useState(INITIAL_INNER_WIDTH_WINDOW >= 960);
  const [isWide, setIsWide] = useState(INITIAL_INNER_WIDTH_WINDOW >= 1280);
  const [isPortrait, setIsPortrait] = useState(
    INITIAL_INNER_WIDTH_WINDOW < INITIAL_INNER_HEIGHT_WINDOW
  );
  function onResize() {
    setWidth(window.innerWidth);
    setIsMobile(window.innerWidth < 768);
    setIsSmallScreen(window.innerWidth < 960);
    setIsDesktop(window.innerWidth >= 960);
    setIsWide(window.innerWidth >= 1280);
    setIsPortrait(window.innerWidth < window.innerHeight);
  }

  useEffect(function resizeEffect() {
    if (window) {
      window.addEventListener("resize", onResize);

      // cleaning event listener
      return function cleanResizeListener() {
        window.removeEventListener("resize", onResize);
      };
    }
  }, []);
  return (
    <AppContext.Provider
      value={{
        width,
        setWidth,
        isMobile,
        setIsMobile,
        isSmallScreen,
        setIsSmallScreen,
        isDesktop,
        setIsDesktop,
        isWide,
        setIsWide,
        isPortrait,
        setIsPortrait,
        ...value,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export default AppContext;
export { AppContextProvider };
