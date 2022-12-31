import React, { useState } from "react";
import { useAppContext } from "../../context/AppContext";
import DatePicker from "./DatePicker";
import { useNavigate } from "react-router-dom";
import ArrowSvg from "../../assets/arrow-right.svg";

function Search() {
  const { locations } = useAppContext();
  const navigate = useNavigate();

  const [departure, setDeparture] = useState("");
  const [arrival, setArival] = useState("");
  const [date, setDate] = useState();

  const handleSelectDeparture = (ev) => setDeparture(ev.target.value);
  const handleSelectArival = (ev) => setArival(ev.target.value);

  const openResults = () => {
    navigate(`/results/${JSON.stringify({ departure, arrival, date })}`);
  };

  return (
    <form className="container-fluid px-2 py-3">
      <div className="form-group pb-3">
        <label htmlFor="departure">Departure</label>
        <select
          data-testid="select-departure"
          role="select-departure"
          className="form-control mt-1"
          id="departure"
          name="departure"
          onChange={handleSelectDeparture}
        >
          <option>Departure location</option>
          {locations &&
            locations.map((item, idx) => (
              <option value={item} key={idx}>
                {item}
              </option>
            ))}
        </select>
      </div>
      <div className="form-group pb-3">
        <label htmlFor="arrival">Arival</label>
        <select
          data-testid="select-arrival"
          className="form-control mt-1"
          id="arrival"
          onChange={handleSelectArival}
        >
          <option>Arrival location</option>
          {locations &&
            locations.map((item, idx) => (
              <option value={item} key={idx}>
                {item}
              </option>
            ))}
        </select>
      </div>
      <div className="form-group pb-4">
        <DatePicker value={date} handleChange={setDate}>
          <input className="form-control mt-1" />
        </DatePicker>
      </div>
      <div className="d-grid">
        <button
          data-testid="btn-search"
          className="btn btn-primary-custom"
          type="button"
          onClick={openResults}
        >
          <div
            className="d-flex gap-1 align-items-center justify-content-center"
            style={{ color: "white" }}
          >
            Search
            <img src={ArrowSvg} alt="arrow" width="30px" height="20px" />
          </div>
        </button>
      </div>
    </form>
  );
}

export default Search;
