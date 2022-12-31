import React from "react";
import { BrowserRouter } from "react-router-dom";
import Routing from "./Routing";
import { AppContextProvider } from "../context/AppContext";

function App() {
  return (
    <BrowserRouter>
      <AppContextProvider>
        <Routing />
      </AppContextProvider>
    </BrowserRouter>
  );
}

export default App;
