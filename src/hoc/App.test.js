import React from "react";
import App from "./App";
import { screen, fireEvent, render } from "@testing-library/react";

import "@testing-library/jest-dom";
import { act } from "react-dom/test-utils";

describe("App component:", () => {
  it(".Header is visible", () => {
    render(<App />);
    expect(screen.getByTestId("header-info")).toBeInTheDocument();
  });

  it(".Search form visible. Redirects to /results", async () => {
    render(<App />);
    const btn_search = screen.getByTestId("btn-search");
    expect(btn_search).toBeInTheDocument();

    await act(() => fireEvent.click(btn_search));
    expect(screen.getByTestId("btn-new-search")).toBeInTheDocument();
  });
});
