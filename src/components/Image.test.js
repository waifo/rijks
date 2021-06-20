import React from "react";
import { render, screen } from "@testing-library/react";
import Image from "./Image";

describe("Image component", () => {
  const imageProps = {
    url: "https://picsum.photos/200/300",
    maker: "Mukesh Kumar",
    title: "Awesome painting",
  };
  test("renders Image component", () => {
    render(<Image {...imageProps} />);
    const imageElement = screen.getByTestId("image-container");
    const shimmerElement = screen.getByTestId("shimmer-container");
    const maker = screen.getByText("Mukesh Kumar");
    const title = screen.getByText("Awesome painting");
    const img = screen.getAllByTestId("img");
    expect(imageElement).toBeInTheDocument();
    expect(shimmerElement).toBeInTheDocument();
    expect(maker).toBeInTheDocument();
    expect(title).toBeInTheDocument();
    expect(img).toBeInstanceOf(Array);
  });
});
