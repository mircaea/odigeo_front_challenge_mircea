import React from "react";
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { AppContextProvider } from "./context/AppContext";

const IncludeProviders = ({ children }) => {
  return (
    <BrowserRouter>
      <AppContextProvider>{children}</AppContextProvider>
    </BrowserRouter>
  );
};

const customRender = (ui, options) =>
  render(ui, { wrapper: IncludeProviders, ...options });

// re-export everything
export * from "@testing-library/react";

// override render method
export { customRender as render };
