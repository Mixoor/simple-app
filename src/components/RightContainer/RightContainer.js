import React from "react";
import PropTypes from "prop-types";
import "./RightContainer.css";
import Navbar from "../Navbar/Navbar";
class RightContainer extends React.Component {



  render() {
    return (
      <div className="right-side">
        <Navbar isMobile={this.props.isMobile} onPress={this.props.toggleSidemenu}   {...this.props}/>
        <div className="page-padding">{this.props.children}</div>
      </div>
    );
  }
}

RightContainer.propTypes = {};

export default RightContainer;
