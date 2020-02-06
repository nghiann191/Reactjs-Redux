import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { setDate } from "../../actions";
import { connect } from "react-redux";

class DateRange extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: new Date(),
      endDate: new Date()
    };
  }
  render() {
    return (
      <div>
        <DatePicker
          selected={this.state.startDate}
          onChange={startDate => this.setState({ startDate })}
          selectsStart
          startDate={this.state.startDate}
          endDate={this.state.endDate}
        />
        <DatePicker
          selected={this.state.endDate}
          onChange={endDate => this.setState({ endDate })}
          selectsEnd
          startDate={this.state.startDate}
          endDate={this.state.endDate}
          minDate={this.state.startDate}
        />
        <button
          type="submit"
          style={{ backgroundColor: "#5ed8ae", width: "40px" }}
          onClick={() => {
            this.props.setDate(this.state.startDate, this.state.endDate);
          }}
        >
          GO
        </button>
      </div>
    );
  }
}
function mapDispatchToProps(dispatch) {
  return {
    setDate: (startDate, endDate) => dispatch(setDate(startDate, endDate))
  };
}
export default connect(null, mapDispatchToProps)(DateRange);
