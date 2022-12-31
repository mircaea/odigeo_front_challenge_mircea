import React from "react";
import { render } from "@testing-library/react";
import { AppContextProvider, AppContext } from "./AppContext";

import request from "../__mocks__/request";

describe("AppContext", () => {
  it(".App context initial locations is empty", () => {
    const { getByText } = render(
      <AppContextProvider>
        <AppContext.Consumer>
          {(value) => (
            <>
              <span>Locations: {value.locations.length}</span>
              <span>Itineraries: {value.itineraries.length}</span>
            </>
          )}
        </AppContext.Consumer>
      </AppContextProvider>
    );

    expect(getByText("Locations: 0")).toBeTruthy();
    expect(getByText("Itineraries: 0")).toBeTruthy();
  });

  describe(".locations is not empty", () => {
    it("holds locations", async () => {
      // mock fetch. locations length > 0
      return request("/locations").then((data) =>
        expect(data.length).toBeGreaterThan(0)
      );
    });
  });

  describe(".itineraries is not empty", () => {
    it("holds locations", async () => {
      // mock fetch. itineraries length > 0
      return request("/itineraries").then((data) =>
        expect(data.length).toBeGreaterThan(0)
      );
    });
  });
});
