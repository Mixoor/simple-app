import React from "react";
import PropTypes from "prop-types";
import {NavLink} from "react-router-dom";
import { Icon } from "semantic-ui-react";
class MenuItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle(e) {
    e.preventDefault();
    const show = this.state.show;
    this.setState({ show: !show });
  }

  componentDidUpdate(prevProps) {
    if (prevProps.width !== this.props.width) {
      const show = this.props.width === 100;
      this.setState({ show: show });
    }
  }

  render() {
    const { item } = this.props;
    const dropStyle = this.state.show ? "sous-menu" : "sous-menu display-none";
    const iconName = this.state.show ? "angle up" : "angle down";
    const spanClass = this.props.end ? "item item-end" : "item";
    return (
      <>
        {item.sousMenu && item.sousMenu.length === 0 ? (
            <span className={spanClass}>
              <NavLink to={item.path} activeClassName={"active"} exact={true}>

                  <Icon name={item.icon.name} color={item.icon.color} />
                    <span>{item.name}</span>
            </NavLink>
            </span>


          ) : (
          <div className="has-menu">
            <span
              className={spanClass}

            >
                            <NavLink to={item.path} activeClassName={"active"}     onClick={(e) => {
                              this.toggle(e);
                            }}>

              <Icon name={item.icon.name} color={item.icon.color} />
              <span>
                {item.name}
                <Icon name={iconName} color="black" className="last" />
              </span>
        </NavLink>
            </span>
            <div className={dropStyle}>
              {item.sousMenu.map((it, i) => {
                return (
                    <span className="item" key={`sous-menu-${i}`}>
                    <NavLink to={it.path} activeClassName={"active"}>
                          <Icon name={it.icon.name} color={it.icon.color} />
                          <span>{it.name}</span>
                    </NavLink>
                        </span>

                );
              })}
            </div>
          </div>
        )}
      </>
    );
  }
}

MenuItem.propTypes = {
  // item: PropTypes.array
};

export default MenuItem;
