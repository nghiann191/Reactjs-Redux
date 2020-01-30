import React from "react";
import './PieChartStyle.css';
// import _ from 'lodash';
// import { setDevice } from "../../actions";
// import { connect } from "react-redux";

class ChooseDevice extends React.Component {
  state = {
    isOpen: false,
    isSelected: false,
    listSelected: this.props.data.map(e => e.name)
  };

  handleSelect = ( title) => {
    const {listSelected} = this.state;

    if (!this.state.isOpen) {
      document.addEventListener('click', this.handleOutsideClick, false);
    } else {
      document.removeEventListener('click', this.handleOutsideClick, false);
    }

    this.setState(prevState => ({
      isOpen: !prevState.isOpen,
      isSelected: true,
      listSelected: listSelected.concat(title),
    }));
  };

  handleRemoveItem(index) {
    const { listSelected } = this.state;
    listSelected.splice(index, 1);
    this.setState({
      listSelected: listSelected
    });
  }

  handleOpen = () => {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen,
    }));
  }

   handleOutsideClick = () => {
    this.handleSelect();
  };

  filterData = () => {
    const { data } = this.props;
    const { listSelected } = this.state;
    return data.filter(item => !listSelected.find(title => item.sportTitle === title))
  }

   render() {
    const { placeholder } = this.props;
    const { listSelected, isOpen } = this.state;
    const filteredData = this.filterData();
    console.log(filteredData, listSelected)
    return (
      <div className='option-custom'>
        <div className='select-input select-input--multiple' >
          <div className='selected-list'>
            {listSelected.map((item, index) => (
              <div className='selected-item'>
                <span 
                  key={index} 
                >
                  {item === null ? placeholder : item}
                </span>
                <span onClick={() => this.handleRemoveItem(index)}>
                  x
                </span>
              </div>
            ))}
            <div className="select-click" onClick={this.handleOpen} />
          </div>
        </div>

         {isOpen ?
          <div className='select-list'>
            {filteredData.map((item, index) => (
              <div
                key={index}
                onClick={() => this.handleSelect( filteredData[index].name)}
                className='select-item'
              >
                <span className='select-title'>{item.name}</span>
              </div>
            ))}
          </div>
          : ''
        }
        
      </div>
    );
  }
}

// function mapDispatchToProps(dispatch){
//   return {
//     setDevice: (data, startDate, endDate) => dispatch(setDevice(data, startDate, endDate))
//   }
// }
// export default connect(null, mapDispatchToProps)(ChooseDevice);
export default ChooseDevice;