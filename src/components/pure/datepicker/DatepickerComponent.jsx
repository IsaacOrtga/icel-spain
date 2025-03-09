import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../../../assets/styles/datepicker.css";

function DatepickerComponent({ selected, onChange }) {
  return (
    <>
      <DatePicker
        showIcon
        toggleCalendarOnIconClick
        className="dapicker-input"
        dateFormat="dd-MM-yyyy"
        selected={selected}
        onChange={onChange}
      />
    </>
  );
}

export default DatepickerComponent;
