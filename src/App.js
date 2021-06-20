import React, { Suspense, useContext } from "react";
import { BrowserRouter as Router } from "react-router-dom";

import {
  AppContextProvider,
  ThemeContextProvider,
  ThemeContext,
} from "./contexts";
import { Header, GlobalStyle, Spinner, ErrorBoundary } from "./components";
import Routes from "./routes";

const headerProps = {
  text: "Museum",
};

function App() {
  const { theme } = useContext(ThemeContext);
  return (
    <ErrorBoundary>
      <AppContextProvider value={{}}>
        <ThemeContextProvider value={{}}>
          <Suspense fallback={<Spinner />}>
            <Router>
              <GlobalStyle theme={theme} />
              <Header {...headerProps} />
              <Routes />
            </Router>
          </Suspense>
        </ThemeContextProvider>
      </AppContextProvider>
    </ErrorBoundary>
  );
}

export default App;
