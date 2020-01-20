import React from "react";
import PropTypes from "prop-types";
import "./Header.css";
class Header extends React.Component {
  render() {
    return (
      <div className="header-main">
        <div className="header-row">
          <h3 className="my-header">{this.props.title}</h3>
          <>{this.props.children}</>
        </div>

        <div className="divider"></div>
      </div>
    );
  }
}

Header.propTypes = {
  title: PropTypes.string
};

export default Header;
