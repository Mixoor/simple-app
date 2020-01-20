import React from "react";
import PropTypes from "prop-types";
import Sidemenu from "@/components/Sidemenu/Sidemenu";
import RightContainer from "@/components/RightContainer/RightContainer";
import "./MainLayout.css";
class MainLayout extends React.Component {
  constructor(props) {
    super(props);
    this.state = { width: 250 };
  }

  toggleSidemenu() {
    const width = this.state.width === 250 ? 60 : 250;
    this.setState({ width });
  }

  render() {
    return (
      <div className="container">
        <Sidemenu width={this.state.width} />
        <RightContainer
          width={this.state.width}
          toggleSidemenu={() => {
            this.toggleSidemenu();
          }}
        >
          {this.props.children}
        </RightContainer>
      </div>
    );
  }
}

export default MainLayout;
