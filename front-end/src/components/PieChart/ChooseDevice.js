import React from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Table
} from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import _ from 'lodash';

class ChooseDevice extends React.Component {
  state = {
    modal: false,
    tick: true
  };
  toggle = () => {
    this.setState({ modal: !this.state.modal });
  };
  checkTick = () => {
    const data = this.props.data;
    this.setState({ tick: !this.state.tick });
  };
  listDevice = () => {

  };
  render() {
    return (
      <div>
        <Button color="danger" onClick={this.toggle}>
          +
        </Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>List Devices</ModalHeader>
          <ModalBody>
            {this.props.data.map((e, index) => {
              return (
                <div className="row" key={index}>
                  <div className="col-md-8">
                    {e.name}
                  </div>
                  <div className="col-md-4">
                    <input type="checkbox" checked={this.state.tick} onChange={this.checkTick}/>
                  </div>
                </div>
              );
            })}
            {/* <Table>
              <tbody>
              {this.props.data.map((e, index) => {
                return (
                  <tr key={index}>
                    <td>{++index}.</td>
                    <td>{e.name}</td>
                    <td>
                      <input type="checkbox" checked={this.state.tick} onChange={this.checkTick}/>
                    </td>
                  </tr>
                );
              })}
              </tbody>
            </Table> */}
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

export default ChooseDevice;
