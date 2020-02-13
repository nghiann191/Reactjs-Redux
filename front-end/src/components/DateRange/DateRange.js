import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { setDate } from "../../actions";
import { connect } from "react-redux";

const DateRange = (props) => {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date())
    return (
      <div>
        <DatePicker
          selected={startDate}
          onChange={startDate => setStartDate(startDate)}
          selectsStart
          startDate={startDate}
          endDate={endDate}
        />
        <DatePicker
          selected={endDate}
          onChange={endDate => setEndDate(endDate)}
          selectsEnd
          startDate={startDate}
          endDate={endDate}
          minDate={startDate}
        />
        <button
          type="submit"
          style={{ backgroundColor: "#5ed8ae", width: "40px" }}
          onClick={() => {
            props.setDate(startDate, endDate);
          }}
        >
          GO
        </button>
      </div>
    );
}
function mapDispatchToProps(dispatch) {
  return {
    setDate: (startDate, endDate) => dispatch(setDate(startDate, endDate))
  };
}
export default connect(null, mapDispatchToProps)(DateRange);
