import React from "react";
import { render, screen } from "@testing-library/react";
import Home from "./Home";

describe("Home component", () => {
  const props = {};
  test("renders Home component", () => {
    render(<Home {...props} />);
    const text = screen.getByTestId("home-container");
    expect(text).toBeInTheDocument();
  });
});
