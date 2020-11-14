import React from "react";
import {required} from "./../../validators/validator";
import Popup from "./Popup";
import {PopupboxManager} from "react-popupbox";

class PopupContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.data.id,
      firstName: this.props.data.firstName,
      lastName: this.props.data.lastName,
      firstNameValid: false,
      lastNameValid: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.data.id != this.props.data.id) {
      this.setState({
        id: this.props.data.id,
        firstName: this.props.data.firstName,
        lastName: this.props.data.lastName,
      });
    }
  }
  componentWillReceiveProps(nextProps, nextContext) {
    if (nextProps.data.firstName != this.state.firstName) {
      this.setState({
        firstName: nextProps.data.firstName,
        firstNameValid: false,
      });
    }
    if (nextProps.data.lastName != this.state.lastName) {
      this.setState({
        lastName: nextProps.data.lastName,
        lastNameValid: false,
      });
    }
  }

  handleChange = (e) => {
    if (e.currentTarget.name == "firstName") {
      this.setState({firstName: e.currentTarget.value});
      this.setState({firstNameValid: false});
    } else {
      this.setState({lastName: e.currentTarget.value});
      this.setState({lastNameValid: false});
    }
  };
  handleSubmit(event) {
    event.preventDefault();
    let firstNameValid = required(this.state.firstName);
    let lastNameValid = required(this.state.lastName);
    if (firstNameValid || lastNameValid) {
      if (firstNameValid) {
        this.setState({firstNameValid: true});
      }
      if (lastNameValid) {
        this.setState({lastNameValid: true});
      }
      return;
    }
    this.props.submitFunction({
      id: this.state.id,
      firstName: this.state.firstName,
      lastName: this.state.lastName,
    });
    PopupboxManager.close();
  }

  render() {
    return (
      <div>
        <Popup
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          firstName={this.state.firstName}
          lastName={this.state.lastName}
          firstNameValid={this.state.firstNameValid}
          lastNameValid={this.state.lastNameValid}
          title={this.props.title}
        />
      </div>
    );
  }
}

export default PopupContainer;
