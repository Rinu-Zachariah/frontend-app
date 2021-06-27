import React, {useState} from "react";
import DatePicker from "react-datepicker";

const DatePickerMenu = () => {
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  return (
    <div className="media-plan-container-datepicker">
      <div className="media-plan-container-column">
        <div className="media-plan-container-label">Start Date</div>
        <DatePicker
          selected={startDate}
          maxDate={endDate}
          onChange={date => setStartDate(date)}
        />
      </div>
      <div className="media-plan-container-column">
        <div className="media-plan-container-label">End Date</div>
        <DatePicker
          selected={endDate}
          minDate={startDate}
          onChange={date => setEndDate(date)}
        />
      </div>
    </div>
  );
};

export default DatePickerMenu;





