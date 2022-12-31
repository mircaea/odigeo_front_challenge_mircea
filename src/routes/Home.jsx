import React from "react";
import Search from "../components/search-form/Search";

function Home() {
  return (
    <div>
      <div className="container-fluid">
        <div className="mx-2 pt-4 pb-3">
          <p className="text-muted">Planning your trip</p>
          <p className="fs-3 py-1">Where would you like to go?</p>
        </div>
        <Search />
      </div>
    </div>
  );
}

export default Home;
