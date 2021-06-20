import { render, screen } from "@testing-library/react";
import App from "./App";
describe("App Component", () => {
  test("renders learn react link", () => {
    render(<App />);
    const textElement = screen.getByText(/Museum/i);
    expect(textElement).toBeInTheDocument();
  });
});
