import React, { useCallback, useMemo } from "react";
import { useParams } from "react-router-dom";
import {
  dateFormatDayMonthYear,
  dbDateMatchesDate,
  dbDateToString,
  getTimeDifference,
} from "../components/helper-functions";
import { useAppContext } from "../context/AppContext";
import { useNavigate } from "react-router-dom";
import PlaneSvg from "../assets/plane.svg";

function Results() {
  const { itineraries } = useAppContext();
  const navigate = useNavigate();
  const { search } = useParams();
  const { departure, arrival, date } = JSON.parse(search);

  const pool = itineraries
    .filter((item) => {
      if (departure && item.departureLocation !== departure) {
        return false;
      }
      if (arrival && item.arrivalLocation !== arrival) {
        return false;
      }
      return !date || dbDateMatchesDate(item.departureDate, date);
    })
    .sort((a, b) => a.price - b.price);

  const labelDeparture = departure ? (
    departure
  ) : (
    <span className="text-muted">(departure)</span>
  );
  const labelArrival = arrival ? (
    arrival
  ) : (
    <span className="text-muted">(arrival)</span>
  );
  const labelDepartureDate = useMemo(
    () => (date && date !== "undefined" ? dateFormatDayMonthYear(date) : null),
    []
  );

  const pricePart1 = useCallback((price) => String(price).split(".")[0], []);
  const pricePart2 = useCallback((price) => String(price).split(".")[1], []);
  const openSearch = () => navigate("/");

  return (
    <div className="container-fluid p-3">
      <div className="d-flex justify-content-between align-items-center">
        <p className="fs-2">
          {labelDeparture} - {labelArrival}
        </p>
        <button
          data-testid="btn-new-search"
          className="btn btn-outline-primary-custom btn-sm"
          onClick={openSearch}
        >
          New search
        </button>
      </div>
      <p className="pb-4">
        {labelDepartureDate ? `Departure date: ${labelDepartureDate}` : ""}
      </p>

      {pool &&
        pool.map((item, idx) => (
          <article
            data-testid="result-article"
            key={idx}
            className="mb-3 p-2 rounded results-card"
          >
            <div className="d-flex justify-content-between align-items-center">
              <div>
                <p className="fs-2">
                  {item.departureDate.hourOfDay}:{item.departureDate.minute}
                </p>
                <p>{item.departureLocation}</p>
                {date && date !== "undefined" ? null : (
                  <p className="text-muted fs-small">
                    {dbDateToString(item.departureDate)}
                  </p>
                )}
              </div>

              <div className="d-flex flex-column align-items-center justify-content-center">
                <img
                  src={PlaneSvg}
                  alt="compare"
                  width="27px"
                  height="35px"
                  className="plane"
                />
                <p className="text-muted time-info">
                  {getTimeDifference(item.departureDate, item.arrivalDate)}
                </p>
              </div>

              <div>
                <p className="fs-2 text-end">
                  {item.arrivalDate.hourOfDay}:{item.arrivalDate.minute}
                </p>
                <p className="text-end">{item.arrivalLocation}</p>
                <p className="text-muted fs-small">
                  {dbDateToString(item.arrivalDate)}
                </p>
              </div>
            </div>

            <div className="d-flex justify-content-between align-items-end pt-2">
              <p className="carrier">{item.carrier}</p>
              <p className="price">
                <span>&euro;&nbsp;</span>
                <span className="fs-2">{pricePart1(item.price)}.</span>
                <span>{pricePart2(item.price)}</span>
              </p>
            </div>
          </article>
        ))}
    </div>
  );
}

export default Results;
