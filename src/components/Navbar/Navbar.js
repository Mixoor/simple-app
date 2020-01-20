import React from "react";
import PropTypes from "prop-types";
import { Grid, Icon, Header, Image, Label } from "semantic-ui-react";
import "./Navbar.css";
class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Grid>
        <Grid.Row className="navbar" verticalAlign="middle">
          <Grid.Column>
            <Icon
              name="bars"
              className="navbar-icon"
              onClick={this.props.onPress}
            />
          </Grid.Column>
          <Grid.Column width={10} mobile={4}>
            <span className="header"> Complexe Le Park Servon</span>
          </Grid.Column>

          <Grid.Column width={1} textAlign="right">
            <Icon name="bell outline" className="navbar-icon" />
            {/* <div style={{ position: "absolute", left: 0 }}>
                <Label circular color="green">
                  2
                </Label>
              </div> */}
          </Grid.Column>
          <Grid.Column width={1} textAlign="right">
            <span className="name">John Doe</span>
          </Grid.Column>
          <Grid.Column
            style={{ padding: 0 }}
            width={1}
            mobile={3}
            textAlign="left"
          >
            <Image
              src="https://react.semantic-ui.com/images/wireframe/square-image.png"
              avatar
              circular
            />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

Navbar.propTypes = {};

export default Navbar;
