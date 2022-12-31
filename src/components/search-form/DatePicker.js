import React, { useCallback, useMemo } from "react";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.min.css";
import { dateFormatDayMonthYear } from "../helper-functions";

const dateFormat = "dd/MM/yyyy";

function DatePicker({ value, handleChange, children }) {
  const onChange = useCallback((stringValue) => {
    const timestamp = Date.parse(stringValue);
    handleChange(timestamp);
  }, []);

  const labelDate = useMemo(
    () => (value ? dateFormatDayMonthYear(value) : dateFormat),
    [value]
  );

  return (
    <>
      <label>
        {`Departure date `}
        <small className="text-muted">({labelDate})</small>
      </label>
      <ReactDatePicker
        selected={value || 0}
        onChange={onChange}
        dateFormat={dateFormat}
        minDate={Date.now()}
        customInput={children}
        placeholderText="Select a departure date"
        popperModifiers={[
          {
            // needed to fix a bug with datepicker triangle display:
            name: "arrow",
            options: { padding: 18 },
          },
        ]}
      />
    </>
  );
}

export default DatePicker;
