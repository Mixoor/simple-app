import React from "react";
import {Tab} from "semantic-ui-react";
import PropTypes from "prop-types";
import './CustomTab.css';
/**
 * Create a custom tab
 *       <CustomTab panes={[
              { menuItem: 'Tab 1', render: () => <Tab.Pane>Tab 1 Content</Tab.Pane> },
              { menuItem: 'Tab 2', render: () => <Tab.Pane>Tab 2 Content</Tab.Pane> },
              { menuItem: 'Tab 3', render: () => <Tab.Pane>Tab 3 Content</Tab.Pane> },
          ]}/>
 *      you can replace <Tab.Pane> with your component
 *
 *
 * */

const CustomTab =(props)=>{
    return (
        <div className='tab-custom'>
        <Tab menu={{ text: true }} {...props} />
        </div>

    );
}





export default CustomTab;