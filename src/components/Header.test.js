import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Header from "./Header";

describe("Header component", () => {
  const headerProps = {
    text: "Museum",
  };
  test("renders Header component", () => {
    render(<Header {...headerProps} />);
    const text = screen.getByText(/Museum/i);
    expect(text).toBeInTheDocument();
  });
});
