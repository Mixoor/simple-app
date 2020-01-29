import React from "react";
import PropTypes from "prop-types";
import "./Header.css";

/**
 * Header is h3 title with divider
 *  <Header title="Permission" />
 *   you can also add some compoenent to be presented in the right side
 *   <Header title="some title">
 *          <SomeComponent/>
 *   </Header>
 *
 * */
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
