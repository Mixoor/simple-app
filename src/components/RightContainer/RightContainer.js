import React from "react";
import PropTypes from "prop-types";
import "./RightContainer.css";
import Navbar from "../Navbar/Navbar";
class RightContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="right-side">
        <Navbar onPress={this.props.toggleSidemenu} />
        <div className="page-padding">{this.props.children}</div>
      </div>
    );
  }
}

RightContainer.propTypes = {};

export default RightContainer;
