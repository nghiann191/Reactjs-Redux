import React from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter
} from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import _ from 'lodash';
import {FaCheck} from 'react-icons/fa';
import { setDevice } from "../../actions/ActionSetDevice";
import { connect } from "react-redux";

class ChooseDevice extends React.Component {
  state = {
    modal: false,
    listDevice: this.props.data.data
  };
  toggle = () => {
    this.setState({ modal: !this.state.modal });
  };
  checkTick = (item, index) => {
    this.setState([
      ..._.slice(this.state.listDevice, 0, index),
      {...item, isHide: !item.isHide},
      ..._.slice(this.state.listDevice, index+1)
    ])
    ;
  };
  
  render() {
    console.log(this.state.listDevice)
    return (
      <div>
        <Button color="danger" onClick={this.toggle}>
          +
        </Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>List Devices</ModalHeader>
          <ModalBody>
            {_.map(this.state.listDevice,(e, index) => {
              return (
                <div className="row" key={index} style={{cursor:"pointer"}} onClick={() => this.checkTick(e, index)}>
                  <div className="col-md-8">
                    {e.name}
                  </div>
                  {e.isHide && <div className="col-md-4">
                    <FaCheck />
                  </div>}
                </div>
              );
            })}
            
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>
              Save changes
            </Button>{" "}
            <Button color="secondary" onClick={this.toggle}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return{
    data: state.data
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    setList: (data, startDate, endDate) => {dispatch(setDevice(data, startDate, endDate))}
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(ChooseDevice);
