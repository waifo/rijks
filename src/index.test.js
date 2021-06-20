import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App component", () => {
  const props = {};
  test("renders App component", () => {
    render(<App {...props} />);
    const text = screen.getByText("Museum");
    expect(text).toBeInTheDocument();
  });
});
