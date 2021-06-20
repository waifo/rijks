import React from "react";
import { render, screen } from "@testing-library/react";
import Switch from "./Switch";

describe("Switch component", () => {
  const switchProps = {
    id: "switch",
    toggled: true,
    onChange: () => {},
  };
  test("renders Switch component", () => {
    render(<Switch {...switchProps} />);
    const element = screen.getByTestId("switch");
    expect(element).toBeInTheDocument();
  });
});
