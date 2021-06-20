import React, { useContext } from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import AppContext, { AppContextProvider } from "./AppContext";

describe("AppContext compoenet", () => {
  const props = {
    value: {
      name: "Mukesh Kumar",
    },
  };
  function NameComponent() {
    const { name } = useContext(AppContext);
    return <div>{name}</div>;
  }
  test("checks for correct values", () => {
    render(
      <AppContextProvider {...props}>
        <NameComponent />
      </AppContextProvider>
    );
    const text = screen.getByText("Mukesh Kumar");
    expect(text).toBeInTheDocument();
  });
});
