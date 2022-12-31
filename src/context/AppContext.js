import React, { useContext, useEffect, useState } from "react";
import { getCachedItem, updateCachedItem } from "./localStorage";

export const AppContext = React.createContext();

export function useAppContext() {
  return useContext(AppContext);
}

export function AppContextProvider({ children }) {
  const [locations, setLocations] = useState([]);
  const [itineraries, setItineraries] = useState([]);

  useEffect(() => {
    const cached = getCachedItem("locations");
    if (cached) {
      setLocations(cached.locations);
      return;
    }

    const controller = new AbortController();
    fetch("http://localhost:3000/locations", { signal: controller.signal })
      .then((response) => response.json())
      .then((locations) => {
        updateCachedItem({ locations }, "locations");
        setLocations(locations);
      })
      .catch((error) => console.log(error));

    return () => {
      controller.abort();
    };
  }, []);

  useEffect(() => {
    const cached = getCachedItem("itineraries");
    if (cached) {
      setItineraries(cached.itineraries);
      return;
    }

    const controller = new AbortController();
    fetch("http://localhost:3000/itineraries", { signal: controller.signal })
      .then((response) => response.json())
      .then((itineraries) => {
        updateCachedItem({ itineraries }, "itineraries");
        setItineraries(itineraries);
      })
      .catch((error) => console.log(error));

    return () => {
      controller.abort();
    };
  }, []);

  let value = {
    locations,
    itineraries,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
