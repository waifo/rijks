import React, { useContext } from "react";
import { render, screen } from "@testing-library/react";
import { ThemeContext, ThemeContextProvider } from "./ThemeContext";

describe("ThemeContext component", () => {
  beforeEach(() => {
    Object.defineProperty(window, "localStorage", {
      value: {
        getItem: jest.fn((a) => a),
      },
      writable: true,
    });
  });
  const lightTheme = {
    name: "light",
  };

  const props = {
    value: { theme: lightTheme },
  };
  function ThemeComponent() {
    const { theme } = useContext(ThemeContext);
    return <div>{theme.name}</div>;
  }
  test("checks for correct values", async () => {
    await render(
      <ThemeContextProvider {...props}>
        <ThemeComponent />
      </ThemeContextProvider>
    );
    const text = screen.getByText("light");
    expect(text).toBeInTheDocument();
    expect(window.localStorage.getItem).toHaveBeenCalledTimes(1);
  });
});
