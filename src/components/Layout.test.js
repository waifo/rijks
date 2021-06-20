import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Layout from "./Layout";

describe("Layout component", () => {
  function RandomComponent() {
    return <div></div>;
  }
  const props = { children: RandomComponent, gutter: 10 };
  test("renders Layout component", () => {
    render(<Layout {...props} />);
    const text = screen.getByTestId("layout-container");
    expect(text).toBeInTheDocument();
  });
});
