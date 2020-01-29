import React from "react";
import PropTypes from "prop-types";
import {  Icon, Image, Dropdown,Popup ,Checkbox} from "semantic-ui-react";
import "./Navbar.css";


/**
 * @Component
 * navbar contain the toggle icon for sidebar , name of the complexe,notification icon,
 * username and picture
 *
 * */
class Navbar extends React.Component {

    constructor(props){
        super(props);
        this.state={
            checked:localStorage.getItem("dark")==="dark"
        };

        this.onSwitchMode= this.onSwitchMode.bind(this);
        this.onChangeHandler= this.onChangeHandler.bind(this);
    }

    onChangeHandler(event,data){
        console.log("data",data);
    }

    onSwitchMode(){
        this.setState({checked:!this.state.checked});
        this.props.toggleDarkMode();
    }

    render() {



    const trigger = (
        <Image tabIndex="0"
            src="https://react.semantic-ui.com/images/wireframe/square-image.png"
            avatar
            circular
        />
    );


    return (
      <div className="navbar-container">
        <div className="navbar" >
          <div className='navbar-left'>

            {this.props.isMobile ?
                <Popup  position="bottom left" content='This feature is disabled ' trigger={<Icon
                    name="bars"
                    className="navbar-icon"
                    onClick={this.props.onPress}
                />
                }
                />
                :
                <Icon
                    name="bars"
                    className="navbar-icon"
                    onClick={this.props.onPress}
                />
                }



            <span className="header"> Complexe Le Park Servon</span>
          </div>
          <div className="navbar-right">

           <Icon name="bell outline" className="navbar-icon" />


            {/* <div style={{ position: "absolute", left: 0 }}>
                <Label circular color="green">
                  2
                </Label>
              </div> */}

            <span className="name">John Doe</span>


            <Dropdown closeOnChange={false}
                      labeled
                      button
                      onChange={this.onChangeHandler}
                      trigger={trigger} icon={null}
                      className="profile-dropdown"
                      direction='left'
                      // options={options}
            >

                <Dropdown.Menu>
                    <Dropdown.Item text={<span >
                        Signed in as <strong>John Doe</strong>
                    </span>}  disabled />
                    <Dropdown.Item text='Your Profile' />
                    <Dropdown.Item  onClick={this.onSwitchMode} text=
                    <span className="switch-mode"> Dark mode
                        <Checkbox slider  disabled checked={this.state.checked}  />
                    </span>
                    />
                    <Dropdown.Item text='Settings' />

                    <Dropdown.Item text='Sign out' />

                </Dropdown.Menu>

            </Dropdown>

          </div>
        </div>
        </div>

    );
  }
}

Navbar.propTypes = {};

export default Navbar;
