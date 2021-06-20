import React from "react";
import { render } from "@testing-library/react";

import ErrorBoundary from "./ErrorBoundary";

function GivMeError({ shouldThrow }) {
  if (shouldThrow) throw new Error("Intensionally thrown error");
  else return null;
}
jest.spyOn(console, "error").mockImplementationOnce(() => {});

describe("ErrorBoundary component", () => {
  test("cathes and reports error", () => {
    render(
      <ErrorBoundary>
        <GivMeError shouldThrow={true} />
      </ErrorBoundary>
    );
    expect.any(Error);
    expect(console.error).toHaveBeenCalledTimes(2);
    console.error.mockClear();
  });

  test("should not render ErrorBoundary if no error thrown", () => {
    render(
      <ErrorBoundary>
        <GivMeError shouldThrow={false} />
      </ErrorBoundary>
    );
    expect(console.error).not.toHaveBeenCalled();
  });
});
